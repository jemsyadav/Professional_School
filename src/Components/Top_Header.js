import React from 'react'
import '../Styles/Top_Header.css'

const Top_Header = () => {
  return (
    <div>
      <div class="topnav" id="myTopnav">
      <div className="container">
  <a href="/overview" class="">OVERVIEW</a>
  <a href="/contact">CONTACT</a>
  {/* <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a> */}
  </div>
</div>
    </div>
  )
}

export default Top_Header
