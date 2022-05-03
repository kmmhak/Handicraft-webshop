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

export const getByUserId = async (req, res) => {
  try {
    const id = req.params.id;

    if (isNaN(id)) {
      res.status(400).json({ message: "id needs to be a number" });
    } else {
      const foundUser = await pool.query(`SELECT * FROM users where id= $1`, [
        id,
      ]);

      if (foundUser.rows.length == 0) {
        res.status(404).json({ message: "User not found" });
      } else {
        const userListings = await pool.query(
          `SELECT * FROM listings WHERE fk_users_id = $1`,
          [id]
        );

        if (userListings.rows.length > 0) {
          res.status(200).json({ userListings: userListings.rows });
        } else {
          res.status(404).json({ message: "User has no listings" });
        }
      }
    }
  } catch (error) {
    res.status(400).json({ message: "Error getting listings" });
  }
};

export const addListing = async (req, res) => {
  try {
    const userId = req.user.id;

    const {
      title,
      brand,
      img,
      length,
      unit,
      color,
      description,
      price,
      category,
      subcategory,
    } = req.body;

    if (
      !title ||
      !description ||
      !length ||
      !price ||
      !category ||
      !subcategory
    ) {
      res.status(400).json({ message: "Please give all required fields" });
    }

    if (
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
      (title,
      brand,
      img,
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
          title,
          brand,
          img,
          length,
          unit,
          color,
          description,
          price,
          category,
          subcategory,
          userId,
        ]
      );

      res.status(200).json({ message: "New listing added" });
    }
  } catch (error) {
    res.status(400).json({ message: "Error creating a new listing" });
  }
};

export const deleteById = async (req, res) => {
  try {
    const id = req.params.id;
    const userId = req.user.id;

    if (isNaN(id)) {
      res.status(400).json({ message: "id needs to be a number" });
    } else {
      const foundListing = await pool.query(
        `SELECT * FROM listings where id = $1`,
        [id]
      );

      if (foundListing.rows.length == 0) {
        res.status(404).json({ message: "Listing not found" });
      } else if (foundListing.rows[0].fk_users_id != userId) {
        res
          .status(403)
          .json({ message: "You can only delete your own listings" });
      } else {
        await pool.query(`DELETE FROM listings WHERE id = $1`, [id]);

        res.status(200).json({ message: "listing deleted" });
      }
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const search = async (req, res) => {
  try {
    const foundListings = await pool.query(`SELECT * FROM listings`);

    res.status(200).json({ message: foundListings.rows });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
