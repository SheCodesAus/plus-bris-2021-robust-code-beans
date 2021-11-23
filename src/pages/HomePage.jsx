import React, { useState, useEffect } from "react";
import ProfileCard from "../components/Profile/ProfileCard";
// import { allProfiles } from "../data";

function HomePage() {
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
        <div className="profile-list">
        {profileData.map((profile, key) => {
          return <ProfileCard key={key} profile={profile} />
      })}
      </div>
      </div>
    );
}

export default HomePage;
