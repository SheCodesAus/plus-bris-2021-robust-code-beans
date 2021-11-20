import React from "react";
import "./AdminLoginForm.css";

function AdminLogin() {
  return (
    <div class="form">
      <form class="formcontent">
        <div></div>
        <button
          type="submit"
          onClick={() => {
            console.log("Submitting admin login form");
          }}
        >
          Log in
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
