import React from 'react'
import Navbar1 from '../Components/Header'
import Top_Header from '../Components/Top_Header'
import Top_Header_2 from '../Components/Top_Header_2'
import Footer from '../Components/Footer'


const Services = () => {
  return (
    <div>
 <Top_Header/>
   <Top_Header_2/>
   <div className="page_heading" style={{paddingTop:"14px" , paddingBottom:"2px" ,background:"#eaeaea"}}>
    <div className="container">
      <div className="heading">
        <h3 style={{fontSize:"28px",color:"#343434"}}>Vission $ Mission</h3>
      </div>
    </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
        <h2 style={{paddingTop:"28px"}}><span style={{fontSize:"110%",color:"#a0a2a8",fontWeight:"400",lineHeight:"1.25"}}><strong>VISION</strong></span></h2>
        <p>The future of healthcare is linked to multidisciplinary education integrating behavioral science with physiology.  The Professional School provides experienced and entry-level healthcare and human service practitioners with the new knowledge and skills necessary to expand their existing careers or begin new ones.</p>

        <div className="second_vision">
        <h2 style={{paddingTop:"10px"}}><span style={{fontSize:"110%",color:"#a0a2a8",fontWeight:"400",lineHeight:"1.25"}}><strong>MISSION</strong></span></h2>
        <p style={{paddingBottom:"2rem"}}>The Professional School offers live-interactive webinar-based certification and degree programs that provide healthcare and human service practitioners worldwide with new career options for offering client-centered multidisciplinary services that integrate behavioral science with their existing professions.</p>
        
        </div>
        </div>
      </div>
    </div>
    <Footer/>

 
    
      </div>
     
   
  )
}

export default Services
