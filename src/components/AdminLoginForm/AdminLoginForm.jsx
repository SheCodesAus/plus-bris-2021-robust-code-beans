import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";

function AdminLogin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  const postData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}api-token-auth/`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        }
      );
      return response.json();
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      postData().then((response) => {
        console.log(response);
        if (response.non_field_errors?.length > 0) {
          alert("You require administrator access to this area");
        } else {
          window.localStorage.setItem("token", response.token);
          console.log("token:", response.token);
          navigate("/admin");
        }
      });
    }
  };

  return (
    <div className="adminform">
      <form className="formcontent">
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
          <button class="button" type="submit" onClick={handleSubmit}>
            Log in
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminLogin;
