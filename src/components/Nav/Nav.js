import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";

function LinkTab(props) {
  return (
    <Tab
      component={Link}
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
        <LinkTab component={Link} label="About Us" to="/about-us" />
        <LinkTab component={Link} label="Create Profile" to="/create-profile" />
        <LinkTab component={Link} label="Admin Login" to="/admin-login" />
      </Tabs>
    </Box>
  );
}
