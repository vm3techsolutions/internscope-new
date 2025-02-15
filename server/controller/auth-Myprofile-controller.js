const jwt = require("jsonwebtoken");
const db = require("../config/db"); // MySQL connection
const s3 = require("../config/aws");
require("dotenv").config();

//07-02-25
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const { S3Client, PutObjectCommand, GetObjectCommand } = require("@aws-sdk/client-s3");
// const { GetObjectCommand} = require('@aws-sdk/s3-request-presigner'); // Import AWS SDK modules

// Middleware to authenticate users using token or session
// const authenticateUser = (req, res, next) => {
//   const token = req.headers.authorization?.split(" ")[1];
//   const userSession = req.session?.passport?.user;

//   console.log("Received Token:", token);  // Add this log
//   console.log("Session User:", userSession); // Add this log

//   if (token) {
//     jwt.verify(token, process.env.JWT_TOKEN, (err, decoded) => {
//       if (err) {
//         console.log("JWT Verification Failed:", err);  // Log error
//         return res.status(401).json({ error: "Unauthorized" });
//       }
//       req.user = decoded;
//       console.log("Decoded User:", decoded);  // Log decoded user info
//       next();
//     });
//   }
//    else if (userSession) {
//     req.user = { id: userSession };
//     console.log("Authenticated via Session:", userSession);
//     next();
//   } else {
//     console.log("Authentication Failed");
//     return res.status(401).json({ error: "Unauthorized" });
//   }
// };

// 01-02-25

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

// Function to create or update profile
// const postMyprofile = async (req, res) => {
//   console.log("Received Profile Data:", req.body);
//   console.log("Authenticated User:", req.user);

//   if (!req.user) {
//     return res.status(401).json({ error: "Unauthorized" });
//   }
//   const {
//     first_name,
//     age,
//     current_location,
//     phone_number,
//     email,
//     website_link,
//     current_job_place,
//     designation,
//     qualification,
//     language,
//     description,
//   } = req.body;

//   const userId = req.user.id;

//   try {
//     const [existingProfile] = await db.query(
//       "SELECT * FROM myprofile WHERE user_id = ?",
//       [userId]
//     );

//     if (existingProfile.length > 0) {
//       // Update profile
//       await db.query(
//         `UPDATE myprofile SET 
//           first_name = ?, age = ?, current_location = ?, phone_number = ?, email = ?, 
//           website_link = ?, current_job_place = ?, designation = ?, qualification = ?, 
//           language = ?, description = ? WHERE user_id = ?`,
//         [
//           first_name,
//           age,
//           current_location,
//           phone_number,
//           email,
//           website_link,
//           current_job_place,
//           designation,
//           qualification,
//           language,
//           description,
//           userId,
//         ]
//       );
//       return res.json({ success: true, message: "Profile updated successfully." });
//     } else {
//       // Insert new profile
//       await db.query(
//         `INSERT INTO myprofile (
//           user_id, first_name, age, current_location, phone_number, email, 
//           website_link, current_job_place, designation, qualification, language, 
//           description
//         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
//         [
//           userId,
//           first_name,
//           age,
//           current_location,
//           phone_number,
//           email,
//           website_link,
//           current_job_place,
//           designation,
//           qualification,
//           language,
//           description,
//         ]
//       );
//       return res.json({ success: true, message: "Profile created successfully." });
//     }
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// 01-02-25
// const postMyprofile = async (req, res) => {
//   console.log("Received Profile Data:", req.body);
//   console.log("Authenticated User:", req.user);

//   if (!req.user) {
//     return res.status(401).json({ error: "Unauthorized" });
//   }

//   const {
//     first_name,
//     last_name,
//     current_location,
//     phone_number,
//     email,
//     website_link,
//     current_job_place,
//     designation,
//     qualification,
//     language,
//     description,
//   } = req.body;

//   const userId = req.user.id;

//   try {
//     const [existingProfile] = await db.query(
//       "SELECT * FROM myprofile WHERE user_id = ?",
//       [userId]
//     );

//     if (existingProfile.length > 0) {
//       // Update profile
//       await db.query(
//         `UPDATE myprofile SET 
//           first_name = ?, last_name = ?, current_location = ?, phone_number = ?, email = ?, 
//           website_link = ?, current_job_place = ?, designation = ?, qualification = ?, 
//           language = ?, description = ? WHERE user_id = ?`,
//         [
//           first_name,
//           last_name,
//           current_location,
//           phone_number,
//           email,
//           website_link,
//           current_job_place,
//           designation,
//           qualification,
//           language,
//           description,
//           userId,
//         ]
//       );
//       return res.json({ success: true, message: "Profile updated successfully." });
//     } else {
//       // Insert new profile
//       await db.query(
//         `INSERT INTO myprofile (
//           user_id, first_name, last_name, current_location, phone_number, email, 
//           website_link, current_job_place, designation, qualification, language,
//           description
//         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
//         [
//           userId,
//           first_name,
//           last_name,
//           current_location,
//           phone_number,
//           email,
//           website_link,
//           current_job_place,
//           designation,
//           qualification,
//           language,
//           description,
//         ]
//       );
//       return res.json({ success: true, message: "Profile created successfully." });
//     }
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// };

//04-03-25

const postMyprofile = async (req, res) => {
  console.log("Received Profile Data:", req.body);
  console.log("Authenticated User:", req.user);

  if (!req.user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const {
    first_name,
    last_name,
    current_location,
    phone_number,
    email,
    website_link,
    current_job_place,
    designation,
    qualification,
    language,
    resume,
    description,
  } = req.body;

  const userId = req.user.id;

  try {
    const [existingProfile] = await db.query(
      "SELECT * FROM myprofile WHERE user_id = ?",
      [userId]
    );

    if (existingProfile.length > 0) {
      // Update profile
      await db.query(
        `UPDATE myprofile SET 
          first_name = ?, last_name = ?, current_location = ?, phone_number = ?, email = ?, 
          website_link = ?, current_job_place = ?, designation = ?, qualification = ?, 
          language = ?,resume=?, description = ? WHERE user_id = ?`,
        [
          first_name,
          last_name,
          current_location,
          phone_number,
          email,
          website_link,
          current_job_place,
          designation,
          qualification,
          language,
          resume,
          description,
          userId,
        ]
      );
      return res.json({ success: true, message: "Profile updated successfully." });
    } else {
      // Insert new profile
      await db.query(
        `INSERT INTO myprofile (
          user_id, first_name, last_name, current_location, phone_number, email, 
          website_link, current_job_place, designation, qualification, language, resume,
          description
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)`,
        [
          userId,
          first_name,
          last_name,
          current_location,
          phone_number,
          email,
          website_link,
          current_job_place,
          designation,
          qualification,
          language,
          resume,
          description,
        ]
      );
      return res.json({ success: true, message: "Profile created successfully." });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};




// const getMyProfile = async (req, res) => {
//   if (!req.user) {
//     return res.status(401).json({ error: "Unauthorized" });
//   }

//   const userId = req.user.id;

//   try {
//     const [profile] = await db.query(
//       "SELECT * FROM myprofile WHERE user_id = ?",
//       [userId]
//     );

//     if (profile.length === 0) {
//       return res.status(404).json({ error: "Profile not found" });
//     }

//     res.json(profile[0]); // Send back the profile data
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// 04-02-25
const getMyProfile = async (req, res) => {
  const userId = req.user.id; // Assuming the user is authenticated and `req.user` contains user data.

  // console.log(req.user);

  try {
    const [profile] = await db.query("SELECT * FROM myprofile WHERE user_id = ?", [userId]);
    if (profile.length > 0) {
      return res.json(profile[0]); // Send the profile back to the frontend
    } else {
      return res.status(404).json({ error: "Profile not found" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};


//04-02-25
// const getSignedUrl = (req, res) => {
//   const { fileName } = req.body;
//   const token = req.headers.authorization?.split(" ")[1];
//   console.log(req.body);


//   if (!token) {
//     return res.status(401).json({ error: "Unauthorized" });
//   }

//   jwt.verify(token, process.env.JWT_TOKEN, (err, decoded) => {
//     if (err) {
//       return res.status(401).json({ error: "Unauthorized" });
//     }

//     // Generate the signed URL
//     const s3Params = {
//       Bucket: process.env.AWS_BUCKET_NAME,
//       Key: `/resume/${Date.now()}_${fileName}`,
//       Expires: 60, // URL expiry time in seconds
//       ContentType: 'application/pdf', // Adjust the content type based on the file type
//     };

//     s3.getSignedUrl('putObject', s3Params, (err, url) => {
//       if (err) {
//         return res.status(500).json({ error: "Error generating signed URL" });
//       }

//       const resumeUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/${s3Params.Key}`;
//       res.json({ signedUrl: url, resumeUrl }); // Return signed URL and final resume URL
//     });
//   });
// };



// const getSignedUrlHandler = async (req, res) => {
//   try {
//     const { fileName } = req.body;
//     const token = req.headers.authorization?.split(" ")[1];

//     if (!token) {
//       return res.status(401).json({ error: "Unauthorized" });
//     }

//     jwt.verify(token, process.env.JWT_TOKEN, async (err, decoded) => {
//       if (err) {
//         return res.status(401).json({ error: "Unauthorized" });
//       }

//       const key = `uploads/resume/${Date.now()}_${fileName}`; // S3 object key
//       const params = {
//         Bucket: process.env.AWS_BUCKET_NAME,
//         Key: key,
//         ContentType: "application/pdf", // Adjust based on file type
//       };

//       try {
//         // Generate Signed URL using AWS SDK v3
//         const command = new PutObjectCommand(params);
//         const signedUrl = await getSignedUrl(s3, command, { expiresIn: 60 }); // 1 min expiry

//         const resumeUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/${key}`;
//         return res.json({ signedUrl, resumeUrl });
//       } catch (error) {
//         console.error("Error generating signed URL:", error);
//         return res.status(500).json({ error: "Failed to generate signed URL" });
//       }
//     });
//   } catch (error) {
//     console.error("Unexpected error:", error);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// };

const getSignedUrlHandler = async (req, res) => {
  try {
    const { fileName } = req.body;
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    jwt.verify(token, process.env.JWT_TOKEN, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      const key = `uploads/resume/${Date.now()}_${fileName}`; // S3 object key for resume
      const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: key,
        ContentType: "application/pdf", // Adjust based on file type
      };

      try {
        // Generate the signed URL for uploading the file
        const putCommand = new PutObjectCommand(params);
        const signedUrl = await getSignedUrl(s3, putCommand, { expiresIn: 60 }); // Signed URL with 1-minute expiry

        // Generate a signed URL for viewing the uploaded file
        const getCommand = new GetObjectCommand({ Bucket: process.env.AWS_BUCKET_NAME, Key: key });
        // const viewUrl = await getSignedUrl(s3, getCommand, { expiresIn: 300 }); // Signed URL with 5-minute expiry for viewing
        // const viewUrl = await getSignedUrl(s3, getCommand); // Signed URL with 5-minute expiry for viewing
        // const viewUrl = await getSignedUrl(s3, getCommand, { expiresIn: 315360000 }); // 10 years expiry
        // Set expiresIn to a maximum of 6 days (518400 seconds)
        const viewUrl = await getSignedUrl(s3, getCommand, { expiresIn: 518400 }); // 6 days expiry
        // const viewUrl = await getSignedUrl(s3, getCommand); // no expiry

        console.log(viewUrl);

        const resumeUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/${key}`; // Public URL (if needed)

        return res.json({ signedUrl, viewUrl, resumeUrl });
      } catch (error) {
        console.error("Error generating signed URL:", error);
        return res.status(500).json({ error: "Failed to generate signed URL" });
      }
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};



module.exports = { authenticateUser, postMyprofile, getMyProfile, getSignedUrlHandler };
