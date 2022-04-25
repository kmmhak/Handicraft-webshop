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
    res.status(400).json({ message: "Error getting user's bids" });
  }
};

export const makeBid = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const userId = req.user.id;

    const foundListing = await pool.query(
      `SELECT * FROM listings WHERE id = $1`,
      [id]
    );
    if (foundListing.rows.length > 0) {
      const newBid = await pool.query(
        `INSERT INTO bids (fk_listings_id, fk_users_id) VALUES ($1, $2) RETURNING *`,
        [id, userId]
      );

      const foundBids = await pool.query(
        `SELECT * FROM bids WHERE fk_listings_id = $1 ORDER BY bid_time ASC`,
        [id]
      );
      const newBidId = newBid.rows[0].id;

      let index = foundBids.rows.findIndex((bid) => bid.id === newBidId);

      if (index === 0) {
        res.status(200).json({
          message: `Bid added, you are the first to bid on this item`,
        });
      } else {
        res
          .status(200)
          .json({ message: `Bid added, your queueing number is ${index}` });
      }
    } else {
      res.status(404).json({ message: "Listing not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const bidHistory = async (req, res) => {
  try {
    const userId = req.user.id;
    const foundBids = await pool.query(
      `SELECT * FROM bids WHERE fk_users_id = $1 ORDER BY bid_time DESC`,
      [userId]
    );
    res.status(200).json({ message: foundBids.rows });
  } catch (error) {
    res.status(400).json({ message: "Error getting bidding history" });
  }
};
