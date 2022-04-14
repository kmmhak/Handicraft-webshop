import pool from "../db/dbConfig.js";

export const getById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const foundUser = await pool.query("SELECT * FROM users WHERE id=$1", [id]);

    if (foundUser.rows.length > 0) {
      const bids = await pool.query(
        `SELECT * FROM bids WHERE fk_users_id = $1`,
        [id]
      );
      res.status(200).json({ message: bids.rows });
    } else {
      res.status(404).json({ message: "No user with given id" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default getById;
