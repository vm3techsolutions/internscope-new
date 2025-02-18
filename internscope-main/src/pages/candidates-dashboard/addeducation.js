import React from "react";
import CandidateLayout from "../../layout/CandidateLayout";
import axios from "axios";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import EducatonRepeterForm from "../../components/candidates/EducatonRepeterForm";

import { useState, useEffect } from "react";
function MyProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [startDate1, setStartDate1] = useState(new Date());
  const [fields, setFields] = useState([{ degree: "", major: "", institution: "", gpa: "", start_date: "", end_date: "" }]);

  useEffect(() => {
    const fetchProfileAndEducation = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          console.warn("No authentication token found!");
          return;
        }

        const educationResponse = await axios.get(`${process.env.NEXT_PUBLIC_BACK_END_URL}/api/user/education`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (educationResponse.status !== 200) {
          console.error("Failed to fetch education data:", educationResponse);
          return;
        }

        const educationData = educationResponse.data.map((edu) => ({
          id: edu.id,
          degree: edu.degree || "",
          major: edu.major || "",
          institution: edu.institution || "",
          gpa: edu.gpa || "",
          start_date: edu.start_date ? new Date(edu.start_date) : null,
          end_date: edu.end_date ? new Date(edu.end_date) : null,
        }));

        setFields(educationData.length > 0 ? educationData : []);
      } catch (error) {
        console.error("Error fetching education data:", error);
        alert("Failed to fetch education data.");
      }
    };

    fetchProfileAndEducation();
  }, []);

  // Handle form field changes
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const newFields = [...fields];
    newFields[index][name] = value;
    setFields(newFields);
  };

  // Handle start date change
  const handleStartDateChange = (date, index) => {
    const newFields = [...fields];
    newFields[index].start_date = date;
    setFields(newFields);
  };

  // Handle end date change
  const handleEndDateChange = (date, index) => {
    const newFields = [...fields];
    newFields[index].end_date = date;
    setFields(newFields);
  };

  // Add a new education row
  const handleAdd = () => {
    setFields([...fields, { degree: "", major: "", institution: "", gpa: "", start_date: "", end_date: "" }]);
  };

  // Remove an education row
  const handleRemove = async (index, event) => {
    event.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      alert("No authentication token found!");
      return;
    }

    const educationId = fields[index]?.id;

    if (!educationId) {
      alert("Invalid education record ID.");
      return;
    }

    try {
      const response = await axios.delete(`${process.env.NEXT_PUBLIC_BACK_END_URL}/api/user/education/${educationId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status === 200) {
        const updatedFields = fields.filter((_, i) => i !== index);
        setFields(updatedFields);
        alert("Education deleted successfully!");
      } else {
        alert("Failed to delete education.");
      }
    } catch (error) {
      console.error("Error deleting education:", error);
      alert("An error occurred while deleting education.");
    }
  };

  // Submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the fields
    for (let i = 0; i < fields.length; i++) {
      const field = fields[i];
      if (!field.degree || !field.major || !field.institution || !field.gpa || !field.start_date || !field.end_date) {
        alert("All fields are required.");
        return;
      }
    }

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("No authentication token found!");
        return;
      }

      // Prepare the data to be sent
      const educationData = fields.map((edu) => ({
        degree: edu.degree,
        major: edu.major,
        institution: edu.institution,
        gpa: edu.gpa,
        start_date: edu.start_date,
        end_date: edu.end_date,
      }));

      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACK_END_URL}/api/user/education`, educationData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert(response.data.message);
      setIsOpen(false);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert("Failed to update education data.");
    }
  };

  console.log(fields);

  return (
    <CandidateLayout>
      <div className="col-lg-9">
        <div className="my-profile-inner">
          <div className="form-wrapper mb-60">
            <div className="section-title">
              <h5>Add Education</h5>
              <button onClick={() => setIsOpen(true)} className="edit-btn" style={{ margin: "0 10px", color: "#FF6F00", backgroundColor: "transparent" }}>
                <i className="bi bi-pencil"></i>
              </button>
            </div>

            {/* Background Blur Effect */}
            {isOpen && <div className="blur-background" onClick={() => setIsOpen(false)} ></div>}

            {isOpen && (
              <div className="popup-form">
                <div>
                  {fields.map((field, index) => (
                    <form onSubmit={handleSubmit} key={index} className="edit-profile-form profile-form">
                      <div className="section-title2">
                        <h5>Educational Qualification:</h5>
                      </div>
                      <div className="education-row">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="info-title">
                              <h6>Academic Information:</h6>
                              <div className="dash" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-inner mb-25">
                              <label>Education Level*</label>
                              <div className="input-area">
                                <img src="/assets/images/icon/qualification-2.svg" alt="" />
                                <select
                                  className="select1"
                                  name="degree"
                                  value={field.degree || ""}
                                  onChange={(e) => handleChange(e, index)}
                                >
                                  <option value="">Select Degree</option>
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
                              <label>My Major*</label>
                              <div className="input-area">
                                <img src="/assets/images/icon/major.svg" alt="" />
                                <select
                                  className="select1"
                                  name="major"
                                  value={field.major || ""}
                                  onChange={(e) => handleChange(e, index)}
                                >
                                  <option value="">Select Major</option>
                                  <option value="Science">Science</option>
                                  <option value="Arts">Arts</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-inner mb-25">
                              <label htmlFor="institute">Institute/University*</label>
                              <div className="input-area">
                                <img src="/assets/images/icon/univercity.svg" alt="" />
                                <input
                                  type="text"
                                  id="institute"
                                  name="institution"
                                  placeholder="Type Your Institute Name..."
                                  value={field.institution || ""}
                                  onChange={(e) => handleChange(e, index)}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-inner mb-30">
                              <label htmlFor="gpa">Result/GPA**</label>
                              <div className="input-area">
                                <img src="/assets/images/icon/gpa-2.svg" alt="" />
                                <input
                                  type="text"
                                  id="gpa"
                                  name="gpa"
                                  placeholder="4.75/5"
                                  value={field.gpa || ""}
                                  onChange={(e) => handleChange(e, index)}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-inner mb-20">
                              <label htmlFor="datepicker10">Starting Period*</label>
                              <div className="input-area">
                                <img src="/assets/images/icon/calender2.svg" alt="" />
                                <DatePicker
                                  selected={field.start_date || new Date()}
                                  onChange={(date) => handleStartDateChange(date, index)}
                                  placeholderText="Check In"
                                  className="calendar"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-inner mb-20">
                              <label htmlFor="datepicker11">Ending Period*</label>
                              <div className="input-area">
                                <img src="/assets/images/icon/calender2.svg" alt="" />
                                <DatePicker
                                  selected={field.end_date || new Date()}
                                  onChange={(date) => handleEndDateChange(date, index)}
                                  placeholderText="Check In"
                                  className="calendar"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {index !== 0 && (
                        <div className="add-row">
                          <button
                            className="remove-education-row remove"
                            onClick={(event) => handleRemove(index, event)}
                          >
                            Remove Education Area
                          </button>
                        </div>
                      )}
                      <div className="add-remove-btn d-flex align-items-center justify-content-between">
                        <div className="add-row">
                          <button
                            onClick={handleAdd}
                            type="button"
                            className="add-education-row"
                          >
                            Add Education+
                          </button>
                        </div>
                      </div>
                      <br />
                      <div className="col-md-12">
                        <div className="form-inner">
                          <button className="primry-btn-2 lg-btn w-unset" type="submit">
                            Update Profile
                          </button>
                        </div>
                      </div>
                    </form>
                  ))}
                </div>
              </div>
            )}
            {fields.length > 0 && (
              <div>
                {fields.map((field, index) => (
                  <form onSubmit={handleSubmit} key={index} className="edit-profile-form profile-form" style={{ marginBottom: "30px" }}>
                    <div className="section-title2">
                      <h5>Educational Qualification:</h5>
                    </div>
                    <div className="education-row">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="info-title">
                            <h6>Academic Information:</h6>
                            <div className="dash" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-inner mb-25">
                            <label>Education Level*</label>
                            <p>{field.degree}</p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-inner mb-25">
                            <label>My Major*</label>
                            <p>{field.major}</p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-inner mb-25">
                            <label htmlFor="institute">Institute/University*</label>
                            <p>{field.institution}</p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-inner mb-30">
                            <label htmlFor="gpa">Result/GPA**</label>
                            <p>{field.gpa}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </CandidateLayout>
  );
}

export default MyProfile;
