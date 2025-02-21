const jwt = require("jsonwebtoken");
const db = require("../config/db"); // MySQL connection
const s3 = require("../config/aws");
require("dotenv").config();

//07-02-25
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const { S3Client, PutObjectCommand, GetObjectCommand } = require("@aws-sdk/client-s3");

/**
 * Middleware to authenticate a user using JWT.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
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

// 04-03-25

/**
 * Handler to post or update a user's profile.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
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

// 04-02-25

/**
 * Handler to get a user's profile.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
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

/**
 * Handler to generate a signed URL for uploading a resume to S3.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
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
