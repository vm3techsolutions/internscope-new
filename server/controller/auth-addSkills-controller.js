const jwt = require("jsonwebtoken");
const db = require("../config/db"); // MySQL connection
require("dotenv").config();

/**
 * Middleware for authentication
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const authenticateUser = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    console.log("No token provided");
    return res.status(401).json({ error: "Unauthorized" });
  }

  jwt.verify(token, process.env.JWT_TOKEN, (err, decoded) => {
    if (err) {
      console.log("JWT Verification Failed:", err);
      return res.status(401).json({ error: "Unauthorized" });
    }
    req.user = decoded;
    next();
  });
};

/**
 * Update or add user skills
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const postUpdateSkills = async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  let { skills } = req.body; // Expecting an array of skill names
  const userId = req.user.id;

  if (!skills || !Array.isArray(skills)) {
    return res.status(400).json({ error: "Invalid skills data" });
  }

  // Convert array to a single comma-separated string
  const skillsString = skills.join(", ");

  try {
    // Check if the user already has skills in the database
    const [existingSkills] = await db.query("SELECT * FROM skills WHERE user_id = ?", [userId]);

    if (existingSkills.length > 0) {
      // If skills already exist, update the skill_name for that user
      await db.query(
        "UPDATE skills SET skill_name = ?, updated_at = NOW() WHERE user_id = ?",
        [skillsString, userId]
      );
      return res.json({ success: true, message: "Skills updated successfully!" });
    } else {
      // If skills don't exist, insert a new record for the user
      await db.query(
        "INSERT INTO skills (user_id, skill_name, updated_at) VALUES (?, ?, NOW())",
        [userId, skillsString]
      );
      return res.json({ success: true, message: "Skills added successfully!" });
    }
  } catch (err) {
    console.error("Error updating skills:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

/**
 * Get user skills
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const getUserSkills = async (req, res) => {
  const userId = req.user.id;

  try {
    const [rows] = await db.query("SELECT skill_name FROM skills WHERE user_id = ?", [userId]);

    const skills = rows.map(row => row.skill_name); // Convert rows to an array of skill names
    return res.json({ success: true, skills });
  } catch (err) {
    console.error("Error fetching skills:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

/**
 * Delete a specific skill
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const deleteSkill = async (req, res) => {
  const userId = req.user.id;
  const { skill_name } = req.body;

  if (!skill_name) {
    return res.status(400).json({ error: "Skill name is required" });
  }

  try {
    await db.query("DELETE FROM skills WHERE user_id = ? AND skill_name = ?", [userId, skill_name]);
    return res.json({ success: true, message: "Skill deleted successfully!" });
  } catch (err) {
    console.error("Error deleting skill:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { authenticateUser, postUpdateSkills, getUserSkills, deleteSkill };
