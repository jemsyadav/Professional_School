import React from 'react'
import Top_Header from '../Components/Top_Header'
import Top_Header_2 from '../Components/Top_Header_2'
import { hover } from '@testing-library/user-event/dist/hover'
import Footer from '../Components/Footer'

const Contact = () => {
  return (
    <div>
        <Top_Header/>
   <Top_Header_2/>
   
<div className="container">
    <div className="row"  style={{paddingTop:"3rem"}}>
        <div className="col-lg-4 col-sm-12">
         <div className="Contact_Adress">
         <strong ><h6>CONTACT</h6></strong>
         <p style={{lineHeight:"20px"}}>Professional School of Behavioral Health Sciences</p>
         <p style={{lineHeight:"20px"}}>109 East 17th Street</p>
         <p style={{lineHeight:"20px"}}>Cheyenne, Wyoming 82001</p>
         <p style={{lineHeight:"20px"}}>Phone: 307-633-9800</p>
         <p style={{lineHeight:"20px"}}>FAX: 866-251-4826</p>
         <p style={{lineHeight:"20px"}}>Email: education@bp.edu</p>
         </div>
        </div>
        <div className="col-lg-8 col-sm-12">
          <h3>Subscribe</h3>
          <p><strong>Join our subscriber list. Please fill the information below.</strong></p>
          <div className="button_subscribe">
          <button style={{background:"#4a6bb5" ,padding:"12px 20px" ,border:"none",boxShadow:"inset 0 -2px 0 rgba(0,0,0,.25)",color:"white"}} type='button'>Join Our Suscriber list</button>
          </div>
         <div className="Form" >
         <form action="/action_page.php" style={{display:"flex" , gap:'3rem',paddingTop:"1rem" , flexWrap:"wrap"}}>
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" style={{width:"12rem"}} id="email"/>
  </div>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" style={{width:"12rem"}} id="pwd"/>
  </div>
</form>
 <div className="tell_us_about_yourself" style={{paddingTop:"10px",paddingBottom:"1rem"}}>
    <p>Tell us about your background (check all of the following that apply):</p>
  </div>
<div className="row">
    <div className="col-lg-12">
        <div className="row">
            <div className="col-lg-4">
            <div class="form-check" style={{paddingTop:'8px'}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label" for="flexCheckIndeterminate">
  Acupuncture
  </label>
</div>
      <div class="form-check" style={{paddingTop:'8px'}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label" for="flexCheckIndeterminate">
  ADD & ADHD
  </label>
</div>
      <div class="form-check" style={{paddingTop:'8px'}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label" for="flexCheckIndeterminate">
  Alternative Healthcare
  </label>
</div>
      <div class="form-check" style={{paddingTop:'8px'}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label" for="flexCheckIndeterminate">
  Anger Management
  </label>
</div>
      <div class="form-check" style={{paddingTop:'8px'}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label" for="flexCheckIndeterminate">
  Athletic Coaching
  </label>
</div>
      <div class="form-check" style={{paddingTop:'8px'}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label" for="flexCheckIndeterminate">
  Biofeedback
  </label>
</div>
      <div class="form-check" style={{paddingTop:'8px'}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label" for="flexCheckIndeterminate">
  Breathwork
  </label>
</div>
      <div class="form-check" style={{paddingTop:'8px'}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label" for="flexCheckIndeterminate">
  Buteyko
  </label>
</div>

<div class="form-check" style={{paddingTop:'8px'}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label" for="flexCheckIndeterminate">
  Chiropractic
  </label>
</div>
      <div class="form-check" style={{paddingTop:'8px'}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label" for="flexCheckIndeterminate">
  Corporate Training
  </label>
</div>
      <div class="form-check" style={{paddingTop:'8px'}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label" for="flexCheckIndeterminate">
  Counseling
  </label>
</div>
      <div class="form-check" style={{paddingTop:'8px'}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label" for="flexCheckIndeterminate">
  Dentistry
  </label>
</div>
      <div class="form-check" style={{paddingTop:'8px'}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label" for="flexCheckIndeterminate">
  Drug Rehabilitation
  </label>
</div>





            </div>
            <div className="col-lg-4">
            <div class="form-check" style={{paddingTop:'8px'}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label" for="flexCheckIndeterminate">
  Fitness training
  </label>
</div>
 <div class="form-check" style={{paddingTop:'8px'}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label" for="flexCheckIndeterminate">
  Flight Training (aviation)
  </label>
</div>
 <div class="form-check" style={{paddingTop:'8px'}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label" for="flexCheckIndeterminate">
  Homeopathy
  </label>
</div>
 <div class="form-check" style={{paddingTop:'8px'}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label" for="flexCheckIndeterminate">
  Learning Disabilities
  </label>
</div>
 <div class="form-check" style={{paddingTop:'8px'}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label" for="flexCheckIndeterminate">
  Marriage & Family
  </label>
</div>
 <div class="form-check" style={{paddingTop:'8px'}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label" for="flexCheckIndeterminate">
  Medicine
  </label>
</div>
 <div class="form-check" style={{paddingTop:'8px'}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label" for="flexCheckIndeterminate">
  Meditation
  </label>
</div>
 <div class="form-check" style={{paddingTop:'8px'}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label" for="flexCheckIndeterminate">
  Mental Health
  </label>
</div>
 <div class="form-check" style={{paddingTop:'8px'}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label" for="flexCheckIndeterminate">
  Midwifery
  </label>
</div>
 <div class="form-check" style={{paddingTop:'8px'}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label" for="flexCheckIndeterminate">
  Naturopathy
  </label>
</div>
 <div class="form-check" style={{paddingTop:'8px'}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label" for="flexCheckIndeterminate">
  Neurofeedback

  </label>
</div>
 <div class="form-check" style={{paddingTop:'8px'}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label" for="flexCheckIndeterminate">
  Nursing
  </label>
</div>
 <div class="form-check" style={{paddingTop:'8px'}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label" for="flexCheckIndeterminate">
  Occupational Therapy
  </label>
</div>
 <div class="form-check" style={{paddingTop:'8px'}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label" for="flexCheckIndeterminate">
  Orthodontics
  </label>
</div>
            </div>
            <div className="col-lg-4">
            <div class="form-check" style={{paddingTop:'8px'}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label" for="flexCheckIndeterminate">
  Pain Management
  </label>
</div>
<div class="form-check" style={{paddingTop:'8px'}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label" for="flexCheckIndeterminate">
  Performing Arts
  </label>
</div>
<div class="form-check" style={{paddingTop:'8px'}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label" for="flexCheckIndeterminate">
  Personal Coaching
  </label>
</div>
<div class="form-check" style={{paddingTop:'8px'}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label" for="flexCheckIndeterminate">
  Physiotherapy
  </label>
</div>
<div class="form-check" style={{paddingTop:'8px'}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label" for="flexCheckIndeterminate">
  Psychology
  </label>
</div>
<div class="form-check" style={{paddingTop:'8px'}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label" for="flexCheckIndeterminate">
  Public Speaking
  </label>
</div>
<div class="form-check" style={{paddingTop:'8px'}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label" for="flexCheckIndeterminate">
  Respiratory Therapy
  </label>
</div>
<div class="form-check" style={{paddingTop:'8px'}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label" for="flexCheckIndeterminate">
  Self-Regulation Learning
  </label>
</div>
<div class="form-check" style={{paddingTop:'8px'}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label" for="flexCheckIndeterminate">
  Social Work
  </label>
</div>

<div class="form-check" style={{paddingTop:'8px'}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label" for="flexCheckIndeterminate">
  Special Education
  </label>
</div>
<div class="form-check" style={{paddingTop:'8px'}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label" for="flexCheckIndeterminate">
  Speech Therapy
  </label>
</div>
<div class="form-check" style={{paddingTop:'8px'}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label" for="flexCheckIndeterminate">
  Stress Management
  </label>
</div>
<div class="form-check" style={{paddingTop:'8px'}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label" for="flexCheckIndeterminate">
  Trauma and PTSD
  </label>
</div>
<div class="form-check" style={{paddingTop:'8px' , paddingBottom:"3rem"}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label" for="flexCheckIndeterminate">
  Yoga

  </label>
  
</div>

            </div>
        </div>
    </div>
  </div>

         </div>
        </div>
    </div>
</div>
<Footer/>
    </div>
  )
}

export default Contact
