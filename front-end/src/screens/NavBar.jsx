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
          <NavLink to="/About" activeStyle>
            About
          </NavLink>
          <NavLink to="/Contact Us" activeStyle>
          Contact Us
          </NavLink>
          <NavLink to="/Services" activeStyle>
          Services
          </NavLink>
          <NavBtn to="/Signup"></NavBtn>
        </NavMenu>
        <NavBtnLink to="/Signup"> Sign up</NavBtnLink>
     </Nav>
    
    </>
  )
}
