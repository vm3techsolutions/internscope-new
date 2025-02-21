const jwt = require("jsonwebtoken");
const db = require("../config/db"); // MySQL connection
require("dotenv").config();

/**
 * Middleware for authentication
 * Verifies the JWT token and attaches the decoded user information to the request object.
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
 * Updates or adds IT skills for the authenticated user.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} JSON response indicating success or failure
 */
const postUpdateITSkills = async (req, res) => {
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
    const [existingSkills] = await db.query("SELECT * FROM itskills WHERE user_id = ?", [userId]);

    if (existingSkills.length > 0) {
      // If skills already exist, update the skill_name for that user
      await db.query(
        "UPDATE itskills SET skill_name = ?, updated_at = NOW() WHERE user_id = ?",
        [skillsString, userId]
      );
      return res.json({ success: true, message: "Skills updated successfully!" });
    } else {
      // If skills don't exist, insert a new record for the user
      await db.query(
        "INSERT INTO itskills (user_id, skill_name, updated_at) VALUES (?, ?, NOW())",
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
 * Retrieves the IT skills of the authenticated user.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} JSON response containing the user's skills
 */
const getUserITSkills = async (req, res) => {
  const userId = req.user.id;

  try {
    const [rows] = await db.query("SELECT skill_name FROM itskills WHERE user_id = ?", [userId]);

    const skills = rows.map(row => row.skill_name); // Convert rows to an array of skill names
    return res.json({ success: true, skills });
  } catch (err) {
    console.error("Error fetching skills:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

/**
 * Deletes a specific IT skill for the authenticated user.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} JSON response indicating success or failure
 */
const deleteITSkill = async (req, res) => {
  const userId = req.user.id;
  const { skill_name } = req.body;

  if (!skill_name) {
    return res.status(400).json({ error: "Skill name is required" });
  }

  try {
    await db.query("DELETE FROM itskills WHERE user_id = ? AND skill_name = ?", [userId, skill_name]);
    return res.json({ success: true, message: "Skill deleted successfully!" });
  } catch (err) {
    console.error("Error deleting skill:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { authenticateUser, postUpdateITSkills, getUserITSkills, deleteITSkill };
