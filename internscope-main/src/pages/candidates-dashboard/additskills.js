import React from "react";
import CandidateLayout from "../../layout/CandidateLayout";

import axios from "axios";
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






  const fetchSkills = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("No authentication token found!");
        return;
      }

      const response = await axios.get("http://localhost:4000/api/user/getITSkills", {
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
      await axios.post("http://localhost:4000/api/user/updateITSkills", { skills: skillNames }, {
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



  return (





    <CandidateLayout>
      <div className="col-lg-9">
        <div className="my-profile-inner">
          <div className="form-wrapper mb-60">
            <div className="section-title">
              <h5>Add IT Skills</h5>
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
                            <h5>Your IT Skills:</h5>
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
                          <h5>Your IT Skills:</h5>
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
                    <p>{skills.length > 0 ? skills.map(skill => skill.value).join(", ") : "No skills added yet"}</p> // 🔹 CHANGE: Display skills in a cleaner format
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
