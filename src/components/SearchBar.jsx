import React, { useState } from "react";
import ProfileCard from "./Profile/ProfileCard";

function SearchBar({ placeholder, data }) {
  const [searchedData, setSearchedData] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = data.filter((value) => {
      const allFields =
        value.first_name +
        value.company +
        value.gender +
        value.bio +
        value.role;
      return allFields.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setSearchedData([]);
    } else {
      setSearchedData(newFilter);
    }
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} onChange={handleFilter} />
        <div className="searchIcon"></div>
      </div>
      {searchedData.length !== 0 && (
        <div className="=profile-list">
          {searchedData.map((profile, key) => {
            return (
              <div className="profile-card">
                {/* <p>{profile.photo}</p> */}
                <h2>{profile.first_name}</h2>
                <p>Gender: {profile.gender}</p>
                <p>Role: {profile.role}</p>
                <p>Company: {profile.company}</p>
                <p>Experience: {profile.experience} years</p>
                <p>{profile.bio}</p>
                <p>{profile.facts}</p>
                <p>
                  <a href={profile.linkedin}>
                    <img
                      src={
                        "https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
                      }
                      alt="Linkedinlogo"
                    />
                  </a>
                </p>
                <p>{profile.id}</p>
                {/* <p>{profile.status}</p> */}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
