import Link from "next/link";
import React, { useReducer, useState } from "react";
import Layout from "../layout/Layout";

//myinstall//
//

//
import axios from "axios";

const ACTIONS={
  SET_FIRST_NAME:"SET_FIRST_NAME",
  SET_LAST_NAME:"SET_LAST_NAME",
  SET_USERNAME:"SET_USERNAME",
  SET_EMAIL:"SET_EMAIL",
  SET_PASSWORD:"SET_PASSWORD",
  TOGGLE_PASSWORD_VISIBILITY:"TOGGLE_PASSWORD_VISIBILITY",
  SET_CONFIRM_PASSWORD:"SET_CONFIRM_PASSWORD",
  TOGGLE_CONFIRM_PASSWORD_VISIBILITY:"TOGGLE_CONFIRM_PASSWORD_VISIBILITY",
  SET_CHECKBOX:"SET_CHECKBOX",
  RESET_FORM: "RESET_FORM", // New action type


}
const initialState = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  passwordVisible: false,
  confirmPasswordVisible: false,
  checkbox:false
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_FIRST_NAME:
      return { ...state, firstName: action.payload };
    case ACTIONS.SET_LAST_NAME:
      return { ...state, lastName: action.payload };
    case ACTIONS.SET_USERNAME:
      return { ...state, username: action.payload };
    case ACTIONS.SET_EMAIL:
      return { ...state, email: action.payload };
    case ACTIONS.SET_PASSWORD:
      return { ...state, password: action.payload };
    case ACTIONS.TOGGLE_PASSWORD_VISIBILITY:
      return { ...state, passwordVisible: !state.passwordVisible };
    case ACTIONS.SET_CONFIRM_PASSWORD:
      return { ...state, confirmPassword: action.payload };
      case ACTIONS.SET_CHECKBOX:
        return { ...state, checkbox: action.payload };
    case ACTIONS.TOGGLE_CONFIRM_PASSWORD_VISIBILITY:
      return {
        ...state,
        confirmPasswordVisible: !state.confirmPasswordVisible,
      };
    case ACTIONS.RESET_FORM: // Reset state to initialState
      return initialState;
    default: return state;//cg
  }
}
// +++++++++++++++++++++++++++++++++++++++++++++++=======@ COMPANY @==========+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const COMPANY_ACTIONS = {
  SET_FIRST_NAME: "SET_FIRST_NAME",
  SET_LAST_NAME: "SET_LAST_NAME",
  SET_USERNAME: "SET_USERNAME",
  SET_EMAIL: "SET_EMAIL",
  SET_COMPANY_NAME: "SET_COMPANY_NAME",
  SET_COMPANY_TYPE: "SET_COMPANY_TYPE",
  SET_PASSWORD: "SET_PASSWORD",
  TOGGLE_PASSWORD_VISIBILITY: "TOGGLE_PASSWORD_VISIBILITY",
  SET_CONFIRM_PASSWORD: "SET_CONFIRM_PASSWORD",
  TOGGLE_CONFIRM_PASSWORD_VISIBILITY: "TOGGLE_CONFIRM_PASSWORD_VISIBILITY",
  SET_CHECKBOX: "SET_CHECKBOX",
  RESET_FORM: "RESET_FORM"
};

const initialCompanyState = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  companyName: "",
  companyType: "",
  password: "",
  confirmPassword: "",
  passwordVisible: false,
  confirmPasswordVisible: false,
  checkbox: false
};

function companyReducer(state, action) {
  switch (action.type) {
    case COMPANY_ACTIONS.SET_FIRST_NAME:
      return { ...state, firstName: action.payload };
    case COMPANY_ACTIONS.SET_LAST_NAME:
      return { ...state, lastName: action.payload };
    case COMPANY_ACTIONS.SET_USERNAME:
      return { ...state, username: action.payload };
    case COMPANY_ACTIONS.SET_EMAIL:
      return { ...state, email: action.payload };
    case COMPANY_ACTIONS.SET_COMPANY_NAME:
      return { ...state, companyName: action.payload };
    case COMPANY_ACTIONS.SET_COMPANY_TYPE:
      return { ...state, companyType: action.payload };
    case COMPANY_ACTIONS.SET_PASSWORD:
      return { ...state, password: action.payload };
    case COMPANY_ACTIONS.TOGGLE_PASSWORD_VISIBILITY:
      return { ...state, passwordVisible: !state.passwordVisible };
    case COMPANY_ACTIONS.SET_CONFIRM_PASSWORD:
      return { ...state, confirmPassword: action.payload };
    case COMPANY_ACTIONS.TOGGLE_CONFIRM_PASSWORD_VISIBILITY:
      return { ...state, confirmPasswordVisible: !state.confirmPasswordVisible };
    case COMPANY_ACTIONS.SET_CHECKBOX:
      return { ...state, checkbox: action.payload };
    case COMPANY_ACTIONS.RESET_FORM:
      return initialCompanyState;
    default:
      return state;
  }
}


function Register() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handlePasswordToggle = () => {
    dispatch({ type: "TOGGLE_PASSWORD_VISIBILITY" });
  };

  const handleConfirmPasswordToggle = () => {
    dispatch({ type: "TOGGLE_CONFIRM_PASSWORD_VISIBILITY" });
  };

  // mycode
  const handleChangeName = (e) => {
    const { name, value } = e.target;

    dispatch({ type: ACTIONS.SET_FIRST_NAME, payload: value });
  };

  const handleChangeLastName = (e) => {
    const { name, value } = e.target;

    dispatch({ type: ACTIONS.SET_LAST_NAME, payload: value });
  };

  const handleChangeUsername = (e) => {
    const { name, value } = e.target;

    dispatch({ type: ACTIONS.SET_USERNAME, payload: value });
  };

  const handleChangeEmail = (e) => {
    const { name, value } = e.target;

    dispatch({ type: ACTIONS.SET_EMAIL, payload: value });
  };
  const handleChangePassword = (e) => {
    const { name, value } = e.target;

    dispatch({ type: ACTIONS.SET_PASSWORD, payload: value });
  };
  const handleChangeConfirmPassword = (e) => {
    const { name, value } = e.target;

    dispatch({ type: ACTIONS.SET_CONFIRM_PASSWORD, payload: value });
  };
  const handleChangeChechbox = (e) => {
    const { name, value } = e.target;

    dispatch({ type: ACTIONS.SET_CHECKBOX, payload: e.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, username, email, password, confirmPassword,checkbox } = state;
    

    console.log(state);

    // const formData=new FormData(); 
    // formData.append("firstName",firstName);
    // formData.append("lastName",lastName);
    // formData.append("username",username);
    // formData.append("email",email);
    // formData.append("password",password);

    // const [mystate,setmystate]=useState({
    //   firstName:firstName,
    //   lastName:lastName
    // })
    // console.log(mystate);

    const apis={
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
      password: password,
      google_id:null,
      profile_picture:null,
      oauth_provider:"manual"  // Specify registration type
    }
    console.log(apis);
    
    
    
    if ( !firstName.trim() || !lastName.trim() ||    !username.trim() ||    !email.trim() ||  !password.trim() || !confirmPassword.trim()|| checkbox===false) {
      alert("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
  

    // console.log(formData);
    

      const response = await axios.post("http://localhost:4000/api/user/register",apis);
      console.log(response);
      

      // if (response.status === 201) {
      //   alert("User registered successfully");
      //   window.open("http://localhost:3000/login","_self")
      // Use the backend response message
    if (response.status === 201 || response.status === 200) {
      // Handle specific messages based on the backend response
      if (response.data.message === "User registered successfully.") {
        alert(response.data.message);
        window.open("http://localhost:3000/login", "_self");
      } else if (response.data.message === "Password set successfully. Account updated.") {
        alert(response.data.message);
        window.open("http://localhost:3000/login", "_self");
      }


      // Reset form fields
      dispatch({ type: ACTIONS.RESET_FORM });
        
      }
      
      
    } catch (error) {
      if (error.status === 409) {
        alert("Email or username already exists");
      }
      else{
        alert("Error: " + error);
      }
      // console.log(error);
      
    }

  
  };
  // 
  
    const Signup=()=>{
     const response= window.open("http://localhost:4000/api/auth/google","_self");
  
    }
// ++++++++++++++++++++++++++++++++++++++++++++++++ @COMPANY @++++++++++++++++++++++++++++++++++++++++++
 const [companystate, companydispatch] = useReducer(companyReducer, initialCompanyState);

// Handling company form changes
// Handling company form changes

const handleChangeCompanyFirstName = (e) => {
  const { name, value } = e.target;
  companydispatch({ type: COMPANY_ACTIONS.SET_FIRST_NAME, payload: value });
};

const handleChangeCompanyLastName = (e) => {
  const { name, value } = e.target;
  companydispatch({ type: COMPANY_ACTIONS.SET_LAST_NAME, payload: value });
};

const handleChangeCompanyUsername = (e) => {
  const { name, value } = e.target;
  companydispatch({ type: COMPANY_ACTIONS.SET_USERNAME, payload: value });
};

const handleChangeCompanyEmail = (e) => {
  const { name, value } = e.target;
  companydispatch({ type: COMPANY_ACTIONS.SET_EMAIL, payload: value });
};

const handleChangeCompanyName = (e) => {
  const { name, value } = e.target;
  companydispatch({ type: COMPANY_ACTIONS.SET_COMPANY_NAME, payload: value });
};

const handleChangeCompanyType = (e) => {
  const { name, value } = e.target;
  companydispatch({ type: COMPANY_ACTIONS.SET_COMPANY_TYPE, payload: value });
};

const handleChangeCompanyPassword = (e) => {
  const { name, value } = e.target;
  companydispatch({ type: COMPANY_ACTIONS.SET_PASSWORD, payload: value });
};

const handleChangeCompanyConfirmPassword = (e) => {
  const { name, value } = e.target;
  companydispatch({ type: COMPANY_ACTIONS.SET_CONFIRM_PASSWORD, payload: value });
};

const handleChangeCompanyCheckbox = (e) => {
  companydispatch({ type: COMPANY_ACTIONS.SET_CHECKBOX, payload: e.target.checked });
};

// Password visibility toggle


// Submit company form
// const companyhandleSubmit = async (e) => {
//   e.preventDefault();
//   const { firstName, lastName, username, email, companyName, companyType, password, confirmPassword, checkbox } = companystate;

//   if (
//     !firstName.trim() || !lastName.trim() || !username.trim() ||  !email.trim() || !companyName.trim() || 
//     !companyType.trim() ||    !password.trim() ||    !confirmPassword.trim() ||     checkbox === false
//   ) {
//     alert("Please fill in all fields");
//     return;
//   }
  

//   if (password !== confirmPassword) {
//     alert("Passwords do not match");
//     return;
//   }


//   const apis = {
//     firstName,
//     lastName,
//     username,
//     email,
//     companyName,
//     companyType,
//     password,
//   };

//   try {
//     const response = await axios.post("http://localhost:4000/api/company/register", apis);

//     console.log("Response received:", response);

//     if (response.status === 201 || response.status === 200) {
//       if (response.data.message === "Company registered successfully.") {
//         alert(response.data.message);
//         window.open("http://localhost:3000/login", "_self");
//       }

//       // Reset form
//       companydispatch({ type: COMPANY_ACTIONS.RESET_FORM });
//     }
//   } catch (error) {
//     console.error("Error response:", error.response?.data || error.message);

//     if (error.response?.status === 409) {
//       alert("Email or username already exists");
//     } else {
//       alert("Error: " + (error.response?.data?.message || error.message));
//     }
//   }
// };

const companyhandleSubmit = async (e) => {
  e.preventDefault();

  const { firstName, lastName, username, email, companyName, companyType, password, confirmPassword, checkbox } = companystate;

  if (!firstName.trim() || !lastName.trim() || !username.trim() ||  
      !email.trim() || !companyName.trim() || !companyType.trim() ||  
      !password.trim() || !confirmPassword.trim() || checkbox === false) {
    alert("Please fill in all fields");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  // Prepare data
  const apis = {
    firstName,
    lastName,
    username,
    email,
    companyName,
    companyType,
    password
  };

  console.log("Sending data:", apis);

  try {
    const response = await axios.post("http://localhost:4000/api/company/register", apis);

    console.log("Response received:", response);

    if (response.status === 201 || response.status === 200) {
      const message = response.data.message || "Registration successful!";
      alert(message);

      // Use setTimeout to ensure alert is shown before redirection
      setTimeout(() => {
        window.location.href = "http://localhost:3000/companylogin";
      }, 1000); 

      // Reset form
      companydispatch({ type: COMPANY_ACTIONS.RESET_FORM });
    } else {
      console.warn("Unexpected response format:", response);
      alert("Unexpected response from server. Please try again.");
    }
  } catch (error) {
    console.error("Error response:", error.response?.data || error.message);

    if (error.response?.status === 409) {
      alert("Email or username already exists");
    } else {
      alert("Error: " + (error.response?.data?.message || error.message));
    }
  }
};


console.log(companystate);













  
  return (
    <Layout>
      <div className="register-area pt-120 mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="form-wrapper">
                <div className="form-title">
                  <h3>Register Account</h3>
                  <span />
                </div>
                <div className="register-tab">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <button
                        className="nav-link active"
                        id="nav-home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-home"
                        type="button"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                      >
                        Candidate
                      </button>
                      <button
                        className="nav-link"
                        id="nav-profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-profile"
                        type="button"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                      >
                        Company
                      </button>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-inner mb-25">
                              <label htmlFor="firstname1">First Name*</label>
                              <div className="input-area">
                                <img
                                  src="assets/images/icon/user-2.svg"
                                  alt=""
                                />
                                <input
                                  type="text"
                                  id="firstname1"
                                  name="firstName"
                                  placeholder="Mr. Robert"
                                  value={state.firstName}
                                  onChange={handleChangeName}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-inner mb-25">
                              <label htmlFor="lastname1">Last Name*</label>
                              <div className="input-area">
                                <img
                                  src="assets/images/icon/user-2.svg"
                                  alt=""
                                />
                                <input
                                  type="text"
                                  id="lastname1"
                                  name="lastName"
                                  placeholder="Jonson"
                                  value={state.lastName}
                                  onChange={handleChangeLastName}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-inner mb-25">
                              <label htmlFor="username">User Name*</label>
                              <div className="input-area">
                                <img
                                  src="assets/images/icon/user-2.svg"
                                  alt=""
                                />
                                <input
                                  type="text"
                                  id="username"
                                  name="username"
                                  placeholder="robertjonson"
                                  value={state.username}
                                  onChange={handleChangeUsername}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-inner mb-25">
                              <label htmlFor="email">Email*</label>
                              <div className="input-area">
                                <img
                                  src="assets/images/icon/email-2.svg"
                                  alt=""
                                />
                                <input
                                  type="text"
                                  id="email"
                                  name="email"
                                  placeholder="info@example.com"
                                  value={state.email}
                                  onChange={handleChangeEmail}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-inner mb-25">
                              <label htmlFor="password">Password*</label>
                              <input
                                type={
                                  !state.passwordVisible ? "password" : "text"
                                }
                                name="password"
                                id="password"
                                placeholder="Password"
                                value={state.password}
                                onChange={handleChangePassword}
                              />
                              <i
                                onClick={handlePasswordToggle}
                                className={
                                  !state.passwordVisible
                                    ? "bi bi-eye-slash"
                                    : "bi bi-eye-slash  bi-eye"
                                }
                                id="togglePassword"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-inner">
                              <label htmlFor="password2">
                                Confirm Password*
                              </label>
                              <input
                                type={
                                  !state.confirmPasswordVisible
                                    ? "password"
                                    : "text"
                                }
                                name="confirmpassword"
                                id="password2"
                                placeholder="Confirm Password"
                                value={state.confirmPassword}
                                onChange={handleChangeConfirmPassword}
                              />
                              <i
                                onClick={handleConfirmPasswordToggle}
                                className={
                                  !state.confirmPasswordVisible
                                    ? "bi bi-eye-slash"
                                    : "bi bi-eye-slash  bi-eye"
                                }
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-agreement form-inner d-flex justify-content-between flex-wrap">
                              <div className="form-group two">
                                <input type="checkbox" id="html1" checked={state.checkbox} onClick={handleChangeChechbox}/>
                                <label htmlFor="html1">
                                  Here, I will agree company terms &amp;
                                  conditions.
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-inner">
                              <button className="primry-btn-2" type="submit">
                                Sign Up
                              </button>
                            </div>
                          </div>
                          <h6>
                            Already have an account?{" "}
                            <Link legacyBehavior href="/login">
                              <a>Login</a>
                            </Link>{" "}
                            Here
                          </h6>
                          <div className="login-difarent-way ">
                            <div className="row justify-content-center">
                              <div className="col-md-6 text-center">
                                <a  onClick={Signup}>
                                  <img
                                    src="assets/images/icon/google1.svg"
                                    alt=""
                                  />
                                  Sign Up with Google
                                </a>
                              </div>
                              {/* <div className="col-md-6">
                                <a href="https://myaccount.google.com/">
                                  <img
                                    src="assets/images/icon/facebook1.svg"
                                    alt=""
                                  />
                                  Log in with Facebook
                                </a>
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                    >
                      <form onSubmit={companyhandleSubmit}>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-inner mb-25">
                              <label htmlFor="firstname">First Name*</label>
                              <div className="input-area">
                                <img
                                  src="assets/images/icon/user-2.svg"
                                  alt=""
                                />
                                <input
                                  type="text"
                                  id="firstname"
                                  name="firstname"
                                  placeholder="Mr. Robert"
                                  value={companystate.firstName}
                                  onChange={handleChangeCompanyFirstName}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-inner mb-25">
                              <label htmlFor="lastname">Last Name*</label>
                              <div className="input-area">
                                <img
                                  src="assets/images/icon/user-2.svg"
                                  alt=""
                                />
                                <input
                                  type="text"
                                  id="lastname"
                                  name="lastname"
                                  placeholder="Jonson"
                                  value={companystate.lastName}
                                  onChange={handleChangeCompanyLastName}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-inner mb-25">
                              <label htmlFor="username">User Name*</label>
                              <div className="input-area">
                                <img
                                  src="assets/images/icon/user-2.svg"
                                  alt=""
                                />
                                <input
                                  type="text"
                                  id="username1"
                                  name="username"
                                  placeholder="robertjonson"
                                  value={companystate.username}
                                  onChange={handleChangeCompanyUsername}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-inner mb-25">
                              <label htmlFor="email">Email*</label>
                              <div className="input-area">
                                <img
                                  src="assets/images/icon/email-2.svg"
                                  alt=""
                                />
                                <input
                                  type="text"
                                  id="email1"
                                  name="email"
                                  placeholder="info@example.com"
                                  value={companystate.email}
                                  onChange={handleChangeCompanyEmail}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-inner mb-25">
                              <label htmlFor="companyname">Company Name*</label>
                              <div className="input-area">
                                <img
                                  src="assets/images/icon/category-2.svg"
                                  alt=""
                                />
                                <input
                                  type="text"
                                  id="companyname"
                                  name="companyname"
                                  placeholder="Mr. Robert"
                                  value={companystate.companyName}
                                  onChange={handleChangeCompanyName}

                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-inner mb-25">
                              <label>Company Type*</label>
                              <div className="input-area">
                                <img
                                  src="assets/images/icon/category-2.svg"
                                  alt=""
                                />
                                <select className="select1"
                                value={companystate.companyType}
                                onChange={handleChangeCompanyType}
                                >
                                  <option value="Digital Agency">Digital Agency</option>
                                  <option value="Digital Marketing Agency">
                                    Digital Marketing Agency
                                  </option>
                                  <option value="Software Company">Software Company</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-inner mb-25">
                              <label htmlFor="password">Password*</label>
                              <input
                                type={
                                  !state.passwordVisible ? "password" : "text"
                                }
                                name="password"
                                id="password"
                                placeholder="Password"
                                value={companystate.password}
                                onChange={handleChangeCompanyPassword}
                              />
                              <i
                                onClick={handlePasswordToggle}
                                className={
                                  !state.passwordVisible
                                    ? "bi bi-eye-slash"
                                    : "bi bi-eye-slash  bi-eye"
                                }
                                id="togglePassword"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-inner">
                              <label htmlFor="password2">
                                Confirm Password*
                              </label>
                              <input
                                type={
                                  !state.confirmPasswordVisible
                                    ? "password"
                                    : "text"
                                }
                                name="confirmpassword"
                                id="password2"
                                placeholder="Confirm Password"
                                value={companystate.confirmPassword}
                                onChange={handleChangeCompanyConfirmPassword}
                              />
                              <i
                                onClick={handleConfirmPasswordToggle}
                                className={
                                  !state.confirmPasswordVisible
                                    ? "bi bi-eye-slash"
                                    : "bi bi-eye-slash  bi-eye"
                                }
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-agreement form-inner d-flex justify-content-between flex-wrap">
                              <div className="form-group two">
                                <input type="checkbox" id="html" 
                                checked={companystate.checkbox}
                                onChange={handleChangeCompanyCheckbox}
                    
                                />
                                <label htmlFor="html">
                                  Here, I will agree company terms &amp;
                                  conditions.
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-inner">
                              <button className="primry-btn-2" type="submit">
                                Sign Up
                              </button>
                            </div>
                          </div>
                          <h6>
                            Already have an account?{" "}
                            <Link legacyBehavior href="/login">
                              <a>Login</a>
                            </Link>{" "}
                            Here
                          </h6>
                          {/* <div className="login-difarent-way">
                            <div className="row g-4">
                              <div className="col-md-6">
                                <a href="/api/auth/auth/google">
                                  <img
                                    src="assets/images/icon/google1.svg"
                                    alt=""
                                  />
                                  Log in with Google hello..........
                                </a>
                              </div>
                              <div className="col-md-6">
                                <a href="/api/auth/auth/google">
                                  <img
                                    src="assets/images/icon/facebook1.svg"
                                    alt=""
                                  />
                                  Log in with Facebook
                                </a>
                              </div>
                            </div>
                          </div> */}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Register;
