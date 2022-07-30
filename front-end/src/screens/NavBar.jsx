import React from 'react'

import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavElements'

export default function NavBar() {


  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Logo</h1>

        </NavLink >
        <Bars />
        <NavMenu>
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
        <NavBtnLink to="/Signup"> Sign up</NavBtnLink>
     </Nav>
    
    </>
  )
}