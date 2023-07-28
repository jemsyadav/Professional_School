import { useState } from 'react';
import '../../src/Styles/Header.css'

const Navbar_3=()=> {
  const [icon,seticon] = useState(true)
  const HandleIcon = () => {
    seticon(!icon)
  }
  return (
   
  
   <>
     <nav  className=" style navbar navbar-expand-lg ">
    
  
    {/* <img className='Logo' src={headerlogo} >
   
    </img>  */}
    {/* <h4>Logo</h4> */}
   
    <div className='toggle_icon'>
    <div
  
      type="button"
    
      data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"
      >
      <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
 
</span>
    </div>
    </div>
    
    
    
  
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header">
    {/* <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5> */}
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
      <ul class="navbar-nav mb-2 mb-lg-0" style={{textAlign:'center'}}>
        <li class="nav-item">
        
          <a className="nav-link active text-black " aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class=" nav-link text-black" href="/faculity">Faculity</a>
        </li>
        

        <li class="nav-item">
          <a class="nav-link text-black" href="/students">Students</a>
        </li>

        <li class="nav-item">
          <a class="nav-link text-black" href="/benifits">Courses</a>
        </li>

        <li class="nav-item">
          <a class="nav-link text-black" href="/ourteam">Registation</a>
          
        </li>

        <li class="nav-item">
          <a class="nav-link text-black" href="/">Announcements</a>
        </li>

        <li class="nav-item">
          <a class="nav-link text-black" href="/ourteam">Messages</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-black" href="/ourteam">Exams</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-black" href="/ourteam">Forum & faq</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-black" href="/ourteam">My Profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-black" href="/ourteam">Admin Profile</a>
        </li>
        
        {/* <li class="nav-item">
        <button style={{marginLeft:"33px"}} type="button" class="btn btn-secondary contact_btn_mobile">Contact Us</button>
        </li> */}
       
  
  
       
       
      </ul>
      
     
    
      </div>
      <button type="button" class="btn btn-secondary contact_btn"> Control Pannels</button>
</nav>


   </>





  
 
  );
  
}

export default Navbar_3;