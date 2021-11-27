import React, { useState, useEffect } from "react";
import ProfileCard from "../components/Profile/ProfileCard";
import SearchBar from "../components/SearchBar";

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
  const filtered = profileData.filter(filter_profiles);
  console.log("filtered list: ", filtered);

  return (
    <div>
      <SearchBar placeholder="Search profiles..." data={filtered} />
      {/* <div>
        {feature_profile}
      </div> */}
      {filtered.map((profile, key) => {
        if(profile.id === 1){
          return (
            <div className="Feature-Profile"> 
              <ProfileCard key={key + 100} profile={profile} />
            </div>
          )
        } else {
          return '';
        }
        })}

      <h3>HOMEPAGE SHOWING APPROVED PROFILES ONLY</h3>

      <div className="profile-list">
        {filtered.map((profile, key) => {
          return <ProfileCard key={key} profile={profile} />;
        })}
      </div>
 
    </div>
  );
}

export default HomePage;
