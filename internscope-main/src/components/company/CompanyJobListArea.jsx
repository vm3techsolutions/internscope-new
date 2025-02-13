import Link from "next/link";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function CompanyJobList() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="col-lg-12">
      <div className="table-wrapper2">
        <div className="title-and-btn">
          <div className="title">
            <h4>Latest Job List:</h4>
          </div>
          <div className="job-post-btn">
            <Link legacyBehavior href="/job-post">
              <a className="primry-btn-2">Create Job Post</a>
            </Link>
          </div>
        </div>
        <div className="table-filter-area mb-30">
          <form>
            <div className="form-wrap style-2 style-3">
              <div className="form-inner">
                <div className="input-area">
                  <img src="/assets/images/icon/search-2.svg" alt="" />
                  <input
                    type="text"
                    id="jobtitle"
                    name="jobtitle"
                    placeholder="Search by job title"
                  />
                </div>
              </div>
              <button className="primry-btn-1" type="submit">
                Search
              </button>
            </div>
            <div className="form-wrap style-3">
              <div className="form-inner">
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
            <div className="form-wrap">
              <div className="form-inner">
                <p>Show er page</p>
                <div className="select-area">
                  <select className="select1">
                    <option>05</option>
                    <option>10</option>
                    <option>15</option>
                    <option>20</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>
        <table className="eg-table table job-list-table mb-0">
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Applications</th>
              <th>Matched</th>
              <th>Shortlisted</th>
              <th>Viewed</th>
              <th>Not Viewed</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Job Title">
                <div className="job-content">
                  <h5>
                    <Link legacyBehavior href="/job-details-for-company">
                      <a> Manager- Account &amp; Finance</a>
                    </Link>
                  </h5>
                  <p>
                    <img src="/assets/images/icon/calender2.svg" alt="" />
                    <span>Deadline:</span> 02 April, 2023
                  </p>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault1"
                    />
                    Live
                  </div>
                </div>
              </td>
              <td data-label="Applications">
                <span className="total-number">1000</span>
              </td>
              <td data-label="Matched">
                <span className="total-number light-orange">400</span>
              </td>
              <td data-label="Shortlisted">
                <span className="total-number">700</span>
              </td>
              <td data-label="Viewed">
                <span className="total-number light-yellow">300</span>
              </td>
              <td data-label="Not Viewed">
                <span className="total-number deep-pink">100</span>
              </td>
              <td data-label="Action">
                <ul className="action-btn-group2">
                  <li>
                    <Link legacyBehavior href="/job-details-for-company">
                      <a className="primry-btn-2  eg-btn green--btn">
                        <svg
                          width={14}
                          height={10}
                          viewBox="0 0 14 10"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M14 5C14 5 11.375 0 7 0C2.625 0 0 5 0 5C0 5 2.625 10 7 10C11.375 10 14 5 14 5ZM1.02637 5C1.44945 4.33193 1.93606 3.70971 2.47887 3.14273C3.605 1.97091 5.145 0.909091 7 0.909091C8.855 0.909091 10.3941 1.97091 11.522 3.14273C12.0648 3.70971 12.5514 4.33193 12.9745 5C12.9237 5.07909 12.8678 5.16636 12.8039 5.26182C12.5108 5.69818 12.0776 6.28 11.522 6.85727C10.3941 8.02909 8.85413 9.09091 7 9.09091C5.145 9.09091 3.60588 8.02909 2.478 6.85727C1.93519 6.29028 1.44946 5.66807 1.02637 5Z" />
                          <path d="M7 2.72721C6.41984 2.72721 5.86344 2.96665 5.4532 3.39287C5.04297 3.81909 4.8125 4.39717 4.8125 4.99993C4.8125 5.6027 5.04297 6.18078 5.4532 6.60699C5.86344 7.03321 6.41984 7.27266 7 7.27266C7.58016 7.27266 8.13656 7.03321 8.5468 6.60699C8.95703 6.18078 9.1875 5.6027 9.1875 4.99993C9.1875 4.39717 8.95703 3.81909 8.5468 3.39287C8.13656 2.96665 7.58016 2.72721 7 2.72721ZM3.9375 4.99993C3.9375 4.15606 4.26016 3.34676 4.83449 2.75005C5.40882 2.15334 6.18777 1.81812 7 1.81812C7.81223 1.81812 8.59118 2.15334 9.16551 2.75005C9.73984 3.34676 10.0625 4.15606 10.0625 4.99993C10.0625 5.8438 9.73984 6.65311 9.16551 7.24982C8.59118 7.84652 7.81223 8.18175 7 8.18175C6.18777 8.18175 5.40882 7.84652 4.83449 7.24982C4.26016 6.65311 3.9375 5.8438 3.9375 4.99993Z" />
                        </svg>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/job-post">
                      <a className="primry-btn-2 eg-btn sky--btn">
                        <svg
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11.8798 1.19201C11.9563 1.26957 11.9993 1.37462 11.9993 1.48414C11.9993 1.59365 11.9563 1.6987 11.8798 1.77627L11.0253 2.64024L9.3868 0.98512L10.2413 0.121149C10.3181 0.0435774 10.4223 0 10.5309 0C10.6395 0 10.7437 0.0435774 10.8205 0.121149L11.8798 1.19118V1.19201ZM10.4461 3.22449L8.8076 1.56938L3.22607 7.20836C3.18098 7.2539 3.14704 7.30944 3.12694 7.37056L2.46745 9.36829C2.45549 9.40471 2.45379 9.44377 2.46254 9.48111C2.4713 9.51844 2.49016 9.55259 2.51702 9.57972C2.54388 9.60685 2.57768 9.62591 2.61464 9.63475C2.65161 9.64359 2.69028 9.64188 2.72633 9.62979L4.70399 8.96361C4.76442 8.94355 4.8194 8.90955 4.86456 8.8643L10.4461 3.22532V3.22449Z" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 10.7585C0 11.0878 0.12947 11.4035 0.359928 11.6363C0.590385 11.8691 0.902953 11.9999 1.22887 11.9999H10.2406C10.5665 11.9999 10.8791 11.8691 11.1095 11.6363C11.34 11.4035 11.4694 11.0878 11.4694 10.7585V5.79319C11.4694 5.68345 11.4263 5.5782 11.3495 5.50061C11.2727 5.42301 11.1685 5.37941 11.0598 5.37941C10.9512 5.37941 10.847 5.42301 10.7702 5.50061C10.6934 5.5782 10.6502 5.68345 10.6502 5.79319V10.7585C10.6502 10.8683 10.607 10.9735 10.5302 11.0511C10.4534 11.1287 10.3492 11.1723 10.2406 11.1723H1.22887C1.12023 11.1723 1.01604 11.1287 0.939222 11.0511C0.862403 10.9735 0.819246 10.8683 0.819246 10.7585V1.6554C0.819246 1.54566 0.862403 1.44041 0.939222 1.36281C1.01604 1.28522 1.12023 1.24162 1.22887 1.24162H6.55397C6.66261 1.24162 6.7668 1.19803 6.84362 1.12043C6.92044 1.04283 6.96359 0.937583 6.96359 0.827842C6.96359 0.718101 6.92044 0.612854 6.84362 0.535256C6.7668 0.457657 6.66261 0.414063 6.55397 0.414062H1.22887C0.902953 0.414063 0.590385 0.544846 0.359928 0.777642C0.12947 1.01044 0 1.32618 0 1.6554V10.7585Z"
                          />
                        </svg>
                      </a>
                    </Link>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td data-label="Job Title">
                <div className="job-content">
                  <h5>
                    <Link legacyBehavior href="/job-details-for-company">
                      <a> Assistant Laboratorist</a>
                    </Link>
                  </h5>
                  <p>
                    <img src="/assets/images/icon/calender2.svg" alt="" />
                    <span>Deadline:</span> 02 April, 2023
                  </p>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault2"
                      defaultChecked
                    />
                    Live
                  </div>
                </div>
              </td>
              <td data-label="Applications">
                <span className="total-number">1000</span>
              </td>
              <td data-label="Matched">
                <span className="total-number light-orange">400</span>
              </td>
              <td data-label="Shortlisted">
                <span className="total-number">700</span>
              </td>
              <td data-label="Viewed">
                <span className="total-number light-yellow">300</span>
              </td>
              <td data-label="Not Viewed">
                <span className="total-number deep-pink">100</span>
              </td>
              <td data-label="Action">
                <ul className="action-btn-group2">
                  <li>
                    <Link legacyBehavior href="/job-details-for-company">
                      <a className="primry-btn-2  eg-btn green--btn">
                        <svg
                          width={14}
                          height={10}
                          viewBox="0 0 14 10"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M14 5C14 5 11.375 0 7 0C2.625 0 0 5 0 5C0 5 2.625 10 7 10C11.375 10 14 5 14 5ZM1.02637 5C1.44945 4.33193 1.93606 3.70971 2.47887 3.14273C3.605 1.97091 5.145 0.909091 7 0.909091C8.855 0.909091 10.3941 1.97091 11.522 3.14273C12.0648 3.70971 12.5514 4.33193 12.9745 5C12.9237 5.07909 12.8678 5.16636 12.8039 5.26182C12.5108 5.69818 12.0776 6.28 11.522 6.85727C10.3941 8.02909 8.85413 9.09091 7 9.09091C5.145 9.09091 3.60588 8.02909 2.478 6.85727C1.93519 6.29028 1.44946 5.66807 1.02637 5Z" />
                          <path d="M7 2.72721C6.41984 2.72721 5.86344 2.96665 5.4532 3.39287C5.04297 3.81909 4.8125 4.39717 4.8125 4.99993C4.8125 5.6027 5.04297 6.18078 5.4532 6.60699C5.86344 7.03321 6.41984 7.27266 7 7.27266C7.58016 7.27266 8.13656 7.03321 8.5468 6.60699C8.95703 6.18078 9.1875 5.6027 9.1875 4.99993C9.1875 4.39717 8.95703 3.81909 8.5468 3.39287C8.13656 2.96665 7.58016 2.72721 7 2.72721ZM3.9375 4.99993C3.9375 4.15606 4.26016 3.34676 4.83449 2.75005C5.40882 2.15334 6.18777 1.81812 7 1.81812C7.81223 1.81812 8.59118 2.15334 9.16551 2.75005C9.73984 3.34676 10.0625 4.15606 10.0625 4.99993C10.0625 5.8438 9.73984 6.65311 9.16551 7.24982C8.59118 7.84652 7.81223 8.18175 7 8.18175C6.18777 8.18175 5.40882 7.84652 4.83449 7.24982C4.26016 6.65311 3.9375 5.8438 3.9375 4.99993Z" />
                        </svg>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/job-post">
                      <a className="primry-btn-2 eg-btn sky--btn">
                        <svg
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11.8798 1.19201C11.9563 1.26957 11.9993 1.37462 11.9993 1.48414C11.9993 1.59365 11.9563 1.6987 11.8798 1.77627L11.0253 2.64024L9.3868 0.98512L10.2413 0.121149C10.3181 0.0435774 10.4223 0 10.5309 0C10.6395 0 10.7437 0.0435774 10.8205 0.121149L11.8798 1.19118V1.19201ZM10.4461 3.22449L8.8076 1.56938L3.22607 7.20836C3.18098 7.2539 3.14704 7.30944 3.12694 7.37056L2.46745 9.36829C2.45549 9.40471 2.45379 9.44377 2.46254 9.48111C2.4713 9.51844 2.49016 9.55259 2.51702 9.57972C2.54388 9.60685 2.57768 9.62591 2.61464 9.63475C2.65161 9.64359 2.69028 9.64188 2.72633 9.62979L4.70399 8.96361C4.76442 8.94355 4.8194 8.90955 4.86456 8.8643L10.4461 3.22532V3.22449Z" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 10.7585C0 11.0878 0.12947 11.4035 0.359928 11.6363C0.590385 11.8691 0.902953 11.9999 1.22887 11.9999H10.2406C10.5665 11.9999 10.8791 11.8691 11.1095 11.6363C11.34 11.4035 11.4694 11.0878 11.4694 10.7585V5.79319C11.4694 5.68345 11.4263 5.5782 11.3495 5.50061C11.2727 5.42301 11.1685 5.37941 11.0598 5.37941C10.9512 5.37941 10.847 5.42301 10.7702 5.50061C10.6934 5.5782 10.6502 5.68345 10.6502 5.79319V10.7585C10.6502 10.8683 10.607 10.9735 10.5302 11.0511C10.4534 11.1287 10.3492 11.1723 10.2406 11.1723H1.22887C1.12023 11.1723 1.01604 11.1287 0.939222 11.0511C0.862403 10.9735 0.819246 10.8683 0.819246 10.7585V1.6554C0.819246 1.54566 0.862403 1.44041 0.939222 1.36281C1.01604 1.28522 1.12023 1.24162 1.22887 1.24162H6.55397C6.66261 1.24162 6.7668 1.19803 6.84362 1.12043C6.92044 1.04283 6.96359 0.937583 6.96359 0.827842C6.96359 0.718101 6.92044 0.612854 6.84362 0.535256C6.7668 0.457657 6.66261 0.414063 6.55397 0.414062H1.22887C0.902953 0.414063 0.590385 0.544846 0.359928 0.777642C0.12947 1.01044 0 1.32618 0 1.6554V10.7585Z"
                          />
                        </svg>{" "}
                      </a>
                    </Link>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td data-label="Job Title">
                <div className="job-content">
                  <h5>
                    <Link legacyBehavior href="/job-details-for-company">
                      <a> Senior React Native </a>
                    </Link>
                  </h5>
                  <p>
                    <img src="/assets/images/icon/calender2.svg" alt="" />
                    <span>Deadline:</span> 02 April, 2023
                  </p>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault3"
                      defaultChecked
                    />
                    Live
                  </div>
                </div>
              </td>
              <td data-label="Applications">
                <span className="total-number">1000</span>
              </td>
              <td data-label="Matched">
                <span className="total-number light-orange">400</span>
              </td>
              <td data-label="Shortlisted">
                <span className="total-number">700</span>
              </td>
              <td data-label="Viewed">
                <span className="total-number light-yellow">300</span>
              </td>
              <td data-label="Not Viewed">
                <span className="total-number deep-pink">100</span>
              </td>
              <td data-label="Action">
                <ul className="action-btn-group2">
                  <li>
                    <Link legacyBehavior href="/job-details-for-company">
                      <a className="primry-btn-2  eg-btn green--btn">
                        <svg
                          width={14}
                          height={10}
                          viewBox="0 0 14 10"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M14 5C14 5 11.375 0 7 0C2.625 0 0 5 0 5C0 5 2.625 10 7 10C11.375 10 14 5 14 5ZM1.02637 5C1.44945 4.33193 1.93606 3.70971 2.47887 3.14273C3.605 1.97091 5.145 0.909091 7 0.909091C8.855 0.909091 10.3941 1.97091 11.522 3.14273C12.0648 3.70971 12.5514 4.33193 12.9745 5C12.9237 5.07909 12.8678 5.16636 12.8039 5.26182C12.5108 5.69818 12.0776 6.28 11.522 6.85727C10.3941 8.02909 8.85413 9.09091 7 9.09091C5.145 9.09091 3.60588 8.02909 2.478 6.85727C1.93519 6.29028 1.44946 5.66807 1.02637 5Z" />
                          <path d="M7 2.72721C6.41984 2.72721 5.86344 2.96665 5.4532 3.39287C5.04297 3.81909 4.8125 4.39717 4.8125 4.99993C4.8125 5.6027 5.04297 6.18078 5.4532 6.60699C5.86344 7.03321 6.41984 7.27266 7 7.27266C7.58016 7.27266 8.13656 7.03321 8.5468 6.60699C8.95703 6.18078 9.1875 5.6027 9.1875 4.99993C9.1875 4.39717 8.95703 3.81909 8.5468 3.39287C8.13656 2.96665 7.58016 2.72721 7 2.72721ZM3.9375 4.99993C3.9375 4.15606 4.26016 3.34676 4.83449 2.75005C5.40882 2.15334 6.18777 1.81812 7 1.81812C7.81223 1.81812 8.59118 2.15334 9.16551 2.75005C9.73984 3.34676 10.0625 4.15606 10.0625 4.99993C10.0625 5.8438 9.73984 6.65311 9.16551 7.24982C8.59118 7.84652 7.81223 8.18175 7 8.18175C6.18777 8.18175 5.40882 7.84652 4.83449 7.24982C4.26016 6.65311 3.9375 5.8438 3.9375 4.99993Z" />
                        </svg>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/job-post">
                      <a className="primry-btn-2 eg-btn sky--btn">
                        <svg
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11.8798 1.19201C11.9563 1.26957 11.9993 1.37462 11.9993 1.48414C11.9993 1.59365 11.9563 1.6987 11.8798 1.77627L11.0253 2.64024L9.3868 0.98512L10.2413 0.121149C10.3181 0.0435774 10.4223 0 10.5309 0C10.6395 0 10.7437 0.0435774 10.8205 0.121149L11.8798 1.19118V1.19201ZM10.4461 3.22449L8.8076 1.56938L3.22607 7.20836C3.18098 7.2539 3.14704 7.30944 3.12694 7.37056L2.46745 9.36829C2.45549 9.40471 2.45379 9.44377 2.46254 9.48111C2.4713 9.51844 2.49016 9.55259 2.51702 9.57972C2.54388 9.60685 2.57768 9.62591 2.61464 9.63475C2.65161 9.64359 2.69028 9.64188 2.72633 9.62979L4.70399 8.96361C4.76442 8.94355 4.8194 8.90955 4.86456 8.8643L10.4461 3.22532V3.22449Z" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 10.7585C0 11.0878 0.12947 11.4035 0.359928 11.6363C0.590385 11.8691 0.902953 11.9999 1.22887 11.9999H10.2406C10.5665 11.9999 10.8791 11.8691 11.1095 11.6363C11.34 11.4035 11.4694 11.0878 11.4694 10.7585V5.79319C11.4694 5.68345 11.4263 5.5782 11.3495 5.50061C11.2727 5.42301 11.1685 5.37941 11.0598 5.37941C10.9512 5.37941 10.847 5.42301 10.7702 5.50061C10.6934 5.5782 10.6502 5.68345 10.6502 5.79319V10.7585C10.6502 10.8683 10.607 10.9735 10.5302 11.0511C10.4534 11.1287 10.3492 11.1723 10.2406 11.1723H1.22887C1.12023 11.1723 1.01604 11.1287 0.939222 11.0511C0.862403 10.9735 0.819246 10.8683 0.819246 10.7585V1.6554C0.819246 1.54566 0.862403 1.44041 0.939222 1.36281C1.01604 1.28522 1.12023 1.24162 1.22887 1.24162H6.55397C6.66261 1.24162 6.7668 1.19803 6.84362 1.12043C6.92044 1.04283 6.96359 0.937583 6.96359 0.827842C6.96359 0.718101 6.92044 0.612854 6.84362 0.535256C6.7668 0.457657 6.66261 0.414063 6.55397 0.414062H1.22887C0.902953 0.414063 0.590385 0.544846 0.359928 0.777642C0.12947 1.01044 0 1.32618 0 1.6554V10.7585Z"
                          />
                        </svg>
                      </a>
                    </Link>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td data-label="Job Title">
                <div className="job-content">
                  <h5>
                    <Link legacyBehavior href="/job-details-for-company">
                      <a> Manager- Account &amp; Finance</a>
                    </Link>
                  </h5>
                  <p>
                    <img src="/assets/images/icon/calender2.svg" alt="" />
                    <span>Deadline:</span> 02 April, 2023
                  </p>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault4"
                      defaultChecked
                    />
                    Live
                  </div>
                </div>
              </td>
              <td data-label="Applications">
                <span className="total-number">1000</span>
              </td>
              <td data-label="Matched">
                <span className="total-number light-orange">400</span>
              </td>
              <td data-label="Shortlisted">
                <span className="total-number">700</span>
              </td>
              <td data-label="Viewed">
                <span className="total-number light-yellow">300</span>
              </td>
              <td data-label="Not Viewed">
                <span className="total-number deep-pink">100</span>
              </td>
              <td data-label="Action">
                <ul className="action-btn-group2">
                  <li>
                    <Link legacyBehavior href="/job-details-for-company">
                      <a className="primry-btn-2  eg-btn green--btn">
                        <svg
                          width={14}
                          height={10}
                          viewBox="0 0 14 10"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M14 5C14 5 11.375 0 7 0C2.625 0 0 5 0 5C0 5 2.625 10 7 10C11.375 10 14 5 14 5ZM1.02637 5C1.44945 4.33193 1.93606 3.70971 2.47887 3.14273C3.605 1.97091 5.145 0.909091 7 0.909091C8.855 0.909091 10.3941 1.97091 11.522 3.14273C12.0648 3.70971 12.5514 4.33193 12.9745 5C12.9237 5.07909 12.8678 5.16636 12.8039 5.26182C12.5108 5.69818 12.0776 6.28 11.522 6.85727C10.3941 8.02909 8.85413 9.09091 7 9.09091C5.145 9.09091 3.60588 8.02909 2.478 6.85727C1.93519 6.29028 1.44946 5.66807 1.02637 5Z" />
                          <path d="M7 2.72721C6.41984 2.72721 5.86344 2.96665 5.4532 3.39287C5.04297 3.81909 4.8125 4.39717 4.8125 4.99993C4.8125 5.6027 5.04297 6.18078 5.4532 6.60699C5.86344 7.03321 6.41984 7.27266 7 7.27266C7.58016 7.27266 8.13656 7.03321 8.5468 6.60699C8.95703 6.18078 9.1875 5.6027 9.1875 4.99993C9.1875 4.39717 8.95703 3.81909 8.5468 3.39287C8.13656 2.96665 7.58016 2.72721 7 2.72721ZM3.9375 4.99993C3.9375 4.15606 4.26016 3.34676 4.83449 2.75005C5.40882 2.15334 6.18777 1.81812 7 1.81812C7.81223 1.81812 8.59118 2.15334 9.16551 2.75005C9.73984 3.34676 10.0625 4.15606 10.0625 4.99993C10.0625 5.8438 9.73984 6.65311 9.16551 7.24982C8.59118 7.84652 7.81223 8.18175 7 8.18175C6.18777 8.18175 5.40882 7.84652 4.83449 7.24982C4.26016 6.65311 3.9375 5.8438 3.9375 4.99993Z" />
                        </svg>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/job-post">
                      <a className="primry-btn-2 eg-btn sky--btn">
                        <svg
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11.8798 1.19201C11.9563 1.26957 11.9993 1.37462 11.9993 1.48414C11.9993 1.59365 11.9563 1.6987 11.8798 1.77627L11.0253 2.64024L9.3868 0.98512L10.2413 0.121149C10.3181 0.0435774 10.4223 0 10.5309 0C10.6395 0 10.7437 0.0435774 10.8205 0.121149L11.8798 1.19118V1.19201ZM10.4461 3.22449L8.8076 1.56938L3.22607 7.20836C3.18098 7.2539 3.14704 7.30944 3.12694 7.37056L2.46745 9.36829C2.45549 9.40471 2.45379 9.44377 2.46254 9.48111C2.4713 9.51844 2.49016 9.55259 2.51702 9.57972C2.54388 9.60685 2.57768 9.62591 2.61464 9.63475C2.65161 9.64359 2.69028 9.64188 2.72633 9.62979L4.70399 8.96361C4.76442 8.94355 4.8194 8.90955 4.86456 8.8643L10.4461 3.22532V3.22449Z" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 10.7585C0 11.0878 0.12947 11.4035 0.359928 11.6363C0.590385 11.8691 0.902953 11.9999 1.22887 11.9999H10.2406C10.5665 11.9999 10.8791 11.8691 11.1095 11.6363C11.34 11.4035 11.4694 11.0878 11.4694 10.7585V5.79319C11.4694 5.68345 11.4263 5.5782 11.3495 5.50061C11.2727 5.42301 11.1685 5.37941 11.0598 5.37941C10.9512 5.37941 10.847 5.42301 10.7702 5.50061C10.6934 5.5782 10.6502 5.68345 10.6502 5.79319V10.7585C10.6502 10.8683 10.607 10.9735 10.5302 11.0511C10.4534 11.1287 10.3492 11.1723 10.2406 11.1723H1.22887C1.12023 11.1723 1.01604 11.1287 0.939222 11.0511C0.862403 10.9735 0.819246 10.8683 0.819246 10.7585V1.6554C0.819246 1.54566 0.862403 1.44041 0.939222 1.36281C1.01604 1.28522 1.12023 1.24162 1.22887 1.24162H6.55397C6.66261 1.24162 6.7668 1.19803 6.84362 1.12043C6.92044 1.04283 6.96359 0.937583 6.96359 0.827842C6.96359 0.718101 6.92044 0.612854 6.84362 0.535256C6.7668 0.457657 6.66261 0.414063 6.55397 0.414062H1.22887C0.902953 0.414063 0.590385 0.544846 0.359928 0.777642C0.12947 1.01044 0 1.32618 0 1.6554V10.7585Z"
                          />
                        </svg>
                      </a>
                    </Link>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td data-label="Job Title">
                <div className="job-content">
                  <h5>
                    <Link legacyBehavior href="/job-details-for-company">
                      <a> WordPress Developer</a>
                    </Link>
                  </h5>
                  <p>
                    <img src="/assets/images/icon/calender2.svg" alt="" />
                    <span>Deadline:</span> 02 April, 2023
                  </p>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault5"
                      defaultChecked
                    />
                    Live
                  </div>
                </div>
              </td>
              <td data-label="Applications">
                <span className="total-number">1000</span>
              </td>
              <td data-label="Matched">
                <span className="total-number light-orange">400</span>
              </td>
              <td data-label="Shortlisted">
                <span className="total-number">700</span>
              </td>
              <td data-label="Viewed">
                <span className="total-number light-yellow">300</span>
              </td>
              <td data-label="Not Viewed">
                <span className="total-number deep-pink">100</span>
              </td>
              <td data-label="Action">
                <ul className="action-btn-group2">
                  <li>
                    <Link legacyBehavior href="/job-details-for-company">
                      <a className="primry-btn-2  eg-btn green--btn">
                        <svg
                          width={14}
                          height={10}
                          viewBox="0 0 14 10"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M14 5C14 5 11.375 0 7 0C2.625 0 0 5 0 5C0 5 2.625 10 7 10C11.375 10 14 5 14 5ZM1.02637 5C1.44945 4.33193 1.93606 3.70971 2.47887 3.14273C3.605 1.97091 5.145 0.909091 7 0.909091C8.855 0.909091 10.3941 1.97091 11.522 3.14273C12.0648 3.70971 12.5514 4.33193 12.9745 5C12.9237 5.07909 12.8678 5.16636 12.8039 5.26182C12.5108 5.69818 12.0776 6.28 11.522 6.85727C10.3941 8.02909 8.85413 9.09091 7 9.09091C5.145 9.09091 3.60588 8.02909 2.478 6.85727C1.93519 6.29028 1.44946 5.66807 1.02637 5Z" />
                          <path d="M7 2.72721C6.41984 2.72721 5.86344 2.96665 5.4532 3.39287C5.04297 3.81909 4.8125 4.39717 4.8125 4.99993C4.8125 5.6027 5.04297 6.18078 5.4532 6.60699C5.86344 7.03321 6.41984 7.27266 7 7.27266C7.58016 7.27266 8.13656 7.03321 8.5468 6.60699C8.95703 6.18078 9.1875 5.6027 9.1875 4.99993C9.1875 4.39717 8.95703 3.81909 8.5468 3.39287C8.13656 2.96665 7.58016 2.72721 7 2.72721ZM3.9375 4.99993C3.9375 4.15606 4.26016 3.34676 4.83449 2.75005C5.40882 2.15334 6.18777 1.81812 7 1.81812C7.81223 1.81812 8.59118 2.15334 9.16551 2.75005C9.73984 3.34676 10.0625 4.15606 10.0625 4.99993C10.0625 5.8438 9.73984 6.65311 9.16551 7.24982C8.59118 7.84652 7.81223 8.18175 7 8.18175C6.18777 8.18175 5.40882 7.84652 4.83449 7.24982C4.26016 6.65311 3.9375 5.8438 3.9375 4.99993Z" />
                        </svg>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/job-post">
                      <a className="primry-btn-2 eg-btn sky--btn">
                        <svg
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11.8798 1.19201C11.9563 1.26957 11.9993 1.37462 11.9993 1.48414C11.9993 1.59365 11.9563 1.6987 11.8798 1.77627L11.0253 2.64024L9.3868 0.98512L10.2413 0.121149C10.3181 0.0435774 10.4223 0 10.5309 0C10.6395 0 10.7437 0.0435774 10.8205 0.121149L11.8798 1.19118V1.19201ZM10.4461 3.22449L8.8076 1.56938L3.22607 7.20836C3.18098 7.2539 3.14704 7.30944 3.12694 7.37056L2.46745 9.36829C2.45549 9.40471 2.45379 9.44377 2.46254 9.48111C2.4713 9.51844 2.49016 9.55259 2.51702 9.57972C2.54388 9.60685 2.57768 9.62591 2.61464 9.63475C2.65161 9.64359 2.69028 9.64188 2.72633 9.62979L4.70399 8.96361C4.76442 8.94355 4.8194 8.90955 4.86456 8.8643L10.4461 3.22532V3.22449Z" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 10.7585C0 11.0878 0.12947 11.4035 0.359928 11.6363C0.590385 11.8691 0.902953 11.9999 1.22887 11.9999H10.2406C10.5665 11.9999 10.8791 11.8691 11.1095 11.6363C11.34 11.4035 11.4694 11.0878 11.4694 10.7585V5.79319C11.4694 5.68345 11.4263 5.5782 11.3495 5.50061C11.2727 5.42301 11.1685 5.37941 11.0598 5.37941C10.9512 5.37941 10.847 5.42301 10.7702 5.50061C10.6934 5.5782 10.6502 5.68345 10.6502 5.79319V10.7585C10.6502 10.8683 10.607 10.9735 10.5302 11.0511C10.4534 11.1287 10.3492 11.1723 10.2406 11.1723H1.22887C1.12023 11.1723 1.01604 11.1287 0.939222 11.0511C0.862403 10.9735 0.819246 10.8683 0.819246 10.7585V1.6554C0.819246 1.54566 0.862403 1.44041 0.939222 1.36281C1.01604 1.28522 1.12023 1.24162 1.22887 1.24162H6.55397C6.66261 1.24162 6.7668 1.19803 6.84362 1.12043C6.92044 1.04283 6.96359 0.937583 6.96359 0.827842C6.96359 0.718101 6.92044 0.612854 6.84362 0.535256C6.7668 0.457657 6.66261 0.414063 6.55397 0.414062H1.22887C0.902953 0.414063 0.590385 0.544846 0.359928 0.777642C0.12947 1.01044 0 1.32618 0 1.6554V10.7585Z"
                          />
                        </svg>
                      </a>
                    </Link>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="pagination-table-info">
          <div className="table-info">
            <span>06 Results Showing In 20 Jobs</span>
          </div>
          <div className="pagination-area">
            <nav aria-label="...">
              <ul className="pagination">
                <li className="page-item disabled">
                  <a className="page-link" href="#" tabIndex={-1} />
                </li>
                <li className="page-item active" aria-current="page">
                  <a className="page-link" href="#">
                    01
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    02
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    03
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyJobList;
