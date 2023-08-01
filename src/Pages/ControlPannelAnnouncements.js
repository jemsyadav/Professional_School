import React from 'react'
import Top_Header from '../Components/Top_Header'
import Navbar_3 from '../Components/Navbar_3'
import Headerimage1 from '../Images/header-1-1.png'

const ControlPannelAnnouncements = () => {
  return (
    <div>
        <Top_Header />
      <div className="background_images">
        <div className="container">
          <div className="MainDivPosition">
            <div className="Image_School">
              <img className="imgc" src={Headerimage1} alt="" />
            </div>
            <Navbar_3/>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row" style={{paddingTop:"1rem"}}>
        <div className="col-lg-12">
                <div
                  className="Facultiy_Heading"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="Faculity">
                    <h6>Announcments</h6>
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
                      }}
                    >
                      Back
                    </button>
                  </div>
                </div>
                
              </div>
        </div>
        
      </div>
    </div>
  )
}

export default ControlPannelAnnouncements
