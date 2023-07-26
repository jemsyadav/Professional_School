import React,{useEffect} from "react";
import Navbar1 from '../Components/Header'
import Top_Header from "../Components/Top_Header";
import Top_Header_2 from "../Components/Top_Header_2";
import Footer from "../Components/Footer";

// import AOS from 'aos';
// import 'aos/dist/aos.css';


const Benifits = () => {
  // useEffect(() => {
  //   AOS.init();
  // }, [])
  return (
    <div >
   <Top_Header/>
   <Top_Header_2/>
   <div className="page_heading" style={{paddingTop:"14px" , paddingBottom:"2px" ,background:"#eaeaea"}}>
    <div className="container">
      <div className="heading">
        <h3 style={{fontSize:"28px",color:"#343434"}}>Faculity</h3>
      </div>
    </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
         <div className="Heading_Faculity">
          <h6 style={{paddingTop:"3rem"}}>Click on name for a specific faculty bio.</h6>
         </div>

         <div className="All_Faculites_BioData">
          <p style={{paddingTop:"18px" , margin:"0px 0px 9px",fontSize:"15px",fontWeight:"400"}}> <span style={{textDecoration:"underline"}}> <a style={{color:"#a0a2a8"}} href=""> Naras Bhat</a></span>, M.D. physician, cardiologist</p>
         </div>

         <div className="All_Faculites_BioData">
          <p style={{ margin:"0px 0px 9px",fontSize:"15px",fontWeight:"400"}}> <span style={{textDecoration:"underline"}}> <a style={{color:"#a0a2a8"}} href=""> Denise Campbell</a></span>, BS, PT, OCS, DIP. MDT, FAAOMPT</p>
         </div>
         <div className="All_Faculites_BioData">
          <p style={{  margin:"0px 0px 9px",fontSize:"15px",fontWeight:"400"}}> <span style={{textDecoration:"underline"}}> <a style={{color:"#a0a2a8"}} href=""> Wolfgang J. Fellner</a></span>, Ph.D., professor of economics</p>
         </div>
         <div className="All_Faculites_BioData">
          <p style={{ margin:"0px 0px 9px",fontSize:"15px",fontWeight:"400"}}> <span style={{textDecoration:"underline"}}> <a style={{color:"#a0a2a8"}} href=""> Christopher Gilbert</a></span>,  Ph.D., clinical psychologist</p>
         </div>
         <div className="All_Faculites_BioData">
          <p style={{margin:"0px 0px 9px",fontSize:"15px",fontWeight:"400"}}> <span style={{textDecoration:"underline"}}> <a style={{color:"#a0a2a8"}} href=""> Robert N. Grove</a></span>, Ph.D., medical psychologist</p>
         </div>
         <div className="All_Faculites_BioData">
          <p style={{ margin:"0px 0px 9px",fontSize:"15px",fontWeight:"400"}}> <span style={{textDecoration:"underline"}}> <a style={{color:"#a0a2a8"}} href=""> Lisa V. Kusch</a></span>, M.S., B.Ed., CBBA, SBT, mental health counselor</p>
         </div><div className="All_Faculites_BioData">
          <p style={{ margin:"0px 0px 9px",fontSize:"15px",fontWeight:"400"}}> <span style={{textDecoration:"underline"}}> <a style={{color:"#a0a2a8"}} href="">Maria Katsamanis</a></span>, Psy.D., clinical psychologist</p>
         </div>
         <div className="All_Faculites_BioData">
          <p style={{ margin:"0px 0px 9px",fontSize:"15px",fontWeight:"400"}}> <span style={{textDecoration:"underline"}}> <a style={{color:"#a0a2a8"}} href=""> Nevşah F. Karamehmet</a></span>,  B.Sc., breathing health specialist</p>
         </div>
         <div className="All_Faculites_BioData">
          <p style={{ margin:"0px 0px 9px",fontSize:"15px",fontWeight:"400"}}> <span style={{textDecoration:"underline"}}> <a style={{color:"#a0a2a8"}} href="">Peter M. Litchfield</a></span>, M.D. physician, Ph.D., behavioral physiologist</p>
         </div>
         <div className="All_Faculites_BioData">
          <p style={{ margin:"0px 0px 9px",fontSize:"15px",fontWeight:"400"}}> <span style={{textDecoration:"underline"}}> <a style={{color:"#a0a2a8"}} href=""> Laurie McLaughlin</a></span>,  D.Sc., physiotherapist</p>
         </div>
         <div className="All_Faculites_BioData">
          <p style={{ margin:"0px 0px 9px",fontSize:"15px",fontWeight:"400"}}> <span style={{textDecoration:"underline"}}> <a style={{color:"#a0a2a8"}} href=""> Jan B. Newman</a></span>, M.D., physician, surgeon</p>
         </div>
         <div className="All_Faculites_BioData">
          <p style={{margin:"0px 0px 9px",fontSize:"15px",fontWeight:"400"}}> <span style={{textDecoration:"underline"}}> <a style={{color:"#a0a2a8"}} href=""> Sandra Reamer</a></span>, M.S., MFA, CBBA, CBBP, CSOM, CST, breathing behavior analyst</p>
         </div>
         <div className="All_Faculites_BioData">
          <p style={{ margin:"0px 0px 9px",fontSize:"15px",fontWeight:"400"}}> <span style={{textDecoration:"underline"}}> <a style={{color:"#a0a2a8"}} href=""> Robert P. Whitehouse</a></span>, Ed.D., clinical psychologist</p>
         </div>
         <div className="All_Faculites_BioData">
          <p style={{ paddingBottom:"3rem", margin:"0px 0px 9px",fontSize:"15px",fontWeight:"400"}}> <span style={{textDecoration:"underline"}}> <a style={{color:"#a0a2a8"}} href=""> Jason Worchel</a></span>, M.D., physician, psychiatrist</p>
         </div>


        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Benifits
