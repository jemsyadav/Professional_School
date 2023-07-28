import React from 'react'
import '../../src/Styles/Header.css'
import Top_Header from '../Components/Top_Header'
import Top_Header_2 from '../Components/Top_Header_2'
import Navbar_3 from '../Components/Navbar_3'
import Headerimage1 from '../Images/header-1-1.png'

const ControlPannelHome = () => {
  return (
    <div>
     <Top_Header/>
     <div className="background_images">
    <div className="container">

    <div className="MainDivPosition">
         <div className="Image_School">
          <img  className='imgc' src={Headerimage1} alt=""  />
          </div>
          <Navbar_3/>
          </div>
    
    </div>
   
    
    </div>
  
  
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="Home_Control_Pannel">
                     <div className="Visit_Our_WebSite" style={{paddingTop:"2px",textAlign:"-webkit-right"}}>
                     <button   type="button" style={{background:"#a9db80",border:"none",borderRadius:"3px",color:"white",display:"flex",textAlign:"center"}}>Visit Our WebSite</button>
                     </div>
                     <div className="Welcome_to_Webkiz">
                        <h6 style={{textAlign:"center",fontSize:"15px"}}> Welcome Bizhawkz!</h6>
                     </div>
                </div>
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default ControlPannelHome
