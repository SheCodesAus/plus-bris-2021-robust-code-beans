import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from ".pages/HomePage"
// import Nav from "./components/Nav/Nav";
import CreateProfileForm from "./components/CreateProfileForm/CreateProfileForm"
import AdminLogin from "./components/AdminLoginForm/AdminLoginForm"

function App() {
  return (
    <Router>
      {/* TODO: add nav */}
      <Routes>
        {/* TODO: <Route exact path="/" element={<HomePage />}></Route> */}
        {/* TODO: <Route exact path="/profile"element={<ProfilePage} /></Route> */}
        <Route exact path="/admin-login" element={<AdminLogin/>} />
        <Route exact path="/create-profile" element={<CreateProfileForm/>} />
      </Routes>
    </Router>
  );
}

export default App;
