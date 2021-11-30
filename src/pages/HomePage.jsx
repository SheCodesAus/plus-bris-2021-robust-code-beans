import React, { useState, useEffect } from "react";
import ProfileCard from "../components/Profile/ProfileCard";
import SearchBar from "../components/SearchBar";

function getRandomProfileToFeature(profiles) {
  const featuredProfile = profiles[Math.floor(Math.random() * profiles.length)];
  return featuredProfile;
}

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

  //  console.log("filtered list: ", filtered);
  // const filtered = [];

  const handleFilter = (event) => {
    const selectedOption = event.target.value;
    console.log(selectedOption);
    const filteredByGender = profileData.filter(
      (profile) => profile.gender === selectedOption
    );
    setProfileData(filteredByGender);
  };

  const filteredexp = profileData.filter(filter_profiles);
  console.log("filtered list: ", filteredexp);

  const handleFilterExp = (event) => {
    const selectedOption = event.target.value;
    console.log(selectedOption);
    const filteredByExperience = profileData.filter(
      (profile) => profile.experience === selectedOption
    );
    setProfileData(filteredByExperience);
  };

  return (
    <div>
      <select
        className="custom-select"
        aria-label="Filter Profiles By Gender"
        onChange={handleFilter}
      >
        <option value="All">Filter By Gender</option>
        <option value="Woman">Woman</option>
        <option value="Non-binary">Non-binary</option>
        <option value="Prefer not disclose">Prefer not to disclose</option>
      </select>
      <span className="focus"></span>
      <select
        className="custom-select"
        aria-label="Filter Profiles By Years of Experience"
        onChange={handleFilterExp}
      >
        <option value="All">Filter By Years of Experience</option>
        <option value="1-3">1-3</option>
        <option value="3-5">3-5</option>
        <option value="5-7">5-7</option>
        <option value="7-9">7-9</option>
        <option value="10+">10+</option>
      </select>

      <span className="focus"></span>
      {!filtered.length && (
        <div>
          <h1 style={{ color: "red" }}>Nope</h1>
        </div>
      )}
      {filtered.length > 0 && (
        <>
          <SearchBar placeholder="Search profiles..." data={filtered} />
          <div className="feature-container">
            <ProfileCard
              profile={getRandomProfileToFeature(filtered)}
              featured={true}
            />
          </div>
          <div className="profile-list">
            {filtered.map((profile, key) => {
              return (
                <ProfileCard key={key} profile={profile} featured={false} />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default HomePage;
