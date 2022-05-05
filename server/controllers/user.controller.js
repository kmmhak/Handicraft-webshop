import {
  genJwt,
  genSaltHash,
  validPassword,
  validateEmail,
  isAdmin,
} from "../lib/utils.js";
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

export const changePassword = async (req, res) => {
  try {
    const { newPassword, newPassword2, oldPassword } = req.body;
    const userId = req.user.id;

    const user = await pool.query(`SELECT * FROM users WHERE id = $1`, [
      userId,
    ]);

    if (!newPassword || !newPassword2 || !oldPassword) {
      res.status(400).json({ message: "Please insert all fields" });
    } else if (newPassword !== newPassword2) {
      res.status(400).json({ message: "New passwords do not match" });
    } else if (
      validPassword(oldPassword, user.rows[0].hash, user.rows[0].salt)
    ) {
      const { hash, salt } = genSaltHash(newPassword);
      await pool.query(`UPDATE users SET hash = $1, salt = $2`, [hash, salt]);
      res.status(200).json({ message: "Password changed" });
    } else {
      res.status(400).json({ message: "invalid password" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateInfo = async (req, res) => {
  try {
    const { email } = req.body;
    const userId = req.user.id;

    if (validateEmail(email)) {
      await pool.query(`UPDATE users SET  email = $1 WHERE id = $2`, [
        email,
        userId,
      ]);
      res.status(200).json({ message: "Information updated" });
    } else {
      res.status(400).json({ message: "unvalid email" });
    }
  } catch (error) {
    res.status(400).json({ message: "Error updating information" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userId = req.user.id;
    const id = req.params.id;

    if (!isNaN(id)) {
      const foundUser = await pool.query(`SELECT * FROM users WHERE id = $1`, [
        id,
      ]);

      if (foundUser.rows.length == 0) {
        res.status(404).json({ message: "User not found" });
      } else if (userId === id) {
        await pool.query(`DELETE FROM users WHERE id = $1`, [id]);
        res.status(200).json({ message: "You have deleted your user account" });
      } else {
        const userRole = await pool.query(
          `SELECT role FROM users WHERE id = $1`,
          [userId]
        );
        if (isAdmin(userRole.rows[0].role)) {
          await pool.query(`DELETE FROM users WHERE id = $1`, [id]);
          res.status(200).json({ message: "User deleted" });
        } else {
          res.status(400).json({ message: "Could not delete user" });
        }
      }
    }
  } catch (error) {
    res.status(400).json({ message: "Error deleting a user" });
  }
};

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const errorList = [];

    const foundEmail = await pool.query("SELECT * FROM users WHERE email=$1", [
      email,
    ]);

    const foundUsername = await pool.query(
      "SELECT * FROM users WHERE username=$1",
      [username]
    );
    if (foundEmail.rows.length > 0) {
      errorList.push("Email already in use");
    }

    if (foundUsername.rows.length > 0) {
      errorList.push("Username already in use");
    }

    if (errorList.length > 0) {
      res.status(400).json({ errorList });
    } else {
      const { salt, hash } = genSaltHash(password);

      pool.query(
        `INSERT INTO users (email, username, salt, hash) VALUES ($1, $2, $3, $4)`,
        [email, username, salt, hash]
      );
      res.status(200).json({ message: `Thanks for registering, ${username}` });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const errorMessage = "Wrong email or password";

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

export const changeRole = async (req, res) => {
  try {
    const userId = req.user.id;
    const id = req.params.id;
    const { role } = req.body;
    console.log(role, userId, id);
    const foundUser = await pool.query(`SELECT * FROM users WHERE id = $1`, [
      id,
    ]);

    if (foundUser.rows.length > 0) {
      const userRole = await pool.query(
        `SELECT role FROM users WHERE id = $1`,
        [userId]
      );

      if (
        userRole.rows[0].role === "admin" ||
        userRole.rows[0].role === "super"
      ) {
        const newRole = await pool.query(
          `UPDATE users SET role = $1 WHERE id = $2`,
          [role, id]
        );
        res.status(200).json({ message: `User role changed to ${role}` });
      } else {
        res.status(400).json({ message: "You do not have admin priviliges" });
      }
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(400).json({ message: "Error changing role" });
  }
};
