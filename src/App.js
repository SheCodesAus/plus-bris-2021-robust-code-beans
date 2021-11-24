import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import AdminLogin from "./components/AdminLoginForm/AdminLoginForm";
import CreateProfileForm from "./components/CreateProfileForm/CreateProfileForm";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    console.log("App.js fetch");
    fetch(`${process.env.REACT_APP_API_URL}projects/`)
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
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/admin" element={<AdminPage />} />
          <Route exact path="/admin-login" element={<AdminLogin />} />
          <Route exact path="/create-profile" element={<CreateProfileForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
