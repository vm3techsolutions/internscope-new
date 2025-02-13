const db = require("../config/db");
const jwt = require("jsonwebtoken");
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

// const postEducation = async (req, res) => {
//   console.log("Received Education Data:", req.body);
//   console.log("Authenticated User:", req.user);

//   if (!req.user) {
//     return res.status(401).json({ error: "Unauthorized" });
//   }

//   const {
//     degree,
//     major,
//     institution,
//     gpa,
//     start_date,
//     end_date,
//   } = req.body;

//   const userId = req.user.id;

//   try {
//     // Check if the user already has education data
//     const [existingEducation] = await db.query(
//       "SELECT * FROM education WHERE user_id = ?",
//       [userId]
//     );

//     if (existingEducation.length > 0) {
//       // Update education record
//       await db.query(
//         `UPDATE education SET 
//           degree = ?, major = ?, institution = ?, gpa = ?, start_date = ?, end_date = ? 
//         WHERE user_id = ?`,
//         [
//           degree,
//           major,
//           institution,
//           gpa,
//           start_date,
//           end_date,
//           userId,
//         ]
//       );
//       return res.json({ success: true, message: "Education updated successfully." });
//     } else {
//       // Insert new education record
//       await db.query(
//         `INSERT INTO education (
//           user_id, degree, major, institution, gpa, start_date, end_date
//         ) VALUES (?, ?, ?, ?, ?, ?, ?)`,
//         [
//           userId,
//           degree,
//           major,
//           institution,
//           gpa,
//           start_date,
//           end_date,
//         ]
//       );
//       return res.json({ success: true, message: "Education added successfully." });
//     }
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// };


// const postEducation = async (req, res) => {
//   console.log("Received Education Data:", req.body);
//   console.log("Authenticated User:", req.user);

//   console.log(req.body[0]);
  
//   // const education=req.body
//   // console.log(education);
  
  
//   if (!req.user) {
//     return res.status(401).json({ error: "Unauthorized" });
//   }

//   const {
//     degree,
//     major,
//     institution,
//     gpa,
//     start_date,
//     end_date,
//   } = req.body[0];

//   const userId = req.user.id;
//   console.log(degree);
  

//   // Validate input fields
//   if (!degree || !major || !institution || !gpa || !start_date || !end_date) {
//     return res.status(400).json({ error: "All fields are required" });
//   }

//   try {
//     // Check if the user already has education data
//     const [existingEducation] = await db.query(
//       "SELECT * FROM education WHERE user_id = ?",
//       [userId]
//     );

//     if (existingEducation.length > 0) {
//       // Update education record
//       await db.query(
//         `UPDATE education SET 
//           degree = ?, major = ?, institution = ?, gpa = ?, start_date = ?, end_date = ? 
//         WHERE user_id = ?`,
//         [
//           degree,
//           major,
//           institution,
//           gpa,
//           start_date,
//           end_date,
//           userId,
//         ]
//       );
//       return res.json({ success: true, message: "Education updated successfully." });
//     } else {
//       // Insert new education record
//       await db.query(
//         `INSERT INTO education (
//           user_id, degree, major, institution, gpa, start_date, end_date
//         ) VALUES (?, ?, ?, ?, ?, ?, ?)`,
//         [
//           userId,
//           degree,
//           major,
//           institution,
//           gpa,
//           start_date,
//           end_date,
//         ]
//       );
//       return res.json({ success: true, message: "Education added successfully." });
//     }
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// };
// const postEducation = async (req, res) => {
//   console.log("Received Education Data:", req.body);
//   console.log("Authenticated User:", req.user);

//   if (!req.user) {
//     return res.status(401).json({ error: "Unauthorized" });
//   }

//   const {
//     degree,
//     major,
//     institution,
//     gpa,
//     start_date,
//     end_date,
//   } = req.body[0];

//   const userId = req.user.id;

//   // Validate input fields
//   if (!degree || !major || !institution || !gpa || !start_date || !end_date) {
//     return res.status(400).json({ error: "All fields are required" });
//   }

//   // Function to format date for MySQL
//   const formatDateForMySQL = (isoString) => {
//     return new Date(isoString).toISOString().slice(0, 19).replace("T", " ");
//   };

//   const formattedStartDate = formatDateForMySQL(start_date);
//   const formattedEndDate = formatDateForMySQL(end_date);

//   try {
//     // Check if the user already has education data
//     const [existingEducation] = await db.query(
//       "SELECT * FROM education WHERE user_id = ?",
//       [userId]
//     );

//     if (existingEducation.length > 0) {
//       // Update education record
//       await db.query(
//         `UPDATE education SET 
//           degree = ?, major = ?, institution = ?, gpa = ?, start_date = ?, end_date = ? 
//         WHERE user_id = ?`,
//         [
//           degree,
//           major,
//           institution,
//           gpa,
//           formattedStartDate,
//           formattedEndDate,
//           userId,
//         ]
//       );
//       return res.json({ success: true, message: "Education updated successfully." });
//     } else {
//       // Insert new education record
//       await db.query(
//         `INSERT INTO education (
//           user_id, degree, major, institution, gpa, start_date, end_date
//         ) VALUES (?, ?, ?, ?, ?, ?, ?)`,
//         [
//           userId,
//           degree,
//           major,
//           institution,
//           gpa,
//           formattedStartDate,
//           formattedEndDate,
//         ]
//       );
//       return res.json({ success: true, message: "Education added successfully." });
//     }
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// };



const postEducation = async (req, res) => {
  console.log("Received Education Data:", req.body);
  console.log("Authenticated User:", req.user);

  if (!req.user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const userId = req.user.id;

  // Function to format date for MySQL
  const formatDateForMySQL = (isoString) => {
    return new Date(isoString).toISOString().slice(0, 19).replace("T", " ");
  };

  try {
    for (const education of req.body) {
      const { degree, major, institution, gpa, start_date, end_date } = education;

      // Validate input fields
      if (!degree || !major || !institution || !gpa || !start_date || !end_date) {
        return res.status(400).json({ error: "All fields are required" });
      }

      const formattedStartDate = formatDateForMySQL(start_date);
      const formattedEndDate = formatDateForMySQL(end_date);

      // Check if the education record already exists for the user
      const [existingEducation] = await db.query(
        "SELECT * FROM education WHERE user_id = ? AND degree = ? AND institution = ?",
        [userId, degree, institution]
      );

      if (existingEducation.length > 0) {
        // Update education record
        await db.query(
          `UPDATE education SET 
            major = ?, gpa = ?, start_date = ?, end_date = ? 
          WHERE user_id = ? AND degree = ? AND institution = ?`,
          [
            major,
            gpa,
            formattedStartDate,
            formattedEndDate,
            userId,
            degree,
            institution,
          ]
        );
      } else {
        // Insert new education record
        await db.query(
          `INSERT INTO education (
            user_id, degree, major, institution, gpa, start_date, end_date
          ) VALUES (?, ?, ?, ?, ?, ?, ?)`,
          [
            userId,
            degree,
            major,
            institution,
            gpa,
            formattedStartDate,
            formattedEndDate,
          ]
        );
      }
    }

    return res.json({ success: true, message: "Education records processed successfully." });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};


const getEducation = async (req, res) => {
  const userId = req.user.id;

  try {
    const [education] = await db.query(
      "SELECT * FROM education WHERE user_id = ?",
      [userId]
    );
    if (education.length > 0) {
      return res.json(education); // Send the education records back
    } else {
      return res.status(404).json({ error: "Education not found" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteEducation = async (req, res) => {
  console.log("Received request to delete education:", req.params);

  if (!req.user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { educationId } = req.params;
  const userId = req.user.id;

  try {
    // Check if the record exists
    const [existingEducation] = await db.query(
      "SELECT * FROM education WHERE id = ? AND user_id = ?",
      [educationId, userId]
    );

    if (existingEducation.length === 0) {
      return res.status(404).json({ error: "Education record not found" });
    }

    // Delete the record
    await db.query("DELETE FROM education WHERE id = ? AND user_id = ?", [
      educationId,
      userId,
    ]);

    return res.json({ success: true, message: "Education record deleted successfully." });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};


module.exports = {authenticateUser, postEducation, getEducation,deleteEducation };
