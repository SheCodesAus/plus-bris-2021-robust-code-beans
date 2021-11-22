import React, { useState } from "react";
import "./AdminLoginForm.css";

function AdminLogin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      fetch(`${process.env.REACT_APP_API_URL}api-token-auth/`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }).then((response) => {
        console.log(response.json());
      });
    }
  };

  return (
    <div class="form">
      <form class="formcontent">
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            type="submit"
            onClick={() => {
              console.log("Submitting admin login form");
            }}
            // onClick{handleSubmit}
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminLogin;
