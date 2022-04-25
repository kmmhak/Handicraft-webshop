import pool from "../db/dbConfig.js";

export const usersMessages = async (req, res) => {
  try {
    const userId = req.user.id;
    const userMessages = await pool.query(
      `SELECT * FROM messages WHERE fk_sender_id =$1 OR fk_recipient_id= $1 ORDER BY created ASC`,
      [userId]
    );
    res.status(200).json({ message: userMessages.rows });
  } catch (error) {
    res.status(400).json({ message: "Error getting messages" });
  }
};

export const sendMessages = async (req, res) => {
  try {
    const userId = req.user.id;
    const { subject, message, fk_listings_id, fk_recipient_id } = req.body;

    if (
      subject &&
      message &&
      fk_listings_id &&
      fk_recipient_id &&
      !isNaN(fk_listings_id) &&
      !isNaN(fk_recipient_id)
    ) {
      await pool.query(
        `INSERT INTO messages 
        (subject, message, fk_listings_id, fk_sender_id, fk_recipient_id) 
        VALUES ($1, $2, $3, $4, $5)`,
        [subject, message, fk_listings_id, userId, fk_recipient_id]
      );
      res.status(200).json({ message: "Message sent" });
    } else {
      res
        .status(400)
        .json({ message: "Please insert all fields with appropriate values" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
