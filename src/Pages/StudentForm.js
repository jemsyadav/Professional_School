import React from "react";
import Top_Header from "../Components/Top_Header";
import Navbar_3 from "../Components/Navbar_3";
import Headerimage1 from "../Images/header-1-1.png";

const StudentForm = () => {
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
    </div>
  );
};

export default StudentForm;
