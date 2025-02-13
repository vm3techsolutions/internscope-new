import Link from "next/link";
import React, { useState } from "react";
import Layout from "../layout/Layout";
import axios from "axios";

function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);


    const togglePasswordVisibility = () => {
        setPasswordVisible((prevState) => !prevState);
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (!email || !password) {
            alert("Please enter both email and password.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:4000/api/company/login", {
                email,
                password,
            });

            if (response.data.success) {
                alert("Login successful!");
                localStorage.setItem('token', response.data.token)
                window.open("http://localhost:3000/company/company-dashboard", "_self")
                // window.location.href = "http://localhost:3000/candidates-dashboard/dashboard"; // Redirect to dashboard

            } else {
                alert(response.data.error || "Login failed");
            }
        } catch (err) {
            console.error(err);
            alert(err.response?.data?.error || "An error occurred.");
        }
    };

    //google
    //   const Signup=()=>{
    //     const response= window.open("http://localhost:4000/api/auth/google","_self");

    //    }
    return (
        <Layout>
            <div className="login-area pt-120 mb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-wrapper">
                                <div className="form-title">
                                    <h3>Log In Here!</h3>
                                    <span />
                                </div>
                                <form>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-inner mb-25">
                                                <label htmlFor="email">Email*</label>
                                                <div className="input-area">
                                                    <img src="assets/images/icon/email-2.svg" alt="" />
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        placeholder="info@example.com"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-inner">
                                                <label htmlFor="email">Password*</label>
                                                <input
                                                    type={!passwordVisible ? "password" : "text"}
                                                    name="password"
                                                    id="password"
                                                    placeholder="Password"
                                                />
                                                <i
                                                    onClick={() => togglePasswordVisibility()}
                                                    className={
                                                        !passwordVisible
                                                            ? "bi bi-eye-slash"
                                                            : "bi bi-eye-slash  bi-eye"
                                                    }
                                                    id="togglePassword"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-agreement form-inner d-flex justify-content-between flex-wrap">
                                                <div className="form-group">
                                                    <input type="checkbox" id="html" />
                                                    <label htmlFor="html">Remember Me</label>
                                                </div>
                                                <a href="#" className="forgot-pass">
                                                    Forget Password?
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-inner">
                                                <button className="primry-btn-2" type="submit" onClick={handleLogin}>
                                                    LogIn
                                                </button>
                                            </div>
                                        </div>
                                        <h6>
                                            Don’t have an account?
                                            <Link legacyBehavior href="/register">
                                                <a>Sign Up</a>
                                            </Link>
                                        </h6>
                                        {/* <div className="login-difarent-way ">
                                            <div className="row justify-content-center">
                                                <div className="col-md-6 text-center">
                                                    <a onClick={Signup}>
                                                        <img
                                                            src="assets/images/icon/google1.svg"
                                                            alt=""
                                                        />
                                                        Log In with Google
                                                    </a>
                                                </div>
                                                <div className="col-md-6">
                                                    <a href="https://myaccount.google.com/">
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
        </Layout>
    );
}

export default Login;
