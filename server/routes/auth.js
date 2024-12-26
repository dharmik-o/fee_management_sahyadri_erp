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

router.post('/addDetails',(req,res) => {
  const {name,usn,mode,fee,paid} = req.body;
  const query1 = 'INSERT INTO students values(?,?)';
  db.query(query1,[name,usn],(err,result) => {
    if (err){
      console.log(('error  quering database : ',err));
      return res.status(500).json({message : 'Internal server error'})
    }
  })

  const modeQuery = 'SELECT id FROM admission_mode WHERE admission_mode = ?';
  db.query(modeQuery, [mode], (err, results) => {
    if (err) {
      console.error('Error fetching admission mode ID:', err);
      return res.status(500).json({ message: 'Database error' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'Invalid admission mode' });
    }
  const query2 = 'INSERT INTO tution values(?,?,?,?)';
  db.query(query2,[usn,modeQuery,fee,paid],(err,result) => {
    if (err){
      console.log(('error  quering database : ',err));
      return res.status(500).json({message : 'Internal server error'})
    }
  })
 
})
})
module.exports = router;