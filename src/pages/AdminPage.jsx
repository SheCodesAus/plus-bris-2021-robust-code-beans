import React, { useState, useEffect } from "react";
import SingleProfileCard from "../components/SingleProfile/SingleProfileCard";
import ProfileCard from "../components/Profile/ProfileCard";

function AdminPage() {
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
  <div>
    <h1>ADMIN PAGE</h1>
    <div className="profile-list">
      {profileData.filter(profile => profile.profileStatus === "Pending")
      .map((profile, key) => {
      return <ProfileCard key={key} profile={profile} />
  })}
  </div>
  </div>
);
}

export default AdminPage;