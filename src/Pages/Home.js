import React, { useState ,useEffect} from 'react'
import Navbar1 from '../Components/Header'
import Header_image from '../Images/Header_Background.jpg'
import Headerimage1 from '../Images/header-1-1.png'
import '../Styles/Top_Header.css'

import frontbanner from '../Images/Front-banner.png'




// import AOS from 'aos';
// import 'aos/dist/aos.css';
import Top_Header from '../Components/Top_Header';
import Footer from '../Components/Footer'
import Top_Header_2 from '../Components/Top_Header_2'
import ControlPannelHome from './ControlPannelHome'
import ControlPannelStudents from './ControlPannelStudents'


const Home = () => {
//   useEffect(() => {
//     AOS.init();
//   }, [])
// const [text,setText]=useState(false)
// const handleTextOpen=()=>{
//   setText(true)
// }
// const handleTextClose=()=>{
//   setText(false)
// }


  return (
    
    <div>
    <Top_Header/>
    <Top_Header_2/>
    <div className="page_heading" style={{paddingTop:"14px" , paddingBottom:"2px" ,background:"#eaeaea"}}>
    <div className="container">
      <div className="heading">
        <h3>Practical Integration of Behavioral Science with Physiology</h3>
      </div>
    </div>
    </div>
    <div className="container">
    
      <div className="row">
        <div className="col-lg-12 col-sm-12" style={{paddingTop:"2rem"}}>
        
         <p>The Professional School of Behavioral Health Sciences provides live-interactive webinar-based post-graduate professional diploma, certificate, certification, proseminar practicums, and specialty workshop programs for experienced healthcare practitioners, human service professionals, and performance consultants from around the world.  These post-graduate offerings help professionals in these fields to expand their existing practices or to begin new ones by integrating behavior analysis, applied psychophysiology, and new technology in practical and innovative ways for identifying and overcoming dysfunctional habits that profoundly disturb physiology, health, and performance in their clients and people everywhere.  The Professional School offers:</p>

         <div className="webinar_professional">

       <h4><span style={{color:"000000",fontSize:"18px",fontWeight:"400",lineHeight:"1.25"}}><br/>Webinar Professional Diploma Programs</span></h4>
       <a style={{color:"#a0a2a8"}} href="">Professional Diploma Program in Behavioral Breathing Science</a>
       </div>
       <div className="Webinar_Certification_Programs">
       <h4><span style={{color:"000000",fontSize:"18px",fontWeight:"400",lineHeight:"1.25"}}><br/>Webinar Certification Program</span></h4>
       <a style={{color:"#a0a2a8"}} href=""> <a style={{color:"#a0a2a8"}} href="">Professional Diploma Program in Behavioral Breathing Science</a></a>
       </div>
       <div className="Webinar_certificate_program">
       <h4><span style={{color:"000000",fontSize:"18px",fontWeight:"400",lineHeight:"1.25"}}><br/>Webinar Professional Certificate Programs</span></h4>
       <a style={{color:"#a0a2a8"}} href="">Science of Breathing Behavior Analysis</a>
       </div>
       <div className="Webinar_certificate_program">
       <h4><span style={{color:"000000",fontSize:"18px",fontWeight:"400",lineHeight:"1.25"}} ><br/>Webinar Courses, Workshops, Proseminars</span></h4>
       <p style={{color:"rgb(160, 162, 168)"}}>Qualified colleagues may enroll in specialty courses, proseminars, and workshop programs that we offer during most trimesters, including the courses that comprise our professional diploma, professional certificate, and certification programs.</p>
       </div>
       <div className="Webinar_certificate_program">
       <h4><span style={{color:"000000",fontSize:"18px",fontWeight:"400",lineHeight:"1.25"}}><br/>Webinar Lectures and Special Events</span></h4>
       <p style={{color:"rgb(160, 162, 168)",paddingBottom:"18px"}}>Lectures and special events are offered to the professional public interested in how integrating behavioral science with physiology may facilitate our understanding of physiology as a psychophysiological phenomenon and how focusing on it as a programmable system changes how we do healthcare for others and take care of ourselves.</p>
       </div>
        </div>
      </div>
  
    </div>
    <Footer/>
    <ControlPannelStudents/>
   
  
   
   
   </div>
    
    
   
  )
}

export default Home
