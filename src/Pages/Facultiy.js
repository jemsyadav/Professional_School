import React, { useState, useEffect } from 'react';
import Top_Header from "../Components/Top_Header";
import Navbar_3 from "../Components/Navbar_3";
import Headerimage1 from "../Images/header-1-1.png";
import Image1 from "../Images/Image1.png";
import image2 from "../Images/image2.jpg";
import image4 from "../Images/image4.jpg";
import image5 from "../Images/Image5.jpg";
import action1 from "../Images/Action2.png";
import action3 from "../Images/action3.png";
import action4 from "../Images/Action4.png";
import action5 from "../Images/action5.png";
import action6 from "../Images/action6.png";
import action7 from "../Images/action7.png";
import action8 from "../Images/action8.jpg";




const Facultiy = () => {
   

    

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

      <div className="container" style={{ paddingTop: "1.5rem" }}>
        <div className="row">
            <div className="col-lg-12">
                <div className="Facultiy_Heading" style={{display:"flex",justifyContent:"space-between"}}>
                    <div className="Faculity">
                        <h6>Faculity</h6>
                    </div>
                    <div className="Back">
                    <button   type="button" style={{background:"#a9db80",border:"none",borderRadius:"3px",color:"white",display:"flex",textAlign:"center"}}>Back</button>
                    </div>
                  
                </div>
                <div className="Main_Add_Change_Button " style={{display:"flex",gap:"10px",paddingTop:"10px"}}>
                    <div className="Add_Faculity">
                    <button   type="button" style={{background:"#a9db80",border:"none",borderRadius:"3px",color:"white",display:"flex",textAlign:"center"}}>Add Faculity</button>
                    </div>
                    <div className="changepassword">
                    <button   type="button" style={{background:"#a9db80",border:"none",borderRadius:"3px",color:"white",display:"flex",textAlign:"center"}}>Change Password</button>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="row" style={{paddingTop:"11px"}}>
            <div className="col-lg-2">
            <a style={{background:"#A3D2F1",marginLeft:"-2px",height:"25px",padding:"5px",boxShadow:"0px 0px 0px 0px" , fontSize:"14px",color:"black" , border:"2px solid #f0f0f0",textDecoration:"none"}} href="">Export Doc</a>
            </div>
            <div className="col-lg-3">
              asdefrtyujj
               
            </div>
            <div className="col-lg-4">
                xascdvfbg
            </div>
            <div className="col-lg-3">
                asdfghn
            </div>
        </div> */}
        <div className="row" style={{paddingTop:"14px"}}>
          <div className="col-lg-12 col-sm-12" >
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Photo</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Courses</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>

              <tbody style={{ border: "1px solid rgb(59, 110, 162)" }}>
                <tr>
                  <td>
                    <img src={Image1} alt="" width={"35px"} />
                  </td>
                  <td> Baerg, Megan</td>
                  <td>megan.baerg@gmail.com </td>
                  <td> 321-F-2022 NeuroAcrobatics</td>
                  <td>
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
                <tr>
                  <td>
                    <img src={image2} alt="" width={"35px"} />
                  </td>
                  <td>Bhat, Naras </td>
                  <td> narasbhat@gmail.com</td>
                  <td>
                    108-S-2014 Sleep Physiology & Breathing <br />
                    108-S-2016 Sleep Physiology & Breathing
                  </td>
                  <td>
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
                          <img src={action1} alt="" title="Track Order" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action3} alt="" title="View Detail" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action4} alt="" title="Edit" />
                        </a>
                      </div>

                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action5} alt="" title="Send Reminder" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action6} alt="" title="Deactivate" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action7} alt="" title="Delete" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img
                            src={action8}
                            alt=""
                            title="Recording Acess"
                            style={{ width: "12px" }}
                          />
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={Image1} alt="" width={"35px"} />
                  </td>
                  <td> Coulson, Sandra</td>
                  <td> sandra@sandracoulson.com</td>
                  <td>
                    {" "}
                    121-F-2017 Anatomy & Physiology of the Craniofacial <br />{" "}
                    Complex <br />
                    121-S-2017 Anatomy and Physiology of the Craniofacial <br />{" "}
                    Complex
                  </td>
                  <td>
                    <div
                      className="Main_div_Table"
                      style={{ display: "flex", gap: "3px" }}
                    >
                      <div className="first">
                        <a href="">
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
                          <img src={action1} alt="" title="Track Order" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action3} alt="" title="View Detail" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action4} alt="" title="Edit" />
                        </a>
                      </div>

                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action5} alt="" title="Send Reminder" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action6} alt="" title="Deactivate" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action7} alt="" title="Delete" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img
                            src={action8}
                            alt=""
                            title="Recording Acess"
                            style={{ width: "12px" }}
                          />
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tbody style={{ border: "1px solid rgb(59, 110, 162)" }}>
                <tr>
                  <td>
                    <img src={Image1} alt="" width={"35px"} />
                  </td>
                  <td> Cruz, Mark A</td>
                  <td>megan.baerg@gmail.com </td>
                  <td> 321-F-2022 NeuroAcrobatics</td>
                  <td>
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
                <tr>
                  <td>
                    <img src={image2} alt="" width={"35px"} />
                  </td>
                  <td> Fellner, Wolfgang J </td>
                  <td> narasbhat@gmail.com</td>
                  <td>
                    108-S-2014 Sleep Physiology & Breathing <br />
                    108-S-2016 Sleep Physiology & Breathing
                  </td>
                  <td>
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
                          <img src={action1} alt="" title="Track Order" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action3} alt="" title="View Detail" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action4} alt="" title="Edit" />
                        </a>
                      </div>

                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action5} alt="" title="Send Reminder" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action6} alt="" title="Deactivate" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action7} alt="" title="Delete" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img
                            src={action8}
                            alt=""
                            title="Recording Acess"
                            style={{ width: "12px" }}
                          />
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={Image1} alt="" width={"35px"} />
                  </td>
                  <td> Gersten, Alexander</td>
                  <td> sandra@sandracoulson.com</td>
                  <td>
                    {" "}
                    121-F-2017 Anatomy & Physiology of the Craniofacial <br />{" "}
                    Complex <br />
                    121-S-2017 Anatomy and Physiology of the Craniofacial <br />{" "}
                    Complex
                  </td>
                  <td>
                    <div
                      className="Main_div_Table"
                      style={{ display: "flex", gap: "3px" }}
                    >
                      <div className="first">
                        <a href="">
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
                          <img src={action1} alt="" title="Track Order" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action3} alt="" title="View Detail" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action4} alt="" title="Edit" />
                        </a>
                      </div>

                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action5} alt="" title="Send Reminder" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action6} alt="" title="Deactivate" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action7} alt="" title="Delete" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img
                            src={action8}
                            alt=""
                            title="Recording Acess"
                            style={{ width: "12px" }}
                          />
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tbody style={{ border: "1px solid rgb(59, 110, 162)" }}>
                <tr>
                  <td>
                    <img src={image4} alt="" width={"35px"} />
                  </td>
                  <td> Gilbert, Chris</td>
                  <td>megan.baerg@gmail.com </td>
                  <td> 321-F-2022 NeuroAcrobatics</td>
                  <td>
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
                <tr>
                  <td>
                    <img src={image2} alt="" width={"35px"} />
                  </td>
                  <td> Grove, Robert</td>
                  <td> narasbhat@gmail.com</td>
                  <td>
                    108-S-2014 Sleep Physiology & Breathing <br />
                    108-S-2016 Sleep Physiology & Breathing
                  </td>
                  <td>
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
                          <img src={action1} alt="" title="Track Order" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action3} alt="" title="View Detail" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action4} alt="" title="Edit" />
                        </a>
                      </div>

                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action5} alt="" title="Send Reminder" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action6} alt="" title="Deactivate" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action7} alt="" title="Delete" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img
                            src={action8}
                            alt=""
                            title="Recording Acess"
                            style={{ width: "12px" }}
                          />
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={Image1} alt="" width={"35px"} />
                  </td>
                  <td>Karamehmet, Nevsah</td>
                  <td> sandra@sandracoulson.com</td>
                  <td>
                    {" "}
                    121-F-2017 Anatomy & Physiology of the Craniofacial <br />{" "}
                    Complex <br />
                    121-S-2017 Anatomy and Physiology of the Craniofacial <br />{" "}
                    Complex
                  </td>
                  <td>
                    <div
                      className="Main_div_Table"
                      style={{ display: "flex", gap: "3px" }}
                    >
                      <div className="first">
                        <a href="">
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
                          <img src={action1} alt="" title="Track Order" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action3} alt="" title="View Detail" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action4} alt="" title="Edit" />
                        </a>
                      </div>

                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action5} alt="" title="Send Reminder" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action6} alt="" title="Deactivate" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action7} alt="" title="Delete" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img
                            src={action8}
                            alt=""
                            title="Recording Acess"
                            style={{ width: "12px" }}
                          />
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={image5} alt="" width={"35px"} />
                  </td>
                  <td>Katsamanis, Maria</td>
                  <td> sandra@sandracoulson.com</td>
                  <td>
                    {" "}
                    121-F-2017 Anatomy & Physiology of the Craniofacial <br />{" "}
                    Complex <br />
                    121-S-2017 Anatomy and Physiology of the Craniofacial <br />{" "}
                    Complex
                  </td>
                  <td>
                    <div
                      className="Main_div_Table"
                      style={{ display: "flex", gap: "3px" }}
                    >
                      <div className="first">
                        <a href="">
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
                          <img src={action1} alt="" title="Track Order" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action3} alt="" title="View Detail" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action4} alt="" title="Edit" />
                        </a>
                      </div>

                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action5} alt="" title="Send Reminder" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action6} alt="" title="Deactivate" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img src={action7} alt="" title="Delete" />
                        </a>
                      </div>
                      <div className="first">
                        <a href="">
                          {" "}
                          <img
                            src={action8}
                            alt=""
                            title="Recording Acess"
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
  );
};

export default Facultiy;
