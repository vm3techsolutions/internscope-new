const Joi = require('joi');
const bcrypt = require('bcrypt');
const db = require('../config/db'); // Adjust the path based on your project structure


require('dotenv').config();

// import jwt from "jsonwebtoken" 
const jwt = require('jsonwebtoken')

/**
 * Registers a new company.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const registerCompany = async (req, res) => {
    const schema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        username: Joi.string().required(),
        email: Joi.string().email().required(),
        companyName: Joi.string().required(),
        companyType: Joi.string().required(),
        password: Joi.string().min(8).required()
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    try {
        const { firstName, lastName, username, email, companyName, companyType, password } = req.body;

        // Check if email or username already exists
        const [existingCompany] = await db.query(
            'SELECT * FROM companies WHERE email = ? OR username = ?',
            [email, username]
        );
        
        if (existingCompany.length > 0) {
            return res.status(409).json({ error: 'Email or username already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const [result] = await db.query(
            'INSERT INTO companies (firstName, lastName, username, email, companyName, companyType, password) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [firstName, lastName, username, email, companyName, companyType, hashedPassword]
        );

        res.status(201).json({
            success: true,
            message: 'Company registered successfully',
            data: { companyId: result.insertId }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
};

/**
 * Logs in a company.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const login = async (req, res) => {
    const { email, password } = req.body;
    console.log(email);
    
  
    try {
      const [users] = await db.query("SELECT * FROM companies WHERE email = ?", [email]);
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
      const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_TOKEN, { expiresIn: '3h' });
  
  
  
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
 * Retrieves manual dashboard data for a company.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const getManualDashboardData = async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1]; // Extract token from Bearer header
  
    if (!token) {
      return res.status(401).json({ error: "Not authenticated" });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.Jwt_token);
      const [user] = await db.query("SELECT * FROM companies WHERE id = ?", [decoded.id]);
  
      if (user.length === 0) {
        return res.status(404).json({ error: "User not found" });
      }
  
      res.status(200).json({ message: "User dashboard data", user: user[0] });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "An error occurred while processing your request." });
    }
  };

/**
 * Logs out a company.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
const getLogOut= async (req,res,next)=>{

  req.logout(function(err){
    if(err){return next(err)}
    res.redirect("http://localhost:3000/companylogin")
  })
}


module.exports = { registerCompany,login,getManualDashboardData ,getLogOut};
