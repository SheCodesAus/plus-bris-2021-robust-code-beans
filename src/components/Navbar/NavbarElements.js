// import * as React from "react";
// import Box from "@mui/material/Box";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import { Link } from "react-router-dom";

// function LinkTab(props) {
//   return (
//     <Tab
//       component="a"
//       onClick={(event) => {
//         console.log("clicked");
//         event.preventDefault();
//       }}
//       {...props}
//     />
//   );
// }

// export default function NavTabs() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: "100%" }}>
//       <Tabs
//         value={value}
//         onChange={handleChange}
//         aria-label="Tech Is Me Navigation Options"
//       >
//         {/* <LinkTab label="Home" href="/" /> */}
//         <Link to="/about-us">
//           <LinkTab label="About Us" href="/about-us" />
//         </Link>
//         <Link to="/create-profile">
//           <LinkTab label="Create Profile" href="/create-profile" />
//         </Link>
//         <Link to="/admin-login">
//           <LinkTab label="Admin Login" href="/admin-login" />
//         </Link>
//       </Tabs>
//     </Box>
//   );
// }

// import React from "react";
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
// import Box from "@material-ui/core/Box";
// import AppBar from "@material-ui/core/AppBar";

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return <div {...other}>{value === index && <Box p={3}>{children}</Box>}</div>;
// }

// function LinkTab(props) {
//   return (
//     <Tab
//       component="a"
//       onClick={(event) => {
//         event.preventDefault();
//       }}
//       {...props}
//     />
//   );
// }

// export default function App() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div>
//       <AppBar position="static">
//         <Tabs variant="fullWidth" value={value} onChange={handleChange}>
//           <LinkTab label="About Us" href="/about-us" />
//           <LinkTab label="Create Profile" href="/create-profile" />
//           <LinkTab label="Admin Login" href="/admin-login" />
//         </Tabs>
//       </AppBar>
//       <TabPanel value={value} index={0}>
//         About Us
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         Create Profile
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         Admin Login
//       </TabPanel>
//     </div>
//   );
// }

import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding:0.5 rem calc((100vw - 1000px) /2)
  z-index: 10;
  `;

export const NavLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 20px;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #fcc467;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #000;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #fcc467;
  padding: 10px 22px;
  color: @000;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010
  }
`;
