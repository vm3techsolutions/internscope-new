
const db = require("../config/db")
const bcrypt = require('bcrypt');
const Joi = require('joi');
require('dotenv').config();

// import jwt from "jsonwebtoken" 
const jwt = require('jsonwebtoken')

// -------------------------------



// -------------------------------


const home = async (req, res) => {
  try {
    res.status(200).send("hello  is page is using router and controller...........")


  } catch (error) {
    console.log(error);

  }
}


// ============================================================================================================
//user register
// const register = async (req, res) => {
//   // const { first_name, last_name, username, email, password } = req.body;

//   // console.log(req.body);

//   const schema = Joi.object({
//     first_name: Joi.string().required(),
//     last_name: Joi.string().required(),
//     username: Joi.string().required(),
//     email: Joi.string().email().required(),
//     password: Joi.string().min(8).required(),
//   });

//   // const { error } = schema.validate(req.body);
//   // if (error) {
//   //   return res.status(400).json({ error: error.details[0].message });
//   // }


//     console.log(req.body);


//   const { firstName, lastName, username, email, password } = req.body;

//   // console.log(req);

//   try {
//     const [existingUser] = await db.query('SELECT * FROM users WHERE email = ? OR username = ?', [email, username]);
//     if (existingUser.length > 0) {
//       return res.status(409).json({ error: 'Email or username already exists' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const [result] = await db.query(
//       'INSERT INTO users (firstName, lastName, username, email, password) VALUES (?, ?, ?, ?, ?)',
//       [firstName, lastName, username, email, hashedPassword]
//     );

//     res.status(201).json({
//       success: true,
//       message: 'User registered successfully',
//       data: { userId: result.insertId },
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'An error occurred while processing your request.' });
//   }
// }

// _____+_________newcode 


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
// Google Auth Callback
const googleAuthCallback = async (req, res) => {
  // const user = req.user._json;
  // // const { sub, name, given_name, family_name, picture, email } = user;

  // console.log(user);

  // try {
  //   await db.query(
  //     "INSERT INTO google_user(sub, name, given_name, family_name, picture, email) VALUE(?, ?, ?, ?, ?, ?)",
  //     [sub, name, given_name, family_name, picture, email]
  //   );

  //   res.redirect("http://localhost:3000/login");
  // } catch (err) {
  //   console.error(err);
  //   res.status(500).json({ error: "An error occurred while processing your request." });
  // }

  const name1 = req.user._json
  // console.log(req);
  const { sub, name, given_name, family_name, picture, email } = name1;
  console.log(name1);
  db.query(`INSERT INTO google_user(sub,name,given_name,family_name,picture,email) VALUE(?,?,?,?,?,?)`, [sub, name, given_name, family_name, picture, email])

  // res.redirect("http://localhost:3000/candidates-dashboard/dashboard");

  if (req.isAuthenticated()) {
    res.redirect("http://localhost:3000/candidates-dashboard/dashboard");
  }
  else {
    res.redirect("http://localhost:3000/login")
  }
};

// _________________+________________

// const googleAuthCallback = async (req, res) => {
//   const { sub: google_id, name, email,picture } = req.user._json;

//   try {
//     const [existingUser] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

//     if (existingUser.length > 0) {
//       const user = existingUser[0];
//       // If the user exists but doesn't have a Google ID
//       if (!user.google_id) {
//         await db.query('UPDATE users SET google_id = ?,profile_picture = ? WHERE email = ?', [google_id,picture, email]);
//         return res.redirect("http://localhost:3000/candidates-dashboard/dashboard");
//       }
//     } else {
//       await db.query('INSERT INTO users (email, google_id, firstName, lastName) VALUES (?, ?, ?, ?)', [
//         email,
//         google_id,
//         name.split(' ')[0], // Assuming first name is the first part of the name
//         name.split(' ')[1] || '', // Last name (if available)
//       ]);
//     }

//     res.redirect("http://localhost:3000/candidates-dashboard/dashboard");
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'An error occurred while processing your request.' });
//   }
// };

// const googleAuthCallback = async (req, res) => {
//   const { sub: google_id, name, email, picture } = req.user._json;

//   try {
//     const [existingUser] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

//     if (existingUser.length > 0) {
//       const user = existingUser[0];

//       if (!user.google_id) {
//         // Link Google ID and update profile picture
//         await db.query(
//           'UPDATE users SET google_id = ?, profile_picture = ?, oauth_provider = "google" WHERE email = ?',
//           [google_id, picture, email]
//         );
//       }
//     } else {
//       // Create a new user record
//       await db.query(
//         'INSERT INTO users (firstName, lastName,username,email,password, google_id,  profile_picture, oauth_provider) VALUES (?, ?, ?, ?, "", ?, ?, "google")',
//         [
//           name.split(' ')[0],
//           name.split(' ')[1] || '',
//           email.split('@')[0],
//           email,
//           google_id,
//           picture,
//         ]
//       );
//     }

//     res.redirect("http://localhost:3000/candidates-dashboard/dashboard");
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'An error occurred while processing your request.' });
//   }
// };

// 01-02-25


// const googleAuthCallback = async (req, res) => {
//   const { sub: google_id, name, email, picture } = req.user._json;

//   try {
//     const [existingUser] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

//     if (existingUser.length > 0) {
//       const user = existingUser[0];

//       console.log("user"+user);
//       if (!user.google_id) {
//         // Link Google ID and update profile picture
//         await db.query(
//           'UPDATE users SET google_id = ?, profile_picture = ?, oauth_provider = "google" WHERE email = ?',
//           [google_id, picture, email]
//         );
//       }



//       // Generate JWT token with the id from the user table
//       // const token = jwt.sign(
//       //   { userId: user.id, email }, // payload with user id from the table
//       //   process.env.Jwt_token, // secret key (store this in an environment variable)
//       //   { expiresIn: '3h' } // expiration time
//       // );
//       const token = jwt.sign({ id: user.id, email: user.email }, process.env.Jwt_token, { expiresIn: '3h' });


//       console.log(token);

//       //  localStorage.setItem("token", token);
//       // Send the token as part of the response
//       res.redirect(`http://localhost:3000/candidates-dashboard/dashboard?token=${token}`);

//     } else {
//       // Create a new user record
//       await db.query(
//         'INSERT INTO users (firstName, lastName, username, email, password, google_id, profile_picture, oauth_provider) VALUES (?, ?, ?, ?, "", ?, ?, "google")',
//         [
//           name.split(' ')[0],
//           name.split(' ')[1] || '',
//           email.split('@')[0],
//           email,
//           google_id,
//           picture,
//         ]
//       );

//       // Generate JWT token for the new user with the id from the new user record
//       const [newUser] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
//       console.log(newUser+"new user");

//       const token = jwt.sign(
//         {  id: user[0].id, email: user[0].email}, // payload with new user's id
//         process.env.Jwt_token, // secret key
//         { expiresIn: '3h' } // expiration time
//       );
//       console.log(token);


//       // Send the token as part of the response
//       res.redirect(`http://localhost:3000/candidates-dashboard/dashboard?token=${token}`);

//     }

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'An error occurred while processing your request.' });
//   }
// };


// ================================================================================================
//google login and sign up---> user dashboard  22-01-25

// const getUserDashboardData = async (req, res) => {

//   const name =req.user._json;
//   console.log("hello"+name);
//   if(req.user){
//     res.status(200).json({message:"userlogin",user:name})
//   }else{
//     res.status(400).json({message:"not authenticate"})
//   }

// };


//01-02-25
// const getUserDashboardData = async (req, res) => {

//   const name1 = req.user._json;
//   const { sub, name, given_name, family_name, picture, email } = name1;

//   console.log("hello" + name);
//   if (req.user) {
//     res.status(200).json({ message: "userlogin", user: name1 })
//   } else {
//     res.status(400).json({ message: "not authenticate" })
//   }

//   console.log("helllllllllllllllll" + name);

// };
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

// ___________+________________
// const getUserDashboardData = async (req, res) => {
//   const token = req.headers.authorization?.split(" ")[1]; // Extract token from Bearer header

//   if (!token) {
//     return res.status(401).json({ error: "Not authenticated" });
//   }

//   try {
//     // Verify the token
//     const decoded = jwt.verify(token, process.env.Jwt_token);

//     // Fetch the user based on the decoded token ID
//     const [user] = await db.query("SELECT * FROM users WHERE id = ?", [decoded.id]);

//     if (user.length === 0) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     const currentUser = user[0];

//     res.status(200).json({
//       success: true,
//       message: "User dashboard data",
//       user: {
//         id: currentUser.id,
//         username: currentUser.username,
//         email: currentUser.email,
//         firstName: currentUser.firstName,
//         lastName: currentUser.lastName,
//         profile_picture: currentUser.profile_picture,
//         loginMethod: currentUser.oauth_provider === "google" ? "Google" : "Manual",
//       },
//     });
//   } catch (err) {
//     console.error("Dashboard Data Error:", err);
//     res.status(500).json({ error: "An error occurred while processing your request." });
//   }
// };


const getLogOut = async (req, res, next) => {

  req.logout(function (err) {
    if (err) { return next(err) }
    res.redirect("http://localhost:3000/login")
  })
}

//login  25-01-25

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

// _______________+____________________
// const login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const [users] = await db.query("SELECT * FROM users WHERE email = ?", [email]);

//     if (users.length === 0) {
//       return res.status(404).json({ success: false, error: "User not found" });
//     }

//     const user = users[0];

//     if (user.google_id && !user.password) {
//       return res.status(400).json({
//         success: false,
//         error: "This account is linked to Google. Please log in using Google.",
//       });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ success: false, error: "Invalid credentials" });
//     }

//     const token = jwt.sign({ id: user.id, email: user.email }, process.env.Jwt_token, { expiresIn: "3h" });

//     res.status(200).json({
//       success: true,
//       message: "Login successful",
//       token: token,
//       user: {
//         id: user.id,
//         username: user.username,
//         email: user.email,
//         firstName: user.firstName,
//         lastName: user.lastName,
//         profile_picture: user.profile_picture,
//       },
//     });
//   } catch (err) {
//     console.error("Login Error:", err);
//     res.status(500).json({ success: false, error: "An error occurred" });
//   }
// };


// Dashboard Data
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