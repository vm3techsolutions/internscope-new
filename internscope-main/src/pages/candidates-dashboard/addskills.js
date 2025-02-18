import React from "react";
import CandidateLayout from "../../layout/CandidateLayout";

import axios from "axios";
import EducatonRepeterForm from "../../components/candidates/EducatonRepeterForm";
import PersonalInfoRepeterForm from "../../components/candidates/PersonalInfoRepeterForm";
import CreatableSelect from "react-select/creatable";


import { useState, useEffect } from "react";
function MyProfile() {

  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false); // 🔹 CHANGE: Added loading state
  const [submitting, setSubmitting] = useState(false); // 🔹 CHANGE: Added submitting state

  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState([]);
  const [skills, setSkills] = useState([]); // ✅ Define skills state

  const customStyles = {
    control: (base) => ({
      ...base,
      border: "1px solid #ccc",
      borderRadius: "5px",
      padding: "5px",
    }),
  };



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



  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const token = localStorage.getItem("token");
  //     if (!token) {
  //       alert("No authentication token found!");
  //       return;
  //     }

  //     const formDataToSend = new FormData();
  //     Object.keys(formData).forEach(key => {
  //       formDataToSend.append(key, formData[key]);
  //     });

  //     // Step 1: Get the signed URL from the backend for uploading the resume
  //     const { data: signedUrlData } = await axios.post(
  //       "http://localhost:4000/api/user/getSignedUrl",
  //       { fileName: formData.resume.name },
  //       {
  //         headers: { Authorization: `Bearer ${token}` },
  //       }
  //     );

  //     // Step 2: Upload the file to S3 using the signed URL
  //     const { signedUrl, viewUrl, resumeUrl } = signedUrlData;
  //     await axios.put(signedUrl, formData.resume, {
  //       headers: {
  //         "Content-Type": formData.resume.type,
  //       },
  //     });
  //     console.log(signedUrlData);
  //     console.log(viewUrl);


  //     // Step 3: Save the profile data along with the resume URL
  //     const updatedProfile = {
  //       ...formData,
  //       resume: viewUrl, // Attach the resume URL (or direct S3 URL)
  //     };

  //     console.log(updatedProfile);

  //     const response = await axios.post("http://localhost:4000/api/user/myprofile", updatedProfile, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     });

  //     alert(response.data.message);
  //     setIsSubmitted(true);
  //     setIsOpen(false);
  //   } catch (error) {
  //     console.error("Error:", error.response?.data || error.message);
  //     alert("Failed to update profile.");
  //   }
  // };

  // Submit skills to backend




  // ✅ Fetch skills when profile loads
  // useEffect(() => {
  //   const fetchSkills = async () => {
  //     try {
  //       const token = localStorage.getItem("token");
  //       if (!token) {
  //         alert("No authentication token found!");
  //         return;
  //       }

  //       const response = await axios.get("http://localhost:4000/api/user/getSkills", {
  //         headers: { Authorization: `Bearer ${token}` },
  //       });

  //       const fetchedSkills = response.data.skills.map(skill => ({
  //         label: skill,
  //         value: skill,
  //       }));

  //       setSkills(fetchedSkills);
  //     } catch (error) {
  //       console.error("Error fetching skills:", error.response?.data || error.message);
  //     }
  //   };

  //   fetchSkills();
  // }, []);
  // useEffect(() => {
  //   const fetchSkills = async () => {
  //     const token = localStorage.getItem("token");
  //     if (!token) return;

  //     try {
  //       const response = await axios.get("http://localhost:4000/api/user/getSkills", {
  //         headers: { Authorization: `Bearer ${token}` },
  //       });

  //       const fetchedSkills = response.data.skills.map(skill => ({
  //         label: skill,
  //         value: skill,
  //       }));

  //       setSkills(fetchedSkills);
  //     } catch (error) {
  //       console.error("Error fetching skills:", error.response?.data || error.message);
  //     }
  //   };

  //   fetchSkills();
  // }, []);




  // ✅ Handle Enter Key (Adding Skills)
  // const handleKeyDown = (event) => {
  //   if (event.key === "Enter" && inputValue.trim()) {
  //     setSkills([...skills, { label: inputValue, value: inputValue }]);
  //     setInputValue("");
  //     event.preventDefault();
  //   }
  // };
  // const handleKeyDown = (event) => {
  //   if (event.key === "Enter" && inputValue.trim()) {
  //     if (!skills.some(skill => skill.value === inputValue)) {
  //       setSkills([...skills, { label: inputValue, value: inputValue }]);
  //     }
  //     setInputValue("");
  //     event.preventDefault();
  //   }
  // };

  // ✅ Handle Skills Submission
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const token = localStorage.getItem("token");
  //     if (!token) {
  //       alert("No authentication token found!");
  //       return;
  //     }

  //     const skillNames = skills.map(skill => skill.value);

  //     console.log(skillNames);

  //     await axios.post("http://localhost:4000/api/user/updateSkills", { skills: skillNames }, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     });

  //     alert("Skills updated successfully!");
  //     setIsOpen(false);
  //   } catch (error) {
  //     console.error("Error updating skills:", error.response?.data || error.message);
  //     alert("Failed to update skills.");
  //   }
  // };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     alert("No authentication token found!");
  //     return;
  //   }

  //   const skillNames = skills.map(skill => skill.value) || [];
  //   if (skillNames.length === 0) {
  //     alert("Please add at least one skill before submitting.");
  //     return;
  //   }

  //   try {
  //     await axios.post("http://localhost:4000/api/user/updateSkills", { skills: skillNames }, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     });

  //     alert("Skills updated successfully!");
  //     setIsOpen(false);
  //   } catch (error) {
  //     console.error("Error updating skills:", error.response?.data || error.message);
  //     alert("Failed to update skills.");
  //   }
  // };

  // console.log(skills[0].value);
  // 🔹 CHANGE: Fetch skills from backend
  const fetchSkills = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("No authentication token found!");
        return;
      }

      const response = await axios.get(`${process.env.NEXT_PUBLIC_BACK_END_URL}/api/user/getSkills`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const fetchedSkills = response.data.skills.map(skill => ({ label: skill, value: skill }));
      
      
      setSkills(fetchedSkills);
    } catch (error) {
      console.error("Error fetching skills:", error.response?.data || error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
  fetchSkills(); // 🔹 CHANGE: Fetch skills when modal opens
  }, [isOpen]);


  // 🔹 CHANGE: Prevent duplicate skills
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputValue.trim()) {
      const newSkill = { label: inputValue, value: inputValue };
      if (!skills.some(skill => skill.value === newSkill.value)) {
        setSkills([...skills, newSkill]);
      } else {
        alert("Skill already added!");
      }
      setInputValue("");
      event.preventDefault();
    }
  };
  
  

  // 🔹 CHANGE: Update skills in backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("No authentication token found!");
        setSubmitting(false);
        return;
      }
      
      const skillNames = skills.map(skill => skill.value);
      await axios.post(`${process.env.NEXT_PUBLIC_BACK_END_URL}/api/user/updateSkills`, { skills: skillNames }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      alert("Skills updated successfully!");
      fetchSkills(); // 🔹 CHANGE: Fetch latest skills instead of manually updating state
      setIsOpen(false); // 🔹 CHANGE: Close modal after success
    } catch (error) {
      console.error("Error updating skills:", error.response?.data || error.message);
      alert("Failed to update skills.");
    }
    setSubmitting(false);
  };


console.log(skills);

  return (





    <CandidateLayout>
      <div className="col-lg-9">
        <div className="my-profile-inner">
          <div className="form-wrapper mb-60">
            <div className="section-title">
              <h5>Add Skills</h5>
              {/* <button onClick={() => setIsOpen(true)} className="edit-btn">✏️</button>
               */}
              <button onClick={() => setIsOpen(true)} className="edit-btn" style={{ margin: "0 10px", color: "#FF6F00", backgroundColor: "transparent" }}>
                <i className="bi bi-pencil"></i>
              </button>
            </div>

            {/* Background Blur Effect */}
            {isOpen && <div className="blur-background" onClick={() => setIsOpen(false)} ></div>}

            {isOpen && (
              <div className="popup-form">
                <form onSubmit={handleSubmit} className="edit-profile-form profile-form">
                  <div className="row">
                    <div className="skills-row">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="section-title2 mb-20">
                            <h5>Your Skills:</h5>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-inner mb-25">
                            <label>Special Skills*</label>
                            <CreatableSelect
                              inputValue={inputValue}
                              isClearable
                              isMulti
                              menuIsOpen={false}
                              styles={customStyles}
                              // onChange={(newValue) => setSkills(newValue)}
                              onChange={(newValue) => setSkills(newValue || [])}

                              onInputChange={(newValue) => setInputValue(newValue)}
                              onKeyDown={handleKeyDown}
                              placeholder="Type Tag and press enter..."
                              value={skills}
                            />

                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-inner">
                        <button
                          className="primry-btn-2 lg-btn w-unset"
                          type="submit"
                        >
                          Update Change
                        </button>
                      </div>
                    </div>
                  </div>
                </form>

              </div>
            )}

            { skills && (

              <form onSubmit={handleSubmit} className="edit-profile-form profile-form">
                <div className="row">
                  <div className="skills-row">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="section-title2 mb-20">
                          <h5>Your Skills:</h5>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-inner mb-25">
                          {/* <label>Special Skills</label> */}
                          {/* <p>{skills.length > 0 ? skills[0].value : "No skills added yet"}</p> */}
                          {/* <CreatableSelect
                            inputValue={inputValue}
                            isClearable
                            isMulti
                            menuIsOpen={false}
                            styles={customStyles}
                            onChange={(newValue) => setSkills(newValue)}
                            onInputChange={(newValue) => setInputValue(newValue)}
                            onKeyDown={handleKeyDown}
                            placeholder="Type Tag and press enter..."
                            value={skills}
                          /> */}
                           {loading ? (
                    <p>Loading skills...</p> // 🔹 CHANGE: Show loading indicator
                  ) : (
                    <p>{skills.length > 0 ? skills.map(skill => skill.value).join(", ") : "No skills added yet" }</p> // 🔹 CHANGE: Display skills in a cleaner format
                  )}
                        

                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-md-12">
                    <div className="form-inner">
                      <button
                        className="primry-btn-2 lg-btn w-unset"
                        type="submit"
                      >
                        Update Change
                      </button>
                    </div>
                  </div> */}
                </div>
              </form>
              /////////////////////////////////////////////////////


            )}


          </div>
        </div>
      </div>


    </CandidateLayout>




  );
}

export default MyProfile;
