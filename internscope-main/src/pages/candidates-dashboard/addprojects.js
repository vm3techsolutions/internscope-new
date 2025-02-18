import React from "react";
import CandidateLayout from "../../layout/CandidateLayout";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import EducatonRepeterForm from "../../components/candidates/EducatonRepeterForm";
import PersonalInfoRepeterForm from "../../components/candidates/PersonalInfoRepeterForm";
import CreatableSelect from "react-select/creatable";


import { useState, useEffect } from "react";
function MyProfile() {
  const [isOpen, setIsOpen] = useState(false);

  const [startDate, setStartDate] = useState(new Date());
  const [startDate1, setStartDate1] = useState(new Date());
  const [fields, setFields] = useState([{
    project_title: "",
    project_status: "",
    project_details: "",
    start_date: "",
    end_date: "",
    continuing_working_here: false,
    project_site: "",
    employment_type: "",
    team_size: "",
    designation: "",
    role: "",
    role_description: ""
  }]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.warn("No authentication token found!");
          return;
        }
  
        const projectResponse = await axios.get(`${process.env.NEXT_PUBLIC_BACK_END_URL}/api/user/projects`, {
          headers: { Authorization: `Bearer ${token}` },
        });
  
        if (projectResponse.status !== 200) {
          console.error("Failed to fetch project data:", projectResponse);
          return;
        }
  
         // Function to format the date
      const formatDate = (dateString) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        });
      };
        // Process and store project data
        const projectData = projectResponse.data.map((project) => ({
          id: project.id,
          project_title: project.project_title || "",
          project_status: project.project_status || "",
          project_details: project.project_details || "",
          start_date: project.start_date ? new Date(project.start_date) : null,
          end_date: project.end_date ? new Date(project.end_date) : null,
          continuing_working_here: project.continuing_working_here || false,
          project_site: project.project_site || "",
          employment_type: project.employment_type || "",
          team_size: project.team_size || "",
          designation: project.designation || "",
          role: project.role || "",
          role_description: project.role_description || "",
        }));
  
        setFields(projectData.length > 0 ? projectData : []); // Ensure an empty array is set if no data
      } catch (error) {
        console.error("Error fetching project data:", error);
        alert("Failed to fetch project data.");
      }
    };
  
    fetchProjects();
  }, []);
  

  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     try {
  //       const token = localStorage.getItem("token");
  //       if (!token) {
  //         console.warn("No authentication token found!");
  //         return;
  //       }
  
  //       const projectResponse = await axios.get("http://localhost:4000/api/user/projects", {
  //         headers: { Authorization: `Bearer ${token}` },
  //       });
  
  //       if (projectResponse.status !== 200) {
  //         console.error("Failed to fetch project data:", projectResponse);
  //         return;
  //       }
  
  //       // Function to format the date safely
  //       const formatDate = (dateString) => {
  //         if (!dateString) return ""; // Return empty string for null/undefined values
  //         const date = new Date(dateString);
  //         if (isNaN(date.getTime())) return ""; // Check for invalid date
  //         return date.toLocaleDateString("en-US", {
  //           month: "short",
  //           day: "2-digit",
  //           year: "numeric",
  //         });
  //       };
  
  //       // Process and store project data
  //       const projectData = projectResponse.data.map((project) => ({
  //         id: project.id,
  //         project_title: project.project_title || "",
  //         project_status: project.project_status || "",
  //         project_details: project.project_details || "",
  //         start_date: formatDate(project.start_date), // Ensure formatted string
  //         end_date: formatDate(project.end_date), // Ensure formatted string
  //         continuing_working_here: project.continuing_working_here || false,
  //         project_site: project.project_site || "",
  //         employment_type: project.employment_type || "",
  //         team_size: project.team_size || "",
  //         designation: project.designation || "",
  //         role: project.role || "",
  //         role_description: project.role_description || "",
  //       }));
  
  //       setFields(projectData.length > 0 ? projectData : []); // Ensure an empty array is set if no data
  //     } catch (error) {
  //       console.error("Error fetching project data:", error);
  //       alert("Failed to fetch project data.");
  //     }
  //   };
  
  //   fetchProjects();
  // }, []);
  
  
  const handleAdd = () => {
    setFields([...fields, {
      project_title: "",
      project_status: "",
      project_details: "",
      start_date: "",
      end_date: "",
      continuing_working_here: false,
      project_site: "",
      employment_type: "",
      team_size: "",
      designation: "",
      role: "",
      role_description: ""
    }]);
  };

  const handleRemove = (index, event) => {
    event.preventDefault();
    setFields(fields.filter((_, i) => i !== index));
  };

  // const handleChange = (e, index) => {
  //   const { name, value } = e.target;
  //   const newFields = [...fields];
  //   newFields[index][name] = value;
  //   setFields(newFields);
  // };
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const newFields = [...fields];

    newFields[index][name] = name === "continuing" ? value === "true" || value === true : value; // Handle boolean values correctly

    setFields(newFields);
  };


  const handleStartDateChange = (date, index) => {
    const newFields = [...fields];
    newFields[index].start_date = date;
    setFields(newFields);
  };

  const handleEndDateChange = (date, index) => {
    const newFields = [...fields];
    newFields[index].end_date = date;
    setFields(newFields);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Validate the fields
  //   for (let i = 0; i < fields.length; i++) {
  //     const field = fields[i];
  //     if (!field.title || !field.status || !field.description || !field.startDate || !field.endDate || !field.role) {
  //       alert("All fields are required.");
  //       return;
  //     }
  //   }

  //   try {
  //     const token = localStorage.getItem("token");
  //     if (!token) {
  //       alert("No authentication token found!");
  //       return;
  //     }

  //     // Prepare the data to be sent
  //     const projectData = fields.map((project) => ({
  //       title: project.title,
  //       status: project.status,
  //       description: project.description,
  //       startDate: project.startDate,
  //       endDate: project.endDate,
  //       continuing: project.continuing,
  //       site: project.site,
  //       employmentType: project.employmentType,
  //       teamSize: project.teamSize,
  //       designation:project.designation,
  //       role: project.role,
  //       roleDescription: project.roleDescription
  //     }));

  //     const response = await axios.post("http://localhost:4000/api/user/projects", projectData, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     });

  //     alert(response.data.message);
  //     setIsOpen(false);
  //   } catch (error) {
  //     console.error("Error:", error.response?.data || error.message);
  //     alert("Failed to update project data.");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure all required fields are filled
    for (const field of fields) {
      if (
        !field.project_title ||
        !field.project_status ||
        !field.project_details ||
        !field.start_date ||
        (!field.continuing_working_here && !field.end_date) || // If not continuing, endDate is required
        !field.role
      ) {
        alert("All required fields must be filled.");
        return;
      }
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("No authentication token found!");
        return;
      }

      // Prepare data in the expected format
      const projectData = fields.map((project) => ({
        project_title: project.project_title,
        project_status: project.project_status,
        project_details: project.project_details,
        start_date: project.start_date.toISOString().split("T")[0],
        end_date: project.continuing_working_here ? null : project.end_date.toISOString().split("T")[0],
        continuing_working_here: project.continuing_working_here,
        project_site: project.project_site || "",
        employment_type: project.employment_type || "",
        team_size: project.team_size || "",
        designation: project.designation || "",
        role: project.role,
        role_description: project.role_description || "",
      }));

      console.log("Sending data:", projectData); // Debugging: Log the data before sending

      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACK_END_URL}/api/user/projects`, projectData, {
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      });

      alert(response.data.message);
      setIsOpen(false);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert(error.response?.data?.error || "Failed to update project data.");
    }
  };

  console.log(fields);


  return (





    <CandidateLayout>
      <div className="col-lg-9">
        <div className="my-profile-inner">
          <div className="form-wrapper mb-60">
            <div className="section-title">
              <h5>Add Projects</h5>
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
                <div>
                  {fields.map((field, index) => (
                    <form onSubmit={handleSubmit} key={index} className="edit-profile-form profile-form">

                      <div>
                        <div className="section-title2">
                          <h5>Project Information:</h5>
                        </div>
                        <div className="experiences-row">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="info-title">
                                <h6>Add Your Projects</h6>
                                <div className="dash" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-inner mb-25">
                                <label htmlFor="companies">Project Title*</label>
                                <div className="input-area">
                                  <img src="/assets/images/icon/company-2.svg " alt="" />
                                  <input type="text" id="companies"
                                    name="project_title"
                                    placeholder="Project Title"
                                    value={field.project_title}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-inner mb-25">
                                <label htmlFor="desigation">Project Status*</label>
                                <div className="input-area">
                                  <img src="/assets/images/icon/designation-2.svg" alt="" />
                                  <select className="select1" name="project_status" value={field.project_status} onChange={(e) => handleChange(e, index)}>
                                    <option value="">Select Status</option>
                                    <option value="In-Progress">In-Progress</option>
                                    <option value="Finished">Finished</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-inner mb-20">
                                <label htmlFor="description1">Project Details*</label>
                                <textarea name="project_details" id="description1"
                                  placeholder="Write Your Project Details..." defaultValue={""}
                                  value={field.project_details}
                                  onChange={(e) => handleChange(e, index)}

                                />
                              </div>
                            </div>


                            <div className="col-md-6">
                              <div className="form-inner mb-20">
                                <label htmlFor="datepicker6">Starting Period*</label>
                                <div className="input-area">
                                  <img src="/assets/images/icon/calender2.svg" alt="" />
                                  <DatePicker
                                    selected={field.start_date}
                                    onChange={(date) => handleStartDateChange(date, index)}
                                    placeholderText="Check In"
                                    className="calendar"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-inner mb-20">
                                <label htmlFor="datepicker7">Ending Period*</label>
                                <div className="input-area">
                                  <img src="/assets/images/icon/calender2.svg" alt="" />
                                  <DatePicker

                                    placeholderText="Check In"
                                    className="calendar"
                                    selected={field.end_date}
                                    onChange={(date) => handleEndDateChange(date, index)}
                                    disabled={field.continuing}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-agreement employment-check form-inner d-flex justify-content-between flex-wrap p-0">
                                <div className="form-group two">
                                  <input type="checkbox"
                                    // id={field.value}
                                    // checked={field.continuing}
                                    // checked={!!field.continuing} // Ensure it's always a boolean

                                    // onChange={(e) => handleChange({ target: { name: "continuing", value: e.target.checked } }, index)}


                                    id={`continuing-${index}`} // Ensure unique ID for each checkbox
                                    checked={field.continuing_working_here || false} // Ensure it's always a boolean
                                    onChange={(e) =>
                                      handleChange({ target: { name: "continuing_working_here", value: e.target.checked } }, index)
                                    }
                                  />
                                  <label htmlFor={field.value}>Continuing Working Here</label>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-inner mb-25">
                                <label htmlFor="desigation">Project Site*</label>
                                <div className="input-area">
                                  <img src="/assets/images/icon/designation-2.svg" alt="" />
                                  <select className="select1" name="project_site" value={field.project_site} onChange={(e) => handleChange(e, index)}>
                                    <option value="">Select Site</option>
                                    <option value="On-Site">On-Site</option>
                                    <option value="Off-Site">Off-Site</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-inner mb-25">
                                <label htmlFor="desigation">Nature of Employment*</label>
                                <div className="input-area">
                                  <img src="/assets/images/icon/designation-2.svg" alt="" />
                                  <select className="select1" name="employment_type" value={field.employment_type} onChange={(e) => handleChange(e, index)}>
                                    <option value="">Select</option>
                                    <option value="full-time">Full-Time</option>
                                    <option value="part-time">Part-Time</option>
                                    <option value="contract">Contract</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-inner mb-25">
                                <label htmlFor="team-size">Team Size*</label>
                                <input type="number" id="team-size" placeholder="Number of members"
                                  name="team_size"
                                  value={field.team_size}
                                  onChange={(e) => handleChange(e, index)}
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-inner mb-25">
                                <label htmlFor="desigation">Designation*</label>
                                <div className="input-area">
                                  <img src="/assets/images/icon/designation-2.svg" alt="" />
                                  <select className="select1"
                                    name="designation" value={field.designation} onChange={(e) => handleChange(e, index)}
                                  >
                                    <option value="">Select</option>
                                    <option value="Back-end developer">Back-end developer</option>
                                    <option value="Front-end developer">Front-end developer</option>
                                    <option value="Full-stack developer">Full-stack developer</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-inner mb-25">
                                <label htmlFor="companies">Role*</label>
                                <div className="input-area">
                                  <img src="/assets/images/icon/company-2.svg " alt="" />
                                  <input type="text" id="companies" name="role"
                                    placeholder="Your Role"
                                    value={field.role}
                                    onChange={(e) => handleChange(e, index)}
                                  />
                                </div>
                              </div>
                            </div>




                            <div className="col-md-12">
                              <div className="form-inner mb-20">
                                <label htmlFor="description1">Role Description**</label>
                                <textarea
                                  name="role_description"
                                  placeholder="Describe your role"
                                  value={field.role_description}
                                  onChange={(e) => handleChange(e, index)}
                                  id="description1" defaultValue={""} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {index !== 0 && (
                        <div className='add-row'>
                          <button className='remove-education-row remove' onClick={() => handleRemove(index, event)}>Remove Experiences Area</button>
                        </div>
                      )}
                      <div className="add-remove-btn d-flex align-items-center justify-content-between">
                        <div className="add-row">
                          <button onClick={handleAdd} type="button" className="add-education-row">
                            Add New+
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

            {fields && (
              <div>
                {fields.map((field, index) => (
                  <form onSubmit={handleSubmit} key={index} className="edit-profile-form profile-form" style={{marginBottom:"30px"}}>

                    <div>
                      <div className="section-title2">
                        <h5>Project Information:</h5>
                      </div>
                      <div className="experiences-row">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="info-title">
                              <h6>Add Your Projects</h6>
                              <div className="dash" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-inner mb-25">
                              <label htmlFor="companies">Project Title</label>
                              {/* <p>{fields.project_title}</p> */}
                              <p>{field.project_title}</p>
                              {/* <div className="input-area">
                                <img src="/assets/images/icon/company-2.svg " alt="" />
                                <input type="text" id="companies"
                                  name="project_title"
                                  placeholder="Project Title"
                                  value={field.project_title}
                                  onChange={(e) => handleChange(e, index)}
                                />
                              </div> */}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-inner mb-25">
                              <label htmlFor="desigation">Project Status</label>
                              <p>{field.project_status}</p>

                              {/* <div className="input-area">
                                <img src="/assets/images/icon/designation-2.svg" alt="" />
                                <select className="select1" name="project_status" value={field.project_status} onChange={(e) => handleChange(e, index)}>
                                  <option value="">Select Status</option>
                                  <option value="In-Progress">In-Progress</option>
                                  <option value="Finished">Finished</option>
                                </select>
                              </div> */}
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-inner mb-20">
                              <label htmlFor="description1">Project Details</label>
                              <p>{field.project_details}</p>

                              {/* <textarea name="project_details" id="description1"
                                placeholder="Write Your Project Details..." defaultValue={""}
                                value={field.project_details}
                                onChange={(e) => handleChange(e, index)}

                              /> */}
                            </div>
                          </div>


                          {/* <div className="col-md-6">
                            <div className="form-inner mb-20">
                              <label htmlFor="datepicker6">Starting Period*</label>
                              <p>{field.start_date }</p>

                              <div className="input-area">
                                <img src="/assets/images/icon/calender2.svg" alt="" />
                                <DatePicker
                                  selected={field.start_date}
                                  onChange={(date) => handleStartDateChange(date, index)}
                                  placeholderText="Check In"
                                  className="calendar"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-inner mb-20">
                              <label htmlFor="datepicker7">Ending Period*</label>
                              <div className="input-area">
                                <img src="/assets/images/icon/calender2.svg" alt="" />
                                <DatePicker

                                  placeholderText="Check In"
                                  className="calendar"
                                  selected={field.end_date}
                                  onChange={(date) => handleEndDateChange(date, index)}
                                  disabled={field.continuing}
                                />
                              </div>
                            </div>
                          </div> */}
                          {/* <div className="col-md-12">
                            <div className="form-agreement employment-check form-inner d-flex justify-content-between flex-wrap p-0">
                              <div className="form-group two">
                                <input type="checkbox"
                                  // id={field.value}
                                  // checked={field.continuing}
                                  // checked={!!field.continuing} // Ensure it's always a boolean

                                  // onChange={(e) => handleChange({ target: { name: "continuing", value: e.target.checked } }, index)}


                                  id={`continuing-${index}`} // Ensure unique ID for each checkbox
                                  checked={field.continuing_working_here || false} // Ensure it's always a boolean
                                  onChange={(e) =>
                                    handleChange({ target: { name: "continuing_working_here", value: e.target.checked } }, index)
                                  }
                                />
                                <label htmlFor={field.value}>Continuing Working Here</label>
                              </div>
                            </div>
                          </div> */}
                          <div className="col-md-6">
                            <div className="form-inner mb-25">
                              <label htmlFor="desigation">Project Site</label>
                              <p>{field.project_status}</p>

                              {/* <div className="input-area">
                                <img src="/assets/images/icon/designation-2.svg" alt="" />
                                <select className="select1" name="project_site" value={field.project_site} onChange={(e) => handleChange(e, index)}>
                                  <option value="">Select Site</option>
                                  <option value="On-Site">On-Site</option>
                                  <option value="Off-Site">Off-Site</option>
                                </select>
                              </div> */}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-inner mb-25">
                              <label htmlFor="desigation">Nature of Employment*</label>
                              <p>{field.employment_type}</p>

                              {/* <div className="input-area">
                                <img src="/assets/images/icon/designation-2.svg" alt="" />
                                <select className="select1" name="employment_type" value={field.employment_type} onChange={(e) => handleChange(e, index)}>
                                  <option value="">Select</option>
                                  <option value="full-time">Full-Time</option>
                                  <option value="part-time">Part-Time</option>
                                  <option value="contract">Contract</option>
                                </select>
                              </div> */}
                            </div>
                          </div>
                          {/* <div className="col-md-6">
                            <div className="form-inner mb-25">
                              <label htmlFor="team-size">Team Size*</label>
                              <input type="number" id="team-size" placeholder="Number of members"
                                name="team_size"
                                value={field.team_size}
                                onChange={(e) => handleChange(e, index)}
                              />
                            </div>
                          </div> */}
                          <div className="col-md-6">
                            <div className="form-inner mb-25">
                              <label htmlFor="desigation">Designation*</label>
                              <p>{field.project_status}</p>

                              {/* <div className="input-area">
                                <img src="/assets/images/icon/designation-2.svg" alt="" />
                                <select className="select1"
                                  name="designation" value={field.designation} onChange={(e) => handleChange(e, index)}
                                >
                                  <option value="">Select</option>
                                  <option value="Back-end developer">Back-end developer</option>
                                  <option value="Front-end developer">Front-end developer</option>
                                  <option value="Full-stack developer">Full-stack developer</option>
                                </select>
                              </div> */}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-inner mb-25">
                              <label htmlFor="companies">Role*</label>
                              <p>{field.role}</p>

                              {/* <div className="input-area">
                                <img src="/assets/images/icon/company-2.svg " alt="" />
                                <input type="text" id="companies" name="role"
                                  placeholder="Your Role"
                                  value={field.role}
                                  onChange={(e) => handleChange(e, index)}
                                />
                              </div> */}
                            </div>
                          </div>




                          {/* <div className="col-md-12">
                            <div className="form-inner mb-20">
                              <label htmlFor="description1">Role Description**</label>
                              <textarea
                                name="role_description"
                                placeholder="Describe your role"
                                value={field.role_description}
                                onChange={(e) => handleChange(e, index)}
                                id="description1" defaultValue={""} />
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>

                    {/* {index !== 0 && (
                      <div className='add-row'>
                        <button className='remove-education-row remove' onClick={() => handleRemove(index, event)}>Remove Experiences Area</button>
                      </div>
                    )}
                    <div className="add-remove-btn d-flex align-items-center justify-content-between">
                      <div className="add-row">
                        <button onClick={handleAdd} type="button" className="add-education-row">
                          Add New+
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
                    </div> */}
                  </form>

                ))}
              </div>

              /////////////////////////////////////////////////////


            )}


          </div>
        </div>
      </div>


    </CandidateLayout>




  );
}

export default MyProfile;
