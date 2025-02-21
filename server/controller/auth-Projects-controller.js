const db = require("../config/db");
const jwt = require("jsonwebtoken");

/**
 * Middleware to authenticate user.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
const authenticateUser = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  jwt.verify(token, process.env.JWT_TOKEN, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    req.user = decoded;
    next();
  });
};

/**
 * Formats a date string for MySQL.
 * @param {string} isoString - The ISO date string.
 * @returns {string} - The formatted date string.
 */
const formatDateForMySQL = (isoString) => {
  return new Date(isoString).toISOString().slice(0, 19).replace("T", " ");
};

/**
 * Adds or updates a project.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const postProject = async (req, res) => {
  console.log("Received Project Data:", req.body);
  console.log("Authenticated User:", req.user);

  if (!req.user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const userId = req.user.id;

  try {
    for (const project of req.body) {
      const {
        project_title,
        project_status,
        project_details,
        start_date,
        end_date,
        continuing_working_here,
        project_site,
        employment_type,
        team_size,
        designation,
        role,
        role_description,
      } = project;

      if (
        !project_title ||
        !project_status ||
        !project_details ||
        !start_date ||
        !project_site ||
        !employment_type ||
        !team_size ||
        !designation ||
        !role ||
        !role_description
      ) {
        return res.status(400).json({ error: "All required fields must be filled" });
      }

      const formattedStartDate = formatDateForMySQL(start_date);
      const formattedEndDate = end_date ? formatDateForMySQL(end_date) : null;

      // Check if project already exists for the user
      const [existingProject] = await db.query(
        "SELECT * FROM projects WHERE user_id = ? AND project_title = ?",
        [userId, project_title]
      );

      if (existingProject.length > 0) {
        // Update existing project
        await db.query(
          `UPDATE projects SET 
            project_status = ?, project_details = ?, start_date = ?, end_date = ?, 
            continuing_working_here = ?, project_site = ?, employment_type = ?, 
            team_size = ?, designation = ?, role = ?, role_description = ?
          WHERE user_id = ? AND project_title = ?`,
          [
            project_status,
            project_details,
            formattedStartDate,
            formattedEndDate,
            continuing_working_here,
            project_site,
            employment_type,
            team_size,
            designation,
            role,
            role_description,
            userId,
            project_title,
          ]
        );
      } else {
        // Insert new project record
        await db.query(
          `INSERT INTO projects (
            user_id, project_title, project_status, project_details, start_date, end_date, 
            continuing_working_here, project_site, employment_type, team_size, designation, role, role_description
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            userId,
            project_title,
            project_status,
            project_details,
            formattedStartDate,
            formattedEndDate,
            continuing_working_here,
            project_site,
            employment_type,
            team_size,
            designation,
            role,
            role_description,
          ]
        );
      }
    }

    return res.json({ success: true, message: "Project records processed successfully." });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

/**
 * Retrieves all projects for a user.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const getProjects = async (req, res) => {
  const userId = req.user.id;

  try {
    const [projects] = await db.query("SELECT * FROM projects WHERE user_id = ?", [
      userId,
    ]);
    if (projects.length > 0) {
      return res.json(projects);
    } else {
      return res.status(404).json({ error: "No projects found" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

/**
 * Deletes a project.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const deleteProject = async (req, res) => {
  console.log("Received request to delete project:", req.params);

  if (!req.user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { projectId } = req.params;
  const userId = req.user.id;

  try {
    // Check if project exists
    const [existingProject] = await db.query(
      "SELECT * FROM projects WHERE id = ? AND user_id = ?",
      [projectId, userId]
    );

    if (existingProject.length === 0) {
      return res.status(404).json({ error: "Project not found" });
    }

    // Delete project
    await db.query("DELETE FROM projects WHERE id = ? AND user_id = ?", [
      projectId,
      userId,
    ]);

    return res.json({ success: true, message: "Project deleted successfully." });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { authenticateUser, postProject, getProjects, deleteProject };
