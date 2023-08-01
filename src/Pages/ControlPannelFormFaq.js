import React from 'react'
import Top_Header from '../Components/Top_Header'
import Navbar_3 from '../Components/Navbar_3'
import Headerimage1 from '../Images/header-1-1.png'
import deletelogo from '../Images/delete.png'
import FormFaq from '../Components/FormFaq'
import { keyboard } from '@testing-library/user-event/dist/keyboard'

const ControlPannelFormFaq = () => {
  const form = [
    {
      id: 1,
       Name:"Q1:- Kindle Library",
       Date:"08-Jul-2018",
    },
   { 
    id: 2,
    Name:"Q2:- Educational ",
    Date:"16-Oct-2015",
  },
  {
    id: 3,
       Name:"Q3:- Capnography Certificate Kindle Library",
        Date:"14-Oct-2015",
},

{
  id: 4,
Name:"Q4:- Required materials  Capnography ",
Date:"14-Oct-2015",
},
{
id: 5,
Name:"Q5:- Required materials",
Date: "24-Oct-2015",
},
{
  id: 3,
     Name:"Q3:- Capnography Certificate Kindle Library",
      Date:"14-Oct-2015",
},


  

   
    
  ];

  console.log(form);
 
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


    {/* {form?.map((e)=>{
      return(
        <FormFaq data={e}/>
      )
    })} */}

  {form?.map((e)=>{
    return(
      <FormFaq data={e} />
    )
  })}



   
    
    


    
    </div>
  )
}

export default ControlPannelFormFaq
