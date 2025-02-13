const express = require("express")
 const router=express.Router();
const authcontroller=require("../controller/auth-controller")
const myprofileAuthcontroller=require("../controller/auth-Myprofile-controller");
const addSkillsAuthcontroller=require("../controller/auth-addSkills-controller");
const addITSkillsAuthcontroller=require("../controller/auth-addITSkills-controller");
const educationAuthcontroller=require("../controller/auth-Education-controller");
const projectsAuthcontroller=require("../controller/auth-Projects-controller");

const companycontroller=require("../controller/companyController")
const bodyParser = require('body-parser')
const passport = require("passport");

// console.log(myprofileAuthcontroller);

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })






// Middleware to check if the user is authenticated
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("http://localhost:3000/login");
};

router.route("/home").get(authcontroller.home);
router.route("/user/register",urlencodedParser).post(authcontroller.register);


//google_oauth

// Google Auth Routes
router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "http://localhost:3000/register" }),
  authcontroller.googleAuthCallback
);


//google login and sign up---> user dashboard  22-01-25
// router.route("/user/dashboard").get(authcontroller.getUserDashboardData);

router.get("/user/dashboard",isAuthenticated, 
authcontroller.getUserDashboardData
);
//logout
router.get("/user/logout",authcontroller.getLogOut);
//login
router.post("/user/login",authcontroller.login)


//manualuser dashbord data
router.get("/user/manual/dashboard",authcontroller.getManualDashboardData)


//my_profile api
router.post(
  "/user/myprofile",
  myprofileAuthcontroller.authenticateUser,
  myprofileAuthcontroller.postMyprofile
);

router.get("/user/myprofile", myprofileAuthcontroller.authenticateUser, myprofileAuthcontroller.getMyProfile);


// Route to generate a signed URL for file upload
// router.post("/user/getSignedUrl",myprofileAuthcontroller.getSignedUrl);

// router.post("/user/getSignedUrl", myprofileAuthcontroller.getSignedUrl);
router.post("/user/getSignedUrl", myprofileAuthcontroller.getSignedUrlHandler);
// add Skills
router.post("/user/updateSkills", addSkillsAuthcontroller.authenticateUser, addSkillsAuthcontroller.postUpdateSkills);
router.get("/user/getSkills", addSkillsAuthcontroller.authenticateUser, addSkillsAuthcontroller.getUserSkills);
router.delete("/user/deleteSkill", addSkillsAuthcontroller.authenticateUser, addSkillsAuthcontroller.deleteSkill);     // Delete a Skill

// add Skills
router.post("/user/updateITSkills", addITSkillsAuthcontroller.authenticateUser, addITSkillsAuthcontroller.postUpdateITSkills);
router.get("/user/getITSkills", addITSkillsAuthcontroller.authenticateUser, addITSkillsAuthcontroller.getUserITSkills);
router.delete("/user/deleteITSkill", addITSkillsAuthcontroller.authenticateUser, addITSkillsAuthcontroller.deleteITSkill);     // Delete a Skill


//add education
// Education routes
router.post( "/user/education",  educationAuthcontroller.authenticateUser,  educationAuthcontroller.postEducation);

router.get(  "/user/education",  educationAuthcontroller.authenticateUser,  educationAuthcontroller.getEducation);

router.delete("/user/education/:educationId",educationAuthcontroller.authenticateUser, educationAuthcontroller.deleteEducation);

//add projects
router.post("/user/projects",  projectsAuthcontroller.authenticateUser,  projectsAuthcontroller.postProject);

router.get(  "/user/projects",  projectsAuthcontroller.authenticateUser,  projectsAuthcontroller.getProjects);
projectsAuthcontroller
router.delete(  "/user/projects/:projectId",  projectsAuthcontroller.authenticateUser,  projectsAuthcontroller.deleteProject);


// ++++++++++++++++++++++++++++++++++++++++++++++ company ++++++++++++++++++++++++++++++++++++++++
router.post("/company/register", urlencodedParser, companycontroller.registerCompany);
router.post("/company/login",companycontroller.login)
router.get("/company/manual/dashboard",companycontroller.getManualDashboardData)
// router.get("/company/logout",authcontroller.getLogOut);


// router.get("/",(req,res)=>{
//    res.status(200).send("hello");
// })
// router.route("/").get((req,res)=>{
//     res.status(200).send(".hello ")
// })
// router.route("/register").get((req,res)=>{
//     res.status(200).send("router register")
// })

 //export
 module.exports =router; 