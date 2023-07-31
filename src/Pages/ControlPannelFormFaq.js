import React from 'react'
import Top_Header from '../Components/Top_Header'
import Navbar_3 from '../Components/Navbar_3'
import Headerimage1 from '../Images/header-1-1.png'
import deletelogo from '../Images/delete.png'

const ControlPannelFormFaq = () => {
  let title = "Q1:- Kindle Library"
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
  <div className="row" style={{paddingTop:"3rem"}}>
    <div className="col-lg-12" style={{border:"5px solid #FFFFFF",padding:"10px 30px",borderRadius:"10px",boxShadow:"0 0 3px rgba(0, 0, 0, 0.52)",background:"#F2F2F2",margin:"0 4px 14px"}}>
      <div className="First_box">
   <h6>   {title}</h6>
      </div>
      <div className="Logo_Date" style={{display:"flex" ,gap:"8px"}}>
        <div className="Date">
        <p>08-Jul-2018</p>
        </div>
        <div className="logo">
     <img src={deletelogo} alt="" />
        </div>
      </div>
    </div>
  </div>
</div>
      
    </div>
  )
}

export default ControlPannelFormFaq
