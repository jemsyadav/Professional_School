import React, { useState } from "react";
import Headerimage1 from "../Images/header-1-1.png";
import Top_Header from "../Components/Top_Header";
import Top_Header_2 from "../Components/Top_Header_2";
import Navbar_3 from "../Components/Navbar_3";
import { Select } from "@mui/material";

const ControlPannelCourse = () => {
  const [selects, setSelect] = useState("");
  //   console.log(selects);
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
        <div className="row" style={{ paddingTop: "1.5rem" }}>
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-12">
                <div
                  className="Facultiy_Heading"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="Faculity">
                    <h6>Students</h6>
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
                  className="Main_Add_Change_Button "
                  style={{
                    display: "flex",
                    gap: "10px",
                    paddingTop: "10px",
                    flexWrap: "wrap",
                  }}
                >
                  <div className="Add_Faculity">
                    <button
                      type="button"
                      style={{
                        background: "#a9db80",
                        border: "none",
                        borderRadius: "3px",
                        color: "white",
                        display: "flex",
                        textAlign: "center",
                      }}
                    >
                      Add Course
                    </button>
                  </div>
                  <div className="changepassword">
                    <button
                      type="button"
                      style={{
                        background: "#a9db80",
                        border: "none",
                        borderRadius: "3px",
                        color: "white",
                        display: "flex",
                        textAlign: "center",
                      }}
                    >
                      Courses
                    </button>
                  </div>
                  <div className="changepassword">
                    <button
                      type="button"
                      style={{
                        background: "#a9db80",
                        border: "none",
                        borderRadius: "3px",
                        color: "white",
                        display: "flex",
                        textAlign: "center",
                      }}
                    >
                      Syllabus
                    </button>
                  </div>
                  <div className="changepassword">
                    <button
                      type="button"
                      style={{
                        background: "#a9db80",
                        border: "none",
                        borderRadius: "3px",
                        color: "white",
                        display: "flex",
                        textAlign: "center",
                      }}
                    >
                      Assigment
                    </button>
                  </div>
                  <div className="changepassword">
                    <button
                      type="button"
                      style={{
                        background: "#a9db80",
                        border: "none",
                        borderRadius: "3px",
                        color: "white",
                        display: "flex",
                        textAlign: "center",
                      }}
                    >
                      File
                    </button>
                  </div>
                  <div className="changepassword">
                    <button
                      type="button"
                      style={{
                        background: "#a9db80",
                        border: "none",
                        borderRadius: "3px",
                        color: "white",
                        display: "flex",
                        textAlign: "center",
                      }}
                    >
                      Vedio
                    </button>
                  </div>
                  <div className="changepassword">
                    <button
                      type="button"
                      style={{
                        background: "#a9db80",
                        border: "none",
                        borderRadius: "3px",
                        color: "white",
                        display: "flex",
                        textAlign: "center",
                      }}
                    >
                      objectives
                    </button>
                  </div>
                  <div className="changepassword">
                    <button
                      type="button"
                      style={{
                        background: "#a9db80",
                        border: "none",
                        borderRadius: "3px",
                        color: "white",
                        display: "flex",
                        textAlign: "center",
                      }}
                    >
                      Slides
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6" style={{ paddingTop: "1rem" }}></div>
            <div className="col-lg-2">
              {/* <h6>Summer2023</h6> */}
              <select
                style={{ width: "11rem", cursor: "pointer" }}
                value={selects}
                onChange={(e) => setSelect(e.target.value)}
              >
                <option value="">
                  <h6> Summer 2023</h6>
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
            <div className="col-lg-4">
              <select
                style={{ width: "21rem", cursor: "pointer" }}
                value={selects}
                onChange={(e) => setSelect(e.target.value)}
              >
                <option value="">
                  <h6> All Courses</h6>
                </option>
                <option value="1">
                  321-s-2023-Breathing Science Physiology and Psychology
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlPannelCourse;
