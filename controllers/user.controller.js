import { genJwt, genSaltHash, validPassword } from "../lib/utils.js";
import pool from "../db/dbConfig.js";

export const getAll = async (req, res) => {
  try {
    console.log(req.user.id);
    const users = await pool.query("SELECT * FROM users");
    res.status(200).json({ users: users.rows });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await pool.query("Select * from users where email=$1", [
      email,
    ]);

    if (user.rows.length > 0) {
      res.status(400).json({ message: "Email already in use" });
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
        const loggedInUser = user.rows;
        res.status(200).json({ user: user.rows, token });
      }
    }
  } catch (error) {
    res.status(400).json({ message: "Error logging in" });
  }
};
/*
export const authenticate = async (req, res) => {
  await handleResponse(req, res, User.authenticate, [req.user]);

export const authenticate = async (user) => result({ user }, 200);

}; */
