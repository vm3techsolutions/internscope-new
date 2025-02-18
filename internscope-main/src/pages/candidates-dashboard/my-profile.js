import React from "react";
import CandidateLayout from "../../layout/CandidateLayout";

import axios from "axios";
import { useState, useEffect } from "react";
function MyProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);


  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    current_location: "",
    phone_number: "",
    email: "",
    website_link: "",
    current_job_place: "",
    designation: "",
    qualification: "",
    language: "",
    resume: "",
    description: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          alert("No authentication token found!");
          return;
        }

        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACK_END_URL}/api/user/myprofile`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setFormData(response.data);
      } catch (error) {
        if (error.response && error.response.status === 403) {
          alert("Profile not found. Please create a profile.");
        } else {
          console.error("Error fetching profile:", error.response?.data || error.message);
          alert("Please create a profile.");
        }
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the first file

    if (file) {
      const allowedExtensions = ["pdf", "doc", "docx"];
      const fileExtension = file.name.split(".").pop().toLowerCase();

      if (!allowedExtensions.includes(fileExtension)) {
        alert("Invalid file type. Only .pdf, .doc, and .docx files are allowed.");
        e.target.value = ""; // Reset the file input
        return;
      }

      setFormData({ ...formData, resume: file });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("No authentication token found!");
        return;
      }

      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
      });

      const { data: signedUrlData } = await axios.post(
        `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/user/getSignedUrl`,
        { fileName: formData.resume.name },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const { signedUrl, viewUrl, resumeUrl } = signedUrlData;
      await axios.put(signedUrl, formData.resume, {
        headers: {
          "Content-Type": formData.resume.type,
        },
      });

      const updatedProfile = {
        ...formData,
        resume: viewUrl,
      };

      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACK_END_URL}/api/user/myprofile`, updatedProfile, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert(response.data.message);
      setIsSubmitted(true);
      setIsOpen(false);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert("Failed to update profile.");
    }
  };

  console.log(formData);

  return (
    <CandidateLayout>
      <div className="col-lg-9">
        <div className="my-profile-inner">
          <div className="form-wrapper mb-60">
            <div className="section-title">
              <h5>My Profile</h5>
              <button onClick={() => setIsOpen(true)} className="edit-btn" style={{ margin: "0 10px", color: "#FF6F00", backgroundColor : "transparent"}}>
                <i className="bi bi-pencil"></i>
              </button>
            </div>

             {isOpen && <div className="blur-background" onClick={() => setIsOpen(false)} ></div>}

            {isOpen && (
              <div className="popup-form">
                <form className="profile-form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-inner mb-25">
                        <label>First Name*</label>
                        <div className="input-area">
                          <img src="/assets/images/icon/user-2.svg" alt="" />
                          <input type="text" placeholder="Mr. Robert"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner mb-25">
                        <label>Last Name*</label>
                        <div className="input-area">
                          <img src="/assets/images/icon/user-2.svg " alt="" />
                          <input type="text" placeholder="Jonson"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner mb-25">
                        <label>Current Location*</label>
                        <div className="input-area">
                          <img src="/assets/images/icon/map-2.svg" alt="" />
                          <input type="text" placeholder="Mirpur, Dhaka"
                            name="current_location"
                            value={formData.current_location}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner mb-25">
                        <label>Phone Number*</label>
                        <div className="input-area">
                          <img src="/assets/images/icon/phone-2.svg" alt="" />
                          <input type="text" placeholder="+880-17 *** *** **"
                            name="phone_number"
                            value={formData.phone_number}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner mb-25">
                        <label>Email*</label>
                        <div className="input-area">
                          <img src="/assets/images/icon/email-2.svg" alt="" />
                          <input type="email" placeholder="info@example.com"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner mb-25">
                        <label>Website Link*</label>
                        <div className="input-area">
                          <img src="/assets/images/icon/website-2.svg" alt="" />
                          <input type="text" placeholder="https://example.com"
                            name="website_link"
                            value={formData.website_link}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner mb-25">
                        <label>Current Job Place*</label>
                        <div className="input-area">
                          <img src="/assets/images/icon/company-2.svg" alt="" />
                          <input type="text" placeholder="Company Name"
                            name="current_job_place"
                            value={formData.current_job_place}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner mb-25">
                        <label>Designation*</label>
                        <div className="input-area">
                          <img src="/assets/images/icon/designation-2.svg" alt="" />
                          <input type="text" placeholder="UI/UX Engineer"
                            name="designation"
                            value={formData.designation}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner mb-25">
                        <label>Qualification*</label>
                        <div className="input-area">
                          <img
                            src="/assets/images/icon/qualification-2.svg"
                            alt=""
                          />
                          <select className="select1"
                            name="qualification"
                            value={formData.qualification}
                            onChange={handleChange}
                          >
                            <option value="Bachelor Degree in CSE">Bachelor Degree in CSE</option>
                            <option value="IGCSE">IGCSE</option>
                            <option value="AS">AS</option>
                            <option value="A Level">A Level</option>
                            <option value="Matriculated">Matriculated</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner mb-25">
                        <label>Language*</label>
                        <div className="input-area">
                          <img src="/assets/images/icon/language-2.svg" alt="" />
                          <select className="select1"
                            name="language"
                            value={formData.language}
                            onChange={handleChange}
                          >
                            <option value="Bangla">Bangla</option>
                            <option value="English">English</option>
                            <option value="Spanish">Spanish</option>
                            <option value="Italian">Italian</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-inner mb-50">
                        <label>Resume*</label>
                        <div className="input-area">
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            name="resume"
                            onChange={handleFileChange}
                          />
                        </div>
                        <a href={formData.resume}
                          target="_blank"
                        >
                          {formData.resume && typeof formData.resume === "string"
                            ? decodeURIComponent(formData.resume.split('/').pop().split('?')[0]) // Extract filename with extension
                              .replace(/^\d+_/, "") // Remove numeric prefix (timestamp followed by "_")
                            : ""}
                        </a>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-inner mb-50">
                        <label>Description*</label>
                        <textarea
                          placeholder="Write something about yourself.........."
                          defaultValue={""}
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-inner">
                        <button
                          className="primry-btn-2 lg-btn w-unset"
                          type="submit"
                        >
                          Update Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            )}
            {formData.first_name && (
              <form className="profile-form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-inner mb-25">
                      <label>Name :</label>
                      <p>{formData.first_name} {formData.last_name}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner mb-25">
                      <label>Phone Number :</label>
                      <p>{formData.phone_number}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner mb-25">
                      <label>Email :</label>
                      <p>{formData.email}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner mb-25">
                      <label>Designation :</label>
                      <p>{formData.designation}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner mb-25">
                      <label>Qualification :</label>
                      <p>{formData.qualification}</p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-inner mb-50">
                      <label>Resume :</label>
                       <a href={formData.resume}
                          target="_blank"
                        >
                          {formData.resume && typeof formData.resume === "string"
                            ? decodeURIComponent(formData.resume.split('/').pop().split('?')[0]) // Extract filename with extension
                              .replace(/^\d+_/, "") // Remove numeric prefix (timestamp followed by "_")
                            : ""}
                        </a>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-inner mb-50">
                      <label>Description :</label>
                      <p>{formData.description}</p>
                    </div>
                  </div>
                  <div className="col-md-12">
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

    </CandidateLayout>
  );
}

export default MyProfile;
