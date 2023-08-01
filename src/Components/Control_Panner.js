import React, { useState } from 'react'
import control1 from '../Images/ControlPanner1.png'
import control2 from '../Images/ControlPanner1.png'
import control3 from '../Images/ControlPanner1.png'
import control4 from '../Images/ControlPanner1.png'
import control5 from '../Images/ControlPanner1.png'
import control6 from '../Images/ControlPanner1.png'
import control7 from '../Images/ControlPanner1.png'
import control8 from '../Images/ControlPanner1.png'
import control9 from '../Images/ControlPanner1.png'
import control10 from '../Images/ControlPanner1.png'


const Control_Panner = () => {
    const [control , setControl] = useState()

    const pannels = () =>{
        setControl()
    }
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-lg-12">
            <div onClick={control} className=" Control_Pannels">
                frgtbfdsasdfvgvfdsaxc
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Control_Panner
