import React, { useState } from "react";
import Top_Header from "../Components/Top_Header";
import Navbar_3 from "../Components/Navbar_3";
import Headerimage1 from "../Images/header-1-1.png";
import { Link } from "react-router-dom";
import Registration10 from "../Components/Registration10";

const ControlPannelRegistation = () => {
  const [select, setSelect] = useState("");
  const [selects, setSelects] = useState("");
  return (
    <div>
      <Top_Header />
      <div className="background_images">
        <div className="container">
          <div className="MainDivPosition">
            <div className="Image_School">
              <img className="imgc" src={Headerimage1} alt="" />
            </div>
            <Navbar_3 />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12" style={{ paddingTop: "2rem" }}>
            <div
              className="Facultiy_Heading"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div className="Faculity">
                <h6>Events</h6>
              </div>
              <div className="Back">
                <button
                  type="button"
                  style={{
                    background: "#a9db80",
                    border: "none",
                    borderRadius: "3px",
                    color: "white",
                    display: "flex",
                    textAlign: "center",
                    flexWrap: "wrap",
                  }}
                >
                  Back
                </button>
              </div>
            </div>
            <div
              className="Add_New_Events"
              style={{ display: "flex", flexWrap: "wrap" }}
            >
              <h6>Add New Events:</h6>
              <p>
                This option is used to register new
                Course/Program/Lecture/Proseminar/Practicum/Diploma etc.
              </p>
            </div>
            <div
              className="All_Events"
              style={{ display: "flex", flexWrap: "wrap" }}
            >
              <h6>All Events:</h6>
              <p>
                This option is used to check the category specific list on the
                same page. Category like Course/Program/
                Lecture/Proseminar/Practicum/Diploma.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2">
            <select
              style={{ width: "11rem", cursor: "pointer", height: "2rem" }}
              value={select}
              onChange={(e) => setSelect(e.target.value)}
            >
              <option value="1">----Add New----</option>
              <option value="1">Course</option>
              <option value="1">Program</option>
              <option value="1">Lecture</option>
              <option value="1">Proseminar</option>
              <option value="1">Practitum</option>
              <option value="1">Diploma</option>
              <option value="1">Special Event</option>
              <option value="1">Scholarship Code</option>
              <option value="1">Add Refrail</option>
              <option value="1">Add F-A Code</option>
              <option value="1">Add PrePayment Code</option>
              <option value="1">Add FollowUp Email</option>
            </select>
          </div>
          <div className="col-md-3">
            <select
              style={{ width: "11rem", cursor: "pointer", height: "2rem" }}
              value={selects}
              onChange={(e) => setSelects(e.target.value)}
            >
              <option value="">
                <h6> All Trimester</h6>
              </option>
              <option value="1">All Trimesters</option>
              <option value="2">Fall 2023</option>
              <option value="3">Summer2023</option>
              <option value="5">Winter 2023</option>
              <option value="6">Fall 2022</option>
              <option value="7">Summer 2022</option>
              <option value="8">Winter 2021</option>
              <option value="9">Fall 2021</option>
              <option value="10">Summer 2021</option>
              <option value="11">Winter 2020</option>
            </select>
          </div>
          <div className="col-md-3">
            <select
              style={{ width: "11rem", cursor: "pointer", height: "2rem" }}
              value={select}
              onChange={(e) => setSelect(e.target.value)}
            >
              <option value="">
                <h6> All Events</h6>
              </option>
              <option value="1">Course </option>
              <option value="2"> Practitum</option>
              <option value="3">Program</option>
              <option value="5"> Lecture</option>
              <option value="6">Diploma </option>
              <option value="7">Proseminar</option>
              <option value="8">Special Events</option>
            </select>
          </div>
          <div className="col-md-4">
            <select
              style={{ width: "11rem", cursor: "pointer", height: "2rem" }}
              value={select}
              onChange={(e) => setSelect(e.target.value)}
            >
              <option value="">
                <h6> Choose Specific Events</h6>
              </option>
              <option value="1">Course </option>
              <option value="2"> Practitum</option>
              <option value="3">Program</option>
              <option value="5"> Lecture</option>
              <option value="6">Diploma </option>
              <option value="7">Proseminar</option>
              <option value="8">Special Events</option>
            </select>
          </div>
        </div>
        <div className="Custom_Tab" style={{ paddingTop: "2rem" }}>
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Home
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Profile
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Contact
              </button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              {" "}
              <Registration10 />
            </div>
            <div
              class="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              ...
            </div>
            <div
              class="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              ...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlPannelRegistation;
