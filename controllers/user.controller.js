import { genJwt, genSaltHash, validPassword } from "../lib/utils.js";
import pool from "../db/dbConfig.js";

export const getById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const user = await pool.query("SELECT * FROM users WHERE id=$1", [id]);

    if (user.rows.length > 0) {
      res.status(200).json({ user: user.rows });
    } else {
      res.status(404).json({ message: "No user with given id" });
    }
  } catch (error) {
    res.status(400).json({ message: "error getting user" });
  }
};

export const getAll = async (req, res) => {
  try {
    const users = await pool.query("SELECT * FROM users");
    res.status(200).json({ users: users.rows });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const register = async (req, res) => {
  try {
    const { name, email, password, password2 } = req.body;
    const errorList = [];

    const user = await pool.query("SELECT * FROM users WHERE email=$1", [
      email,
    ]);

    if (user.rows.length > 0) {
      errorList.push("Email already in use");
    }

    if (password !== password2) {
      errorList.push("Passwords do not match");
    }

    if (password.length < 6) {
      errorList.push("Password must be atleast 6 characters long");
    }
    if (errorList.length > 0) {
      res.status(400).json({ errorList });
    } else {
      const { salt, hash } = genSaltHash(password);

      pool.query(
        `INSERT INTO users (email, name, salt, hash) VALUES ($1, $2, $3, $4)`,
        [email, name, salt, hash]
      );
      res.status(200).json({ message: `Thanks for registering, ${name}` });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const errorMessage = "Wrong username or password";

  try {
    const user = await pool.query(`SELECT * FROM users WHERE email = $1`, [
      email,
    ]);

    if (user.rows.length === 0) {
      res.status(404).json({ message: errorMessage });
    } else {
      const hash = user.rows[0].hash;
      const salt = user.rows[0].salt;

      if (validPassword(password, hash, salt)) {
        const { token } = genJwt(user);
        res.status(200).json({ user: user.rows, token });
      }
    }
  } catch (error) {
    res.status(400).json({ message: "Error logging in" });
  }
};
