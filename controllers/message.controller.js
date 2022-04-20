import pool from "../db/dbConfig.js";

export const usersMessages = async (req, res) => {
  try {
    const userId = req.user.id;
    const userMessages = await pool.query(
      `SELECT * FROM messages WHERE fk_sender_id =$1`,
      [userId]
    );
    res.status(200).json({ message: userMessages.rows });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default usersMessages;
