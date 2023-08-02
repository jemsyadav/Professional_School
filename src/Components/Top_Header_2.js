import React from "react";
import Navbar1 from "../Components/Header";
import Header_image from "../Images/Header_Background.jpg";
import Headerimage1 from "../Images/header-1-1.png";
import "../Styles/Top_Header.css";

const Top_Header_2 = () => {
  return (
    <div>
      <div className="background_images">
        <div className="container">
          <div className="MainDivPosition">
            <div className="Image_School">
              <img className="imgc" src={Headerimage1} alt="" width={"100%"} />
            </div>
            <Navbar1 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top_Header_2;
