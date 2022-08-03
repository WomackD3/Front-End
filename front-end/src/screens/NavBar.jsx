import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn} from './NavElements'

export default function NavBar() {
  

  return (
    <>
      <Nav>
        <NavLink to="/" style={{'paddingLeft': '0'}}>
          <img src="/img/project_logo.png" alt="project_logo" style={{width: "90px"}}></img>
          {/*<h1>Logo</h1>*/}

        </NavLink >
        <Bars />
        <NavMenu>
          <NavLink to="/Home" activestyle="true">
            Home
          </NavLink>
          <NavLink to="/About" activestyle="true">
            About
          </NavLink>
          <NavLink to="/Contact Us" activestyle="true">
          Contact Us
          </NavLink>
          <NavLink to="/Services" activestyle="true">
          Services
          </NavLink>
          <NavBtn to="/Signup"></NavBtn>
        </NavMenu>
     </Nav>
    
    </>
  )
}
