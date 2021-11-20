import React, { useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    console.log("Hi");
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
      <div>
        <h1>Tech is Me.</h1>
        <Router>
          <Switch>
            <Route path="/projects/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
