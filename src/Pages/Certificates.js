import React from 'react'
import Top_Header from '../Components/Top_Header'
import Top_Header_2 from '../Components/Top_Header_2'
import Footer from '../Components/Footer'

const Certificates = () => {
  return (
    <div>
       <Top_Header/>
   <Top_Header_2/>
   <div className="page_heading" style={{paddingTop:"14px" , paddingBottom:"2px" ,background:"#eaeaea"}}>
    <div className="container">
      <div className="heading">
        <h3 style={{fontSize:"28px",color:"#343434"}}>Certificate Programs</h3>
      </div>
    </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-lg-12 col-sm-12" >
            <p style={{paddingTop:"3rem"}}>The Professional School of Behavioral Health Sciences offers multidisciplinary certificate programs for practical applications in diversified professional setting <br />
              These programs are ideal for practitioners interested in bringing new practical skills and services to their businesses and their clients.  In many cases the credit units received through <br /> completion of certificates provide for the first step in completing diploma and certification programs designed to deepen knowledge, sharpen skills, and establish recognition for <br /> specialty expertise.</p>
             <p>These programs address high profile challenges, facing large numbers of people worldwide, that are often misunderstood, overlooked, or ineffectively addressed by <br /> conventional thinking and practice.</p>
        <p>The Certificate, the Science of Breathing Behavior Analysis, is one such program.  It provides the first of two steps to becoming certified as Breathing Behavior Analyst. <br />  The Certification program then itself constitutes the first third of the Professional Diploma Program, Breathing Behavior Science.</p>
          <p>Statistics suggest that tens millions of people worldwide suffer with the profound and misunderstood symptoms and deficits of learned dysfunctional breathing habits.  Unfortunately, these habits <br /> are rarely identified by practitioners, their effects mistakenly attributed to other causes, and their resolutions prescriptive in nature where focus is <br /> on symptoms rather than on causes.  We offer a solution: a Certificate, Certification, and a Professional Diploma.</p>
           <div className="link_Heading" style={{paddingBottom:"3rem"}}>
          <a style={{color:"#a0a2a8" }} href="">Certified Breathing Behavior Analyst</a>
            </div>
            </div>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Certificates
