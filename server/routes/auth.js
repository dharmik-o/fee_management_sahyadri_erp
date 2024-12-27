const express = require("express");
const db = require("../db/connection");

const router = express.Router();

// Login Route
router.post("/login", (req, res) => {
  const { name, usn } = req.body;

  if (!name || !usn) {
    return res.status(400).json({ message: "Name and USN are required" });
  }

  const query = "SELECT * FROM student WHERE name = ? AND usn = ?";
  db.query(query, [name, usn], (err, results) => {
    if (err) {
      console.error("Error querying database:", err);
      return res.status(500).json({ message: "Internal server error" });
    }

    if (results.length > 0) {
      return res.status(200).json({ message: "Login successful" });
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  });
});

router.post("/admin-login",(req,res) => {
  const {name ,usn} = req.body;
  if(!name || !usn){
    return res.status(400).json({message: "name and id are required"});
  }

  const query = "select * from admin_users where admin_name = ? AND admin_id = ?";
  db.query(query,[name,usn],(err,results) => {
    if(err){
      console.error("error querying database : ",err);
      return res.status(500).json({message : "internal server error"});
    }
    if(results.length > 0)  return res.status(200).json({message : "login successful"})
    else return res.status(401).json({message : "invalid credentials"});
  })
});

// Add Student Details Route
router.post("/addDetails", async (req, res) => {
  const { name, usn, mode, fee, paid } = req.body;

  if (!name || !usn || !mode || fee === undefined || paid === undefined) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Start transaction
    await db.beginTransaction();

    // Insert into students table
    const studentQuery = "INSERT INTO students (name, usn) VALUES (?, ?)";
    await db.query(studentQuery, [name, usn]);

    // Fetch admission mode ID
    const modeQuery = "SELECT id FROM admission_mode WHERE admission_mode = ?";
    const [modeResult] = await db.query(modeQuery, [mode]);

    if (modeResult.length === 0) {
      await db.rollback();
      return res.status(404).json({ message: "Invalid admission mode" });
    }
    const modeId = modeResult[0].id;

    // Insert into tuition table
    const tuitionQuery = "INSERT INTO tuition (usn, mode_id, fee, paid) VALUES (?, ?, ?, ?)";
    await db.query(tuitionQuery, [usn, modeId, fee, paid]);

    // Commit transaction
    await db.commit();
    res.status(201).json({ message: "Student details added successfully" });
  } catch (err) {
    console.error("Database error:", err);
    await db.rollback();
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
