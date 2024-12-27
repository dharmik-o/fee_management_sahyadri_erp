const express = require('express');
const db = require("../db/connection");

const router = express.Router();
router.post("/getFeeDetails", (req, res) => {
    const { usn } = req.body;
  
    const query = `
      SELECT amount
      FROM tution
      WHERE usn = ?
    `;
  
    db.query(query, [usn], (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error fetching fee details.");
        return;
      }
  
      if (results.length === 0) {
        res.status(404).send("No fee details found for the given USN.");
      } else {
        res.json(results[0]);']'
      }
    });
  });



module.exports = router;