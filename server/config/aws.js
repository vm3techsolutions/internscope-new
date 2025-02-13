// const { S3Client } = require("@aws-sdk/client-s3");

// require("dotenv").config();

// // Initialize S3 Client (AWS SDK v3)
// const s3 = new S3Client({
//   region: process.env.AWS_REGION, // Replace with your bucket region
//   credentials: {
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   },
// });



// module.exports = s3;
// -----------------------------
// const AWS = require("aws-sdk");

// const s3 = new AWS.S3({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   region: process.env.AWS_REGION, // Ensure this is set in your .env file
// });

// module.exports = s3;
//---------------------------------

const { S3Client } = require("@aws-sdk/client-s3");

const s3 = new S3Client({
  region: process.env.AWS_REGION, // Ensure this is set in your .env file
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

module.exports = s3;
