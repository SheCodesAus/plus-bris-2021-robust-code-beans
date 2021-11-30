import React, { useState, useEffect } from "react";
import ProfileCard from "../components/Profile/ProfileCard";
import SearchBar from "../components/SearchBar";

function getRandomProfileToFeature(profiles) {
  const featuredProfile = profiles[Math.floor(Math.random() * profiles.length)];
  return featuredProfile;
}

function HomePage() {
  const [profileData, setProfileData] = useState({
    initialData: [],
    filteredData: []
  });

  function filterApproved(data) {
    return data.status === "Approved";
  }

  useEffect(() => {
    // console.log("homepage fetch");
    fetch(`${process.env.REACT_APP_API_URL}profiles/`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProfileData({
          initialData: data.filter(filterApproved),
          filteredData: data.filter(filterApproved)
        });
      })
      .catch((e) => {
        console.log("OH NOOO: ", e);
      });
  }, []);

  const handleFilterGender = (event) => {
    const selectedOption = event.target.value;
    console.log(selectedOption);
    const profileDataByGender = profileData.initialData.filter(
      (profile) => profile.gender === selectedOption
    );
    setProfileData({
      ...profileData,
      filteredData: profileDataByGender
    });
  };

  const handleFilterExp = (event) => {
    const selectedOption = event.target.value;
    console.log(selectedOption);
    const profileDataByExperience = profileData.initialData.filter(
      (profile) => profile.experience === selectedOption
    );
    setProfileData({
      ...profileData,
      filteredData: profileDataByExperience
    });
  };

  return (
    <div>
      <div class="drop-down">
      <select
        className="custom-select"
        aria-label="Filter Profiles By Gender"
        onChange={handleFilterGender}
      >
        <option value="All">Filter By Gender</option>
        <option value="Woman">Woman</option>
        <option value="Non-binary">Non-binary</option>
        <option value="Prefer not disclose">Prefer not to disclose</option>
      </select>
      </div>
      <span className="focus"></span>
      <div class="drop-down">
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
      </div>
      <span className="focus"></span>

      {profileData && profileData.filteredData.length > 0 ? (
      <>
        <div class="search-field">
        <SearchBar placeholder="Search profiles..." data={profileData.initialData} />
        </div>
        <ProfileCard
          profile={getRandomProfileToFeature(profileData.filteredData)}
          featured={true}
        />
        <h3>APPROVED PROFILES</h3>
        <div className="profile-list">
          {profileData.filteredData.map((profile, key) => {
            return (
              <ProfileCard key={key} profile={profile} featured={false} />
            );
          })}
        </div>
      </>
      ) : (
        <div>
          <h1 style={{ color: "red" }}>
            There are no profiles that fit your criteria. Please try again.
          </h1>
        </div>
      )}
    </div>
  );
}

export default HomePage;
