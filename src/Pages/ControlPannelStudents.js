import React from 'react'
import '../../src/Styles/Header.css'
import Headerimage1 from '../Images/header-1-1.png'
import Top_Header from '../Components/Top_Header'
import Navbar_3 from '../Components/Navbar_3'
import action1 from "../Images/Action2.png";
import action3 from "../Images/action3.png";
import action4 from "../Images/Action4.png";
import action5 from "../Images/action5.png";
import action6 from "../Images/action6.png";
import action7 from "../Images/action7.png";
import action8 from "../Images/action8.jpg";
import Image1 from "../Images/Image1.png";
import image2 from "../Images/image2.jpg";

const ControlPannelStudents = () => {
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
    <div className="row" style={{paddingTop:"1.5rem"}}>
        <div className="col-lg-12">
        <div className="row">
            <div className="col-lg-12">
                <div className="Facultiy_Heading" style={{display:"flex",justifyContent:"space-between"}}>
                    <div className="Faculity">
                        <h6>Students</h6>
                    </div>
                    <div className="Back">
                    <button   type="button" style={{background:"#a9db80",border:"none",borderRadius:"3px",color:"white",display:"flex",textAlign:"center"}}>Back</button>
                    </div>
                  
                </div>
                <div className="Main_Add_Change_Button " style={{display:"flex",gap:"10px",paddingTop:"10px"}}>
                    <div className="Add_Faculity">
                    <button   type="button" style={{background:"#a9db80",border:"none",borderRadius:"3px",color:"white",display:"flex",textAlign:"center"}}>Add New Student</button>
                    </div>
                    <div className="changepassword">
                    <button   type="button" style={{background:"#a9db80",border:"none",borderRadius:"3px",color:"white",display:"flex",textAlign:"center"}}>Add Existing Student</button>
                    </div>
                    <div className="changepassword">
                    <button   type="button" style={{background:"#a9db80",border:"none",borderRadius:"3px",color:"white",display:"flex",textAlign:"center"}}>Manage Degree</button>
                    </div>
                    <div className="changepassword">
                    <button   type="button" style={{background:"#a9db80",border:"none",borderRadius:"3px",color:"white",display:"flex",textAlign:"center"}}>Balance Due List</button>
                    </div>
                    <div className="changepassword">
                    <button   type="button" style={{background:"#a9db80",border:"none",borderRadius:"3px",color:"white",display:"flex",textAlign:"center"}}>Non Registered</button>
                    </div>
                    
                </div>
               
            </div>
        </div>
        </div>
        <div className="row">
            <div className="col-lg-4" style={{paddingTop:"1rem"}}>
            <div className="MainBOxStudents" style={{display:"flex" ,gap:"8px"}}>
                    <div className="export_detail">
                    <button   type="button" style={{background:"#A3D2F1",border:"none",borderRadius:"3px",color:"white",}}>Export details</button>
                    </div>
                    <div className="exportceonly">
                    <button   type="button" style={{background:"#A3D2F1",border:"none",borderRadius:"3px",color:"white",}}>Export CE Only</button>
                    </div>
                    <div className="exportsummary">
                    <button   type="button" style={{background:"#A3D2F1",border:"none",borderRadius:"3px",color:"white",}}>Export Summary</button>
                    </div>
                </div>
            </div>
            <div className="col-lg-8" style={{paddingTop:"1rem"}}>



            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
            <table class="table">
              <thead class="thead-dark">
                <tr className='Table_Header_Background'>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Courses</th>
                  <th scope="col">CE/ACA</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>

              <tbody style={{ border: "1px solid rgb(59, 110, 162)" }}>
                <tr >
                  <td style= {{border:"1px dotted #CCCCCC"}}>
                  A-Litchfield,Peter
                  </td>
                  <td style={{border:"1px dotted #CCCCCC"}} > 	tech@betterphysiology.com</td>
                  <td style={{border:"1px dotted #CCCCCC"}}>No Course Assigned In This Trimesters </td>
                  <td style={{border:"1px dotted #CCCCCC"}}> 	ACA </td>
                  <td style={{border:"1px dotted #CCCCCC"}}>
                    <div
                      className="Main_div_Table"
                      style={{ display: "flex", gap: "3px" }}
                    >
                      <div className="first">
                        <a href="">
                          {" "}
                          <i
                            class="fa fa-folder"
                            aria-hidden="true"
                            title="Record"
                            style={{ fontSize: "2rem", color: "#477099" }}
                          ></i>
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action1} title="Track User" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action3} title="View Detail" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action4} title="Edit" alt="" />
                        </a>
                      </div>

                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action5} title="Send Reminder" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action6} title="Deactivate" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action7} title="Delete" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img
                            src={action8}
                            title="Recording Acess"
                            alt=""
                            style={{ width: "12px" }}
                          />
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              
              </tbody>
              <tbody style={{ border: "1px solid rgb(59, 110, 162)" }}>
                <tr >
                  <td style= {{border:"1px dotted #CCCCCC"}}>
                  A-Litchfield,Peter
                  </td>
                  <td style={{border:"1px dotted #CCCCCC"}} > 	tech@betterphysiology.com</td>
                  <td style={{border:"1px dotted #CCCCCC"}}>No Course Assigned In This Trimesters </td>
                  <td style={{border:"1px dotted #CCCCCC"}}> 	ACA </td>
                  <td style={{border:"1px dotted #CCCCCC"}}>
                    <div
                      className="Main_div_Table"
                      style={{ display: "flex", gap: "3px" }}
                    >
                      <div className="first">
                        <a href="">
                          {" "}
                          <i
                            class="fa fa-folder"
                            aria-hidden="true"
                            title="Record"
                            style={{ fontSize: "2rem", color: "#477099" }}
                          ></i>
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action1} title="Track User" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action3} title="View Detail" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action4} title="Edit" alt="" />
                        </a>
                      </div>

                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action5} title="Send Reminder" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action6} title="Deactivate" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action7} title="Delete" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img
                            src={action8}
                            title="Recording Acess"
                            alt=""
                            style={{ width: "12px" }}
                          />
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              
              </tbody>
              <tbody style={{ border: "1px solid rgb(59, 110, 162)" }}>
                <tr >
                  <td style= {{border:"1px dotted #CCCCCC"}}>
                  A-Litchfield,Peter
                  </td>
                  <td style={{border:"1px dotted #CCCCCC"}} > 	tech@betterphysiology.com</td>
                  <td style={{border:"1px dotted #CCCCCC"}}>No Course Assigned In This Trimesters </td>
                  <td style={{border:"1px dotted #CCCCCC"}}> 	ACA </td>
                  <td style={{border:"1px dotted #CCCCCC"}}>
                    <div
                      className="Main_div_Table"
                      style={{ display: "flex", gap: "3px" }}
                    >
                      <div className="first">
                        <a href="">
                          {" "}
                          <i
                            class="fa fa-folder"
                            aria-hidden="true"
                            title="Record"
                            style={{ fontSize: "2rem", color: "#477099" }}
                          ></i>
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action1} title="Track User" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action3} title="View Detail" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action4} title="Edit" alt="" />
                        </a>
                      </div>

                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action5} title="Send Reminder" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action6} title="Deactivate" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action7} title="Delete" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img
                            src={action8}
                            title="Recording Acess"
                            alt=""
                            style={{ width: "12px" }}
                          />
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                
                <tr >
                  <td style= {{border:"1px dotted #CCCCCC"}}>
                  A-Litchfield,Peter
                  </td>
                  <td style={{border:"1px dotted #CCCCCC"}} > 	tech@betterphysiology.com</td>
                  <td style={{border:"1px dotted #CCCCCC"}}>No Course Assigned In This Trimesters </td>
                  <td style={{border:"1px dotted #CCCCCC"}}> 	ACA </td>
                  <td style={{border:"1px dotted #CCCCCC"}}>
                    <div
                      className="Main_div_Table"
                      style={{ display: "flex", gap: "3px" }}
                    >
                      <div className="first">
                        <a href="">
                          {" "}
                          <i
                            class="fa fa-folder"
                            aria-hidden="true"
                            title="Record"
                            style={{ fontSize: "2rem", color: "#477099" }}
                          ></i>
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action1} title="Track User" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action3} title="View Detail" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action4} title="Edit" alt="" />
                        </a>
                      </div>

                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action5} title="Send Reminder" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action6} title="Deactivate" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action7} title="Delete" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img
                            src={action8}
                            title="Recording Acess"
                            alt=""
                            style={{ width: "12px" }}
                          />
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr >
                  <td style= {{border:"1px dotted #CCCCCC"}}>
                  A-Litchfield,Peter
                  </td>
                  <td style={{border:"1px dotted #CCCCCC"}} > 	tech@betterphysiology.com</td>
                  <td style={{border:"1px dotted #CCCCCC"}}>No Course Assigned In This Trimesters </td>
                  <td style={{border:"1px dotted #CCCCCC"}}> 	ACA </td>
                  <td style={{border:"1px dotted #CCCCCC"}}>
                    <div
                      className="Main_div_Table"
                      style={{ display: "flex", gap: "3px" }}
                    >
                      <div className="first">
                        <a href="">
                          {" "}
                          <i
                            class="fa fa-folder"
                            aria-hidden="true"
                            title="Record"
                            style={{ fontSize: "2rem", color: "#477099" }}
                          ></i>
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action1} title="Track User" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action3} title="View Detail" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action4} title="Edit" alt="" />
                        </a>
                      </div>

                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action5} title="Send Reminder" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action6} title="Deactivate" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action7} title="Delete" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img
                            src={action8}
                            title="Recording Acess"
                            alt=""
                            style={{ width: "12px" }}
                          />
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr >
                  <td style= {{border:"1px dotted #CCCCCC"}}>
                  A-Litchfield,Peter
                  </td>
                  <td style={{border:"1px dotted #CCCCCC"}} > 	tech@betterphysiology.com</td>
                  <td style={{border:"1px dotted #CCCCCC"}}>No Course Assigned In This Trimesters </td>
                  <td style={{border:"1px dotted #CCCCCC"}}> 	ACA </td>
                  <td style={{border:"1px dotted #CCCCCC"}}>
                    <div
                      className="Main_div_Table"
                      style={{ display: "flex", gap: "3px" }}
                    >
                      <div className="first">
                        <a href="">
                          {" "}
                          <i
                            class="fa fa-folder"
                            aria-hidden="true"
                            title="Record"
                            style={{ fontSize: "2rem", color: "#477099" }}
                          ></i>
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action1} title="Track User" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action3} title="View Detail" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action4} title="Edit" alt="" />
                        </a>
                      </div>

                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action5} title="Send Reminder" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action6} title="Deactivate" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action7} title="Delete" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img
                            src={action8}
                            title="Recording Acess"
                            alt=""
                            style={{ width: "12px" }}
                          />
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr >
                  <td style= {{border:"1px dotted #CCCCCC"}}>
                  A-Litchfield,Peter
                  </td>
                  <td style={{border:"1px dotted #CCCCCC"}} > 	tech@betterphysiology.com</td>
                  <td style={{border:"1px dotted #CCCCCC"}}>No Course Assigned In This Trimesters </td>
                  <td style={{border:"1px dotted #CCCCCC"}}> 	ACA </td>
                  <td style={{border:"1px dotted #CCCCCC"}}>
                    <div
                      className="Main_div_Table"
                      style={{ display: "flex", gap: "3px" }}
                    >
                      <div className="first">
                        <a href="">
                          {" "}
                          <i
                            class="fa fa-folder"
                            aria-hidden="true"
                            title="Record"
                            style={{ fontSize: "2rem", color: "#477099" }}
                          ></i>
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action1} title="Track User" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action3} title="View Detail" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action4} title="Edit" alt="" />
                        </a>
                      </div>

                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action5} title="Send Reminder" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action6} title="Deactivate" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action7} title="Delete" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img
                            src={action8}
                            title="Recording Acess"
                            alt=""
                            style={{ width: "12px" }}
                          />
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr >
                  <td style= {{border:"1px dotted #CCCCCC"}}>
                  A-Litchfield,Peter
                  </td>
                  <td style={{border:"1px dotted #CCCCCC"}} > 	tech@betterphysiology.com</td>
                  <td style={{border:"1px dotted #CCCCCC"}}>No Course Assigned In This Trimesters </td>
                  <td style={{border:"1px dotted #CCCCCC"}}> 	ACA </td>
                  <td style={{border:"1px dotted #CCCCCC"}}>
                    <div
                      className="Main_div_Table"
                      style={{ display: "flex", gap: "3px" }}
                    >
                      <div className="first">
                        <a href="">
                          {" "}
                          <i
                            class="fa fa-folder"
                            aria-hidden="true"
                            title="Record"
                            style={{ fontSize: "2rem", color: "#477099" }}
                          ></i>
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action1} title="Track User" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action3} title="View Detail" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action4} title="Edit" alt="" />
                        </a>
                      </div>

                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action5} title="Send Reminder" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action6} title="Deactivate" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action7} title="Delete" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img
                            src={action8}
                            title="Recording Acess"
                            alt=""
                            style={{ width: "12px" }}
                          />
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr >
                  <td style= {{border:"1px dotted #CCCCCC"}}>
                  A-Litchfield,Peter
                  </td>
                  <td style={{border:"1px dotted #CCCCCC"}} > 	tech@betterphysiology.com</td>
                  <td style={{border:"1px dotted #CCCCCC"}}>No Course Assigned In This Trimesters </td>
                  <td style={{border:"1px dotted #CCCCCC"}}> 	ACA </td>
                  <td style={{border:"1px dotted #CCCCCC"}}>
                    <div
                      className="Main_div_Table"
                      style={{ display: "flex", gap: "3px" }}
                    >
                      <div className="first">
                        <a href="">
                          {" "}
                          <i
                            class="fa fa-folder"
                            aria-hidden="true"
                            title="Record"
                            style={{ fontSize: "2rem", color: "#477099" }}
                          ></i>
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action1} title="Track User" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action3} title="View Detail" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action4} title="Edit" alt="" />
                        </a>
                      </div>

                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action5} title="Send Reminder" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action6} title="Deactivate" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action7} title="Delete" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img
                            src={action8}
                            title="Recording Acess"
                            alt=""
                            style={{ width: "12px" }}
                          />
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr >
                  <td style= {{border:"1px dotted #CCCCCC"}}>
                  A-Litchfield,Peter
                  </td>
                  <td style={{border:"1px dotted #CCCCCC"}} > 	tech@betterphysiology.com</td>
                  <td style={{border:"1px dotted #CCCCCC"}}>No Course Assigned In This Trimesters </td>
                  <td style={{border:"1px dotted #CCCCCC"}}> 	ACA </td>
                  <td style={{border:"1px dotted #CCCCCC"}}>
                    <div
                      className="Main_div_Table"
                      style={{ display: "flex", gap: "3px" }}
                    >
                      <div className="first">
                        <a href="">
                          {" "}
                          <i
                            class="fa fa-folder"
                            aria-hidden="true"
                            title="Record"
                            style={{ fontSize: "2rem", color: "#477099" }}
                          ></i>
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action1} title="Track User" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action3} title="View Detail" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action4} title="Edit" alt="" />
                        </a>
                      </div>

                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action5} title="Send Reminder" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action6} title="Deactivate" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action7} title="Delete" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img
                            src={action8}
                            title="Recording Acess"
                            alt=""
                            style={{ width: "12px" }}
                          />
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr >
                  <td style= {{border:"1px dotted #CCCCCC"}}>
                  A-Litchfield,Peter
                  </td>
                  <td style={{border:"1px dotted #CCCCCC"}} > 	tech@betterphysiology.com</td>
                  <td style={{border:"1px dotted #CCCCCC"}}>No Course Assigned In This Trimesters </td>
                  <td style={{border:"1px dotted #CCCCCC"}}> 	ACA </td>
                  <td style={{border:"1px dotted #CCCCCC"}}>
                    <div
                      className="Main_div_Table"
                      style={{ display: "flex", gap: "3px" }}
                    >
                      <div className="first">
                        <a href="">
                          {" "}
                          <i
                            class="fa fa-folder"
                            aria-hidden="true"
                            title="Record"
                            style={{ fontSize: "2rem", color: "#477099" }}
                          ></i>
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action1} title="Track User" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action3} title="View Detail" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action4} title="Edit" alt="" />
                        </a>
                      </div>

                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action5} title="Send Reminder" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action6} title="Deactivate" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action7} title="Delete" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img
                            src={action8}
                            title="Recording Acess"
                            alt=""
                            style={{ width: "12px" }}
                          />
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr >
                  <td style= {{border:"1px dotted #CCCCCC"}}>
                  A-Litchfield,Peter
                  </td>
                  <td style={{border:"1px dotted #CCCCCC"}} > 	tech@betterphysiology.com</td>
                  <td style={{border:"1px dotted #CCCCCC"}}>No Course Assigned In This Trimesters </td>
                  <td style={{border:"1px dotted #CCCCCC"}}> 	ACA </td>
                  <td style={{border:"1px dotted #CCCCCC"}}>
                    <div
                      className="Main_div_Table"
                      style={{ display: "flex", gap: "3px" }}
                    >
                      <div className="first">
                        <a href="">
                          {" "}
                          <i
                            class="fa fa-folder"
                            aria-hidden="true"
                            title="Record"
                            style={{ fontSize: "2rem", color: "#477099" }}
                          ></i>
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action1} title="Track User" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action3} title="View Detail" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action4} title="Edit" alt="" />
                        </a>
                      </div>

                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action5} title="Send Reminder" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action6} title="Deactivate" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action7} title="Delete" alt="" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img
                            src={action8}
                            title="Recording Acess"
                            alt=""
                            style={{ width: "12px" }}
                          />
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              
              </tbody>
            </table>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default ControlPannelStudents
