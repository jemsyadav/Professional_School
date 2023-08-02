import React from 'react'
import Top_Header from '../Components/Top_Header'
import Navbar_3 from '../Components/Navbar_3'
import Headerimage1 from '../Images/header-1-1.png'

const My_Profile = () => {
  return (
    <div>
      <Top_Header />
      <div className="background_images">
        <div className="container">
          <div className="MainDivPosition">
            <div className="Image_School">
              <img className="imgc" src={Headerimage1} alt="" />
            </div>
            <Navbar_3/>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
            <div className="col-lg-12">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Launch demo modal
</button>


<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default My_Profile
