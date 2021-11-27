import React, { useState, useEffect } from "react";
import AdminProfileCard from "../components/AdminProfile/AdminProfileCard";


function AdminPage() {
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    // console.log("admin page fetch"); 
    fetch(`${process.env.REACT_APP_API_URL}profiles/`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProfileData(data);
        // console.log("data: ", data);
      })
      .catch((e) => {
        console.log("OH NOOO: ", e);
      });
  }, []);

  function filter_profiles(profile) {
    return profile.status === "Pending";
  }

  const filtered = profileData.filter(filter_profiles)
  // console.log("filtered list: ", filtered)
 

return (
  <div>
    <h3>ADMIN PAGE SHOWING PENDING PROFILES ONLY</h3>
        <div className="profile-list">
        {filtered.map((profile, key) => {
          return <AdminProfileCard key={key} profile={profile} />
      })}
      </div>
      </div>
    );
}

export default AdminPage;