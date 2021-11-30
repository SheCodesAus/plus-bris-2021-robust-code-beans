import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import AdminLogin from "./components/AdminLoginForm/AdminLoginForm";
import CreateProfileForm from "./components/CreateProfileForm/CreateProfileForm";
import UploadField from "./components/UploadField";
import "./App.css";
import Navbar from "./components/Nav/Navbar";
import ConfirmSubmit from "./components/ConfirmSubmit/ConfirmSubmit";
import About from "./components/About/About";

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
      <Router>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route
            exact
            path="/"
            render={() => {
              return <Navigate to="/home" />;
            }}
          />
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<About />} />
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
