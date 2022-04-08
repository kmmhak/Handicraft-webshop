import pool from "../db/dbConfig.js";

export const getAll = async (req, res) => {
  try {
    const listings = await pool.query("SELECT * FROM listings");
    res.status(200).json({ listings: listings.rows });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const listings = await pool.query("SELECT * FROM listings WHERE id=$1", [
      id,
    ]);

    if (listings.rows.length > 0) {
      res.status(200).json({ listings: listings.rows });
    } else {
      res.status(404).json({ message: "No listing with given id" });
    }
  } catch (error) {
    res.status(400).json({ message: "error getting listing" });
  }
};
