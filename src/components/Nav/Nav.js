import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
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
        {/* <LinkTab label="Home" href="/" /> */}
        <LinkTab label="About Us" href="/AboutUs" />
        <LinkTab label="Create Profile" href="/CreateProfile" />
        <LinkTab label="Admin Login" href="/AdminLogin" />
      </Tabs>
    </Box>
  );
}
