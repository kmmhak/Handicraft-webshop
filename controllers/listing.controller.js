import pool from "../db/dbConfig.js";

export const getAll = async (req, res) => {
  try {
    const listings = await pool.query("SELECT * FROM listings");
    res.status(200).json({ listings: listings.rows });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default getAll;
