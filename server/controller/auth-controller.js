const db = require("../config/db")
const bcrypt = require('bcrypt');
const Joi = require('joi');
require('dotenv').config();
const jwt = require('jsonwebtoken')

// -------------------------------



// -------------------------------

/**
 * Home route handler
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const home = async (req, res) => {
  try {
    res.status(200).send("hello  is page is using router and controller...........")
  } catch (error) {
    console.log(error);
  }
}

/**
 * Register a new user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const register = async (req, res) => {
  // Validation schema
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    google_id: Joi.string().optional().allow(null), // Optional Google ID
    profile_picture: Joi.string().uri().optional().allow(null), // Optional profile picture URL
    oauth_provider: Joi.string().valid('manual', 'google').default('manual'), // Default to manual
  });

  // console.log(req.user);

  // Validate request body
  const { error } = schema.validate(req.body);
  if (error) {
    console.error('Validation error:', error.details[0].message);
    return res.status(400).json({ error: error.details[0].message });
  }

  const { firstName, lastName, username, email, password, google_id, profile_picture, oauth_provider } = req.body;

  try {
    // Check if the user already exists
    const [existingUser] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

    if (existingUser.length > 0) {
      const user = existingUser[0];

      // Handle case where user exists but only has a Google account
      if (user.google_id && !user.password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        await db.query(
          `UPDATE users 
           SET password = ?, firstName = ?, lastName = ?, username = ?, profile_picture = ?, oauth_provider = ? 
           WHERE email = ?`,
          [
            hashedPassword,
            firstName,
            lastName,
            username,
            profile_picture || null,
            oauth_provider || 'manual',
            email,
          ]
        );
        return res.status(200).json({ success: true, message: 'Password set successfully. Account updated.' });
      }

      return res.status(409).json({ error: 'Email or username already exists.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert a new user into the database
    const [result] = await db.query(
      `INSERT INTO users 
       (firstName, lastName, username, email, password, google_id, profile_picture, oauth_provider) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        firstName,
        lastName,
        username,
        email,
        hashedPassword,
        google_id || null,
        profile_picture || null,
        oauth_provider || 'manual',
      ]
    );

    // Respond with success
    return res.status(201).json({
      success: true,
      message: 'User registered successfully.',
      data: { userId: result.insertId },
    });
  } catch (err) {
    // Log error and respond
    console.error('Database error:', err);
    return res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
};


//===========================================================================================================

/**
 * Google Auth Callback
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const googleAuthCallback = async (req, res) => {
  const name1 = req.user._json
  // console.log(req);
  const { sub, name, given_name, family_name, picture, email } = name1;
  console.log(name1);
  db.query(`INSERT INTO google_user(sub,name,given_name,family_name,picture,email) VALUE(?,?,?,?,?,?)`, [sub, name, given_name, family_name, picture, email])

  // res.redirect("http://localhost:3000/candidates-dashboard/dashboard");

  if (req.isAuthenticated()) {
    res.redirect(`${process.env.FRONT_END_URL}/candidates-dashboard/dashboard`);
  }
  else {
    res.redirect(`${process.env.FRONT_END_URL}/login`)
  }
};

/**
 * Get user dashboard data
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const getUserDashboardData = async (req, res) => {
  try {
    const name1 = req.user._json;
    const { email } = name1; // Extract email from the logged-in user

    console.log("Fetching user from DB with email: " + email);

    // Fetch user from MySQL using raw SQL query
    const [users] = await db.query("SELECT * FROM users WHERE email = ?", [email]);

    if (users.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = users[0]; // Since it's an array, get the first user

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.Jwt_token, { expiresIn: '3h' });

    // Send user data to frontend
    res.status(200).json({
      message: "User authenticated",
      user: {
        name1,
        user,
        token
        // id:user.id,
        // name: user.name, // Assuming 'name' exists in your table
        // email: user.email,
        // role: user.role, // Example: If you store user roles
        // createdAt: user.created_at, // Adjust according to your DB column name
      },
    });
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * Log out the user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const getLogOut = async (req, res, next) => {
  req.logout(function (err) {
    if (err) { return next(err) }
    res.redirect(`${process.env.FRONT_END_URL}/login`)
  })
}

/**
 * Login a user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const login = async (req, res) => {
  const { email, password } = req.body;
  // console.log(email);


  try {
    const [users] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
    if (users.length === 0) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    const user = users[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ success: false, error: "Invalid credentials" });
    }

    // Store session data
    //  req.session.userId = user.id;
    //  req.session.userName = user.username;
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.Jwt_token, { expiresIn: '3h' });



    res.status(200).json({
      success: true,
      message: "Login successful",
      token: token,
      user: { id: user.id, username: user.username, email: user.email }, // Optional user data
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "An error occurred" });
  }
};

/**
 * Get manual dashboard data
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const getManualDashboardData = async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1]; // Extract token from Bearer header

  if (!token) {
    return res.status(401).json({ error: "Not authenticated" });
  }

  try {
    const decoded = jwt.verify(token, process.env.Jwt_token);
    const [user] = await db.query("SELECT * FROM users WHERE id = ?", [decoded.id]);

    if (user.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ message: "User dashboard data", user: user[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred while processing your request." });
  }
};

module.exports = { home, register, googleAuthCallback, getUserDashboardData, getLogOut, login, getManualDashboardData };