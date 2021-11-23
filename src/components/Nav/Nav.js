import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        console.log("clicked");
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Tech Is Me Navigation Options"
      >
        console.log()
        {/* <LinkTab label="Home" href="/" /> */}
        <Link to="/about-us">
          <LinkTab label="About Us" href="/about-us" />
        </Link>
        <Link to="/create-profile">
          <LinkTab label="Create Profile" href="/create-profile" />
        </Link>
        <Link to="/admin-login">
          <LinkTab label="Admin Login" href="/admin-login" />
        </Link>
      </Tabs>
    </Box>
  );
}

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
