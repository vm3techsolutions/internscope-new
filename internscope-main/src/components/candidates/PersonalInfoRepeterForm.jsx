import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function PersonalInfoRepeterForm() {
  const [startDate, setStartDate] = useState(new Date());
  const [startDate1, setStartDate1] = useState(new Date());
  const [fields, setFields] = useState([{ value: '' }]);


  const handleAdd = () => {
    const newFields = [...fields, { value: '' }];

    setFields(newFields);
  };

  const handleRemove = (index, event) => {
    event.preventDefault();
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  return (
    <div>
      {fields.map((field, index) => (
        <form key={index} className="edit-profile-form profile-form">

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
                      <input type="text" id="companies" name="companies" placeholder="Egenstheme" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner mb-25">
                    <label htmlFor="desigation">Project Status*</label>
                    <div className="input-area">
                      <img src="/assets/images/icon/designation-2.svg" alt="" />
                      <select className="select1">
                        <option value={0}>Select</option>
                        <option value={1}>In-Progress</option>
                        <option value={2}>Finished</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-inner mb-20">
                    <label htmlFor="description1">Project Details*</label>
                    <textarea name="description" id="description1" placeholder="Write Your Project Details..." defaultValue={""} />
                  </div>
                </div>

            
                <div className="col-md-6">
                  <div className="form-inner mb-20">
                    <label htmlFor="datepicker6">Starting Period*</label>
                    <div className="input-area">
                      <img src="/assets/images/icon/calender2.svg" alt="" />
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
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
                        selected={startDate1}
                        onChange={(date) => setStartDate1(date)}
                        placeholderText="Check In"
                        className="calendar"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-agreement employment-check form-inner d-flex justify-content-between flex-wrap p-0">
                    <div className="form-group two">
                      <input type="checkbox" id={field.value} />
                      <label htmlFor={field.value}>Continuing Working Here</label>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner mb-25">
                    <label htmlFor="desigation">Project Site*</label>
                    <div className="input-area">
                      <img src="/assets/images/icon/designation-2.svg" alt="" />
                      <select className="select1">
                        <option value={0}>Select</option>
                        <option value={1}>On-Site</option>
                        <option value={2}>Off-Site</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner mb-25">
                    <label htmlFor="desigation">Nature of Employment*</label>
                    <div className="input-area">
                      <img src="/assets/images/icon/designation-2.svg" alt="" />
                      <select className="select1">
                        <option value="full-time">Select</option>
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
                    <input type="number" id="team-size" name="team-size" placeholder="Number of members" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner mb-25">
                    <label htmlFor="desigation">Designation*</label>
                    <div className="input-area">
                      <img src="/assets/images/icon/designation-2.svg" alt="" />
                      <select className="select1">
                        <option value={0}>Back-end developer</option>
                        <option value={1}>Front-end developer</option>
                        <option value={2}>Full-stack developer</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner mb-25">
                    <label htmlFor="companies">Role*</label>
                    <div className="input-area">
                      <img src="/assets/images/icon/company-2.svg " alt="" />
                      <input type="text" id="companies" name="companies" placeholder="Egenstheme" />
                    </div>
                  </div>
                </div>




                <div className="col-md-12">
                  <div className="form-inner mb-20">
                    <label htmlFor="description1">Role Description**</label>
                    <textarea name="description" id="description1" placeholder="Write Your Role Description..." defaultValue={""} />
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
        </form>

      ))}
    </div>
  )
}

export default PersonalInfoRepeterForm