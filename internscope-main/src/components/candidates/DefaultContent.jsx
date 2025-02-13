import React, { useEffect, useState } from "react";
import Link from "next/link";


import axios from "axios";

//



function DefaultContent() {




  const [userdata, setuserdata] = useState({});
  //
  const [applications, setApplications] = useState(null);//manual data
  const [isGoogleLogin, setIsGoogleLogin] = useState(false); // track Google login

  // console.log("userdata"+userdata);
  console.log(applications);


  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/user/dashboard", { withCredentials: true });
      console.log("response", response);
      // setuserdata(response.data.user)
      // +
      localStorage.setItem('token',response.data.user.token)
      if (response.data.user) {
        setuserdata(response.data.user.name1);
        setIsGoogleLogin(true); // Google login available
      }
      //+

    } catch (error) {
      console.log(error);

    }
  }
  //manual data
  // const getUserDashboardData = async () => {
  //   try {
  //     const token = localStorage.getItem('token'); // Retrieve token
  //     if (!token) throw new Error("No token found");

  //     const response = await axios.get("http://localhost:4000/api/user/manual/dashboard", {
  //       headers: { Authorization: `Bearer ${token}` }, // Add token to request headers
  //     });

  //     // setApplications(response.data.user); // Set user data

  //     //+
            
  //     if (response.data.user) {
  //       setApplications(response.data.user); // Set manual login user data
  //     }

  //   } catch (error) {
  //     console.error("Error fetching user data:", error);
  //   }
  // };

  const getUserDashboardData = async () => {
    try {
      const token = localStorage.getItem('token'); // Retrieve token from local storage
      if (!token) {
        console.log("No token found in localStorage");
        return; // Token is not available, no need to proceed further
      }
  
      const response = await axios.get("http://localhost:4000/api/user/manual/dashboard", {
        headers: { Authorization: `Bearer ${token}` }, // Add token to request headers
      });
  
      if (response.data.user) {
        setApplications(response.data.user); // Set manual login user data
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  
  useEffect(() => {
    getUser()
    getUserDashboardData();
  }, [])
  return (
    <div className="col-lg-9">
      <div className="dashboard-inner">
        <div className="author-area">
          <div className="author-img">
            <img src={userdata.picture || "/assets/images/bg/author1.png"} alt="" />
          </div>
          <div className="author-content">
            <span>Hello, I’m</span>
            {/* <h4>{userdata.name }</h4> */}
            {/* <h4>{applications.firstName+" "+applications.lastName}</h4> */}
            {/* {userdata && userdata.name ? (
              <h4>{userdata.name}</h4>
            ) : applications && applications.firstName ? (
              <h4>{applications.firstName + " " + applications.lastName}</h4>
            ) : (
              <h4>Guest</h4>
            )} */}
            <h4>
            {isGoogleLogin ? userdata.name : applications && applications.firstName ? `${applications.firstName} ${applications.lastName}` : "Guest"}

            </h4>
            

          </div>
        </div>
        <div className="counter-area">
          <div className="row g-lg-4 g-md-5 gy-5 justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div className="counter-single">
                <div className="counter-icon">
                  <img src="/assets/images/icon/tt-applied.svg" alt="image" />
                </div>
                <div className="coundown">
                  <p>Total Applied</p>
                  <div className="d-flex align-items-center">
                    <h3 className="odometer">250</h3>
                    <span>+</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter-single two">
                <div className="counter-icon">
                  <img src="/assets/images/icon/save-job.svg" alt="image" />
                </div>
                <div className="coundown">
                  <p>Saved Jobs</p>
                  <div className="d-flex align-items-center">
                    <h3 className="odometer">150</h3>
                    <span>+</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter-single three">
                <div className="counter-icon">
                  <img src="/assets/images/icon/massage.svg" alt="image" />
                </div>
                <div className="coundown">
                  <p>Message</p>
                  <div className="d-flex align-items-center">
                    <h3 className="odometer">120</h3>
                    <span>+</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter-single four">
                <div className="counter-icon">
                  <img src="/assets/images/icon/cv-review.svg" alt="image" />
                </div>
                <div className="coundown">
                  <p>Review CV</p>
                  <div className="d-flex align-items-center">
                    <h3 className="odometer">500</h3>
                    <span>+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="table-wrapper">
          <h5 className="title">Current Applied Jobs:</h5>
          <div className="scroll-table">
            <table className="eg-table table category-table mb-0">
              <thead>
                <tr>
                  <th>Job Tittle</th>
                  <th>Apply Date</th>
                  <th>Company</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Job Title">
                    <div className="company-info">
                      <div className="logo">
                        <img
                          src="/assets/images/bg/company-logo/company-06.png"
                          alt=""
                        />
                      </div>
                      <div className="company-details">
                        <div className="top">
                          <h6>
                            <Link legacyBehavior href="/job-details">
                              <a>Senior UI/UX Designer</a>
                            </Link>
                          </h6>
                          <span>
                            <img
                              src="/assets/images/icon/calender2.svg"
                              alt=""
                            />{" "}
                            1 days ago
                          </span>
                        </div>
                        <ul>
                          <li>
                            <img
                              src="/assets/images/icon/location.svg"
                              alt=""
                            />
                            New-York, USA
                          </li>
                          <li>
                            <img src="/assets/images/icon/arrow2.svg" alt="" />
                            <p>
                              <span className="title">Salary:</span> $60-$90 /{" "}
                              <span className="time">Per Hour</span>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </td>
                  <td data-label="Apply Job">03/07/2022</td>
                  <td data-label="Company">
                    <Link legacyBehavior href="/company-details">
                      <a className="view-btn">Tech.Bath Com... </a>
                    </Link>
                  </td>
                  <td data-label="Status">
                    <button className="eg-btn purple-btn">Viewed</button>
                  </td>
                </tr>
                <tr>
                  <td data-label="Job Title">
                    <div className="company-info">
                      <div className="logo">
                        <img
                          src="/assets/images/bg/company-logo/company-02.png"
                          alt=""
                        />
                      </div>
                      <div className="company-details">
                        <div className="top">
                          <h6>
                            <Link legacyBehavior href="/job-details">
                              <a>React JS Developer</a>
                            </Link>
                          </h6>
                          <span>
                            <img
                              src="/assets/images/icon/calender2.svg"
                              alt=""
                            />{" "}
                            1 days ago
                          </span>
                        </div>
                        <ul>
                          <li>
                            <img
                              src="/assets/images/icon/location.svg"
                              alt=""
                            />
                            Dhaka, Bangladesh
                          </li>
                          <li>
                            <img src="/assets/images/icon/arrow2.svg" alt="" />
                            <p>
                              <span className="title">Salary:</span> $80-$100 /{" "}
                              <span className="time">Per Hour</span>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </td>
                  <td data-label="Apply Job">07/07/2022</td>
                  <td data-label="Company">
                    <Link legacyBehavior href="/company-details">
                      <a className="view-btn">Gangster Group</a>
                    </Link>
                  </td>
                  <td data-label="Status">
                    <button className="eg-btn yellow-btn">Interview</button>
                  </td>
                </tr>
                <tr>
                  <td data-label="Job Title">
                    <div className="company-info">
                      <div className="logo">
                        <img
                          src="/assets/images/bg/company-logo/company-03.png"
                          alt=""
                        />
                      </div>
                      <div className="company-details">
                        <div className="top">
                          <h6>
                            <Link legacyBehavior href="/job-details">
                              <a>WordPress Developer</a>
                            </Link>
                          </h6>
                          <span>
                            <img
                              src="/assets/images/icon/calender2.svg"
                              alt=""
                            />{" "}
                            2 days ago
                          </span>
                        </div>
                        <ul>
                          <li>
                            <img
                              src="/assets/images/icon/location.svg"
                              alt=""
                            />
                            West London, UK
                          </li>
                          <li>
                            <img src="/assets/images/icon/arrow2.svg" alt="" />
                            <p>
                              <span className="title">Salary:</span> $30K-$40K /{" "}
                              <span className="time">Monthly</span>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </td>
                  <td data-label="Apply Job">10/07/2022</td>
                  <td data-label="Company">
                    <Link legacyBehavior href="/company-details">
                      <a className="view-btn">Zoomly.Co Ltd</a>
                    </Link>
                  </td>
                  <td data-label="Status">
                    <button className="eg-btn orenge-btn">Canceled</button>
                  </td>
                </tr>
                <tr>
                  <td data-label="Job Title">
                    <div className="company-info">
                      <div className="logo">
                        <img
                          src="/assets/images/bg/company-logo/company-04.png"
                          alt=""
                        />
                      </div>
                      <div className="company-details">
                        <div className="top">
                          <h6>
                            <Link legacyBehavior href="/job-details">
                              <a>Mern-Stack Developer</a>
                            </Link>
                          </h6>
                          <span>
                            <img
                              src="/assets/images/icon/calender2.svg"
                              alt=""
                            />{" "}
                            1 week ago
                          </span>
                        </div>
                        <ul>
                          <li>
                            <img
                              src="/assets/images/icon/location.svg"
                              alt=""
                            />
                            New-York, USA
                          </li>
                          <li>
                            <img src="/assets/images/icon/arrow2.svg" alt="" />
                            <p>
                              <span className="title">Salary:</span> $20-$50 /{" "}
                              <span className="time">Per Hour</span>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </td>
                  <td data-label="Apply Job">13/07/2022</td>
                  <td data-label="Company">
                    <Link legacyBehavior href="/company-details">
                      <a className="view-btn">Marko-land Ltd</a>
                    </Link>
                  </td>
                  <td data-label="Status">
                    <button className="eg-btn purple-btn">Viewed</button>
                  </td>
                </tr>
                <tr>
                  <td data-label="Job Title">
                    <div className="company-info">
                      <div className="logo">
                        <img
                          src="/assets/images/bg/company-logo/company-05.png"
                          alt=""
                        />
                      </div>
                      <div className="company-details">
                        <div className="top">
                          <h6>
                            <Link legacyBehavior href="/job-details">
                              <a>PHP Developer</a>
                            </Link>
                          </h6>
                          <span>
                            <img
                              src="/assets/images/icon/calender2.svg"
                              alt=""
                            />{" "}
                            2 week ago
                          </span>
                        </div>
                        <ul>
                          <li>
                            <img
                              src="/assets/images/icon/location.svg"
                              alt=""
                            />
                            New-York, USA
                          </li>
                          <li>
                            <img src="/assets/images/icon/arrow2.svg" alt="" />
                            <p>
                              <span className="title">Salary:</span> $40K-$60K /{" "}
                              <span className="time">Per Month</span>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </td>
                  <td data-label="Apply Job">18/08/2022</td>
                  <td data-label="Company">
                    <Link legacyBehavior href="/company-details">
                      <a className="view-btn">Bistro.Tech Group</a>
                    </Link>
                  </td>
                  <td data-label="Status">
                    <button className="eg-btn green-btn">Success</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DefaultContent;
