import React from "react";
import {
  Nav,
  NavLink,
  NavMenu,
  Bars,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import logo from "../../images/tech_is_me_logo.jpg";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About Us
          </NavLink>
          <NavLink to="/create-profile" activeStyle>
            Create Profile
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/admin-login">Admin Login</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
