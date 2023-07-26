import React from 'react'



import Navbar1 from '../Components/Header'
import Top_Header from '../Components/Top_Header'
import Top_Header_2 from '../Components/Top_Header_2'
import Footer from '../Components/Footer'

const About = () => {
  return (
    <div>
   <Top_Header/>
   <Top_Header_2/>
   <div className="page_heading" style={{paddingTop:"14px" , paddingBottom:"2px" ,background:"#eaeaea"}}>
    <div className="container">
      <div className="heading">
        <h3 style={{fontSize:"28px",color:"#343434"}}>Admission</h3>
      </div>
    </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-sm-12" style={{paddingTop:"2rem"}}>
        <div className="paragraph">
          <p>Admission into Professional Certificate, Certification, Proseminar, and Professional Diploma programs is based on academic background, professional training, and <br /> professional experience that predict applicant success –</p>
        </div>
        <ul> <li>as a skilled provider of behavioral assessment and learning services,</li> <li>as an effective communicator of the relevance and importance of client-centered practice, and</li> <li>as a creative problem solver bringing new services to clients and colleagues.</li></ul>
        <p>Applicants are expected to document how their professional objectives are realistic based on how they plan to:</p>
        <ol> <li>integrate behavioral learning services into their existing practices, OR</li> <li>create a new business providing behavioral learning services, OR</li> <li>bring behavioral learning services to a third party organization as employees or independent contractors.</li></ol>
        <p>See <span style={{color:"#a0a2a8",textDecoration:"underline"}}> ADMISSIONS REQUIREMENTS</span> for specific admissions criteria.<span style={{color:"#a0a2a8",textDecoration:"underline"}}>See APPLICANT PROFILE</span> for the kinds of practitioner applicants the Professional School of Behavioral Health Sciences invites into its programs.</p>
        <p>See <span style={{color:"#a0a2a8",textDecoration:"underline"}}>ADMISSIONS REQUIREMENTS</span> for specific admissions criteria. See <span style={{color:"#a0a2a8",textDecoration:"underline"}}> APPLICANT PROFILE </span> for the kinds of practitioner applicants the Professional School of Behavioral Health Sciences invites into its programs.</p>
        </div>
      </div>
    </div>
    <Footer/>

     
     </div>
     
   
  )
}

export default About
