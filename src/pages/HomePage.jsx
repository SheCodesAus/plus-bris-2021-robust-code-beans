import React, { useState, useEffect } from "react";
import ProfileCard from "../components/Profile/ProfileCard";


function HomePage() {
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    console.log("homepage fetch");
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

  function filter_profiles(profile) {
    return profile.status === "Approved";
  }

  const filtered = profileData.filter(filter_profiles)
  console.log("filtered list: ", filtered)

  return (
      <div>
        <div className="profile-list">
        {filtered.map((profile, key) => {
          return <ProfileCard key={key} profile={profile} />
      })}
      </div>
      </div>
    );
}

export default HomePage;
