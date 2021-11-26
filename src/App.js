import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import AdminLogin from "./components/AdminLoginForm/AdminLoginForm";
import CreateProfileForm from "./components/CreateProfileForm/CreateProfileForm";
import UploadField from "./components/UploadField";
import "./App.css";
import Nav from "./components/Nav/Nav";
import logo from "./images/tech_is_me_logo.jpg";
import ConfirmSubmit from "./components/ConfirmSubmit/ConfirmSubmit";

function App() {
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    console.log("App.js fetch");
    fetch(`${process.env.REACT_APP_API_URL}profiles/`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProfileData(data);
        console.log("data: ", data);
      })
      .catch((e) => {
        console.log("OH NOOO: ", e);
      });
  }, []);

  return (
    <div className="App">
      <img src={logo} alt text="Tech is Me Logo" />
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/admin" element={<AdminPage />} />
          <Route exact path="/admin-login" element={<AdminLogin />} />
          <Route exact path="/create-profile" element={<CreateProfileForm />} />
          <Route exact path="/upload-photo" element={<UploadField />} />
          <Route exact path="/confirm-submit" element={<ConfirmSubmit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
