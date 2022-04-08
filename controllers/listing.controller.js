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

export const addListing = async (req, res) => {
  try {
    const errorList = [];
    const {
      name,
      brand,
      photo,
      length,
      unit,
      color,
      description,
      price,
      category,
      subcategory,
      user,
    } = req.body;

    if (
      !name ||
      !description ||
      !length ||
      !price ||
      !category ||
      !subcategory ||
      !user
    ) {
      res.status(400).json({ message: "Please give all required fields" });
    }

    if (
      !Number.isInteger(user) ||
      !Number.isInteger(subcategory) ||
      !Number.isInteger(category) ||
      !Number.isInteger(length) ||
      !Number.isInteger(price)
    ) {
      res.status(400).json({
        message:
          "price, length, user, category and subcategory must be integers",
      });
    } else {
      const newListing = await pool.query(
        `INSERT INTO listings 
      (name,
      brand,
      photo,
      length,
      unit,
      color,
      description,
      price,
      fk_categories_id,
      fk_subcategories_id,
      fk_users_id) 
      VALUES
      ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
        [
          name,
          brand,
          photo,
          length,
          unit,
          color,
          description,
          price,
          category,
          subcategory,
          user,
        ]
      );

      res.status(200).json({ message: "New listing added" });
    }
  } catch (error) {
    res.status(400).json({ message: "Error adding a new listing" });
  }
};
