const express = require('express');
const db = require('../db/connection');

const router = express.Router();

// Login Route
router.post('/login', (req, res) => {
  const { name, usn } = req.body;

  if (!name || !usn) {
    return res.status(400).json({ message: 'Name and USN are required' });
  }

  const query = 'SELECT * FROM students WHERE name = ? AND usn = ?';
  db.query(query, [name, usn], (err, results) => {
    if (err) {
      console.error('Error querying database:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }

    if (results.length > 0) {
      return res.status(200).json({ message: 'Login successful' });
    } else {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  });
});

module.exports = router;

