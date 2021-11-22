import React, { useState, useHistory } from "react";
import "./CreateProfileForm.css";

function CreateProfileForm() {
  const [profileData, setProfileData] = useState({
    date_created: new Date().toISOString(),
    // is_open: true,
    status: "Pending"
  });

  // const history = useHistory();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProfileData((prevProfileData) => ({
      ...prevProfileData,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`${process.env.REACT_APP_API_URL}projects/`, {
      method: "post",
      headers: {
        Authorization: `Token ${window.localStorage.getItem("token")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(profileData)
    });
    // history.push("/");
  };

  return (
    <div>
      <div class="form">
        <form class="formcontent">
          <div>
            <label for="first_name">First Name: </label>
            <input
              value={profileData.first_name}
              type="text"
              id="first_name"
              placeholder="Enter your first name"
              onChange={handleChange}
            />
          </div>
          <div>
            <label for="gender">Gender: </label>
            <select id="gender_choices" name="gender_choices">
              <option value="Woman">Woman</option>
              <option value="Non-binary">Non Binary</option>
              <option value="not_set">Prefer not to disclose</option>
            </select>
          </div>
          <div>
            <label for="role">Role: </label>
            <input
              value={profileData.role}
              type="text"
              id="role"
              placeholder="Enter your current role"
              onChange={handleChange}
            />
          </div>
          <div>
            <label for="company">Company: </label>
            <input
              value={profileData.company}
              type="text"
              id="company"
              placeholder="Enter your current company"
              onChange={handleChange}
            />
          </div>
          <div>
            <label for="experience">Experience: </label>
            <select id="experience_choices" name="experience_choices">
              <option value=""> </option>
              <option value="not_set">Prefer not to disclose</option>
              <option value="1-3">1-3 years</option>
              <option value="3-5">3-5 years</option>
              <option value="5-7">5-7 years</option>
              <option value="7-9">7-9 years</option>
              <option value="10+">10+ years</option>
            </select>
          </div>
          <div>
            <label for="bio">Bio: </label>
            <input
              value={profileData.bio}
              type="text"
              id="bio"
              placeholder="Enter a short biography"
              onChange={handleChange}
            />
          </div>
          <div>
            <label for="facts">Fun Facts: </label>
            <input
              value={profileData.facts}
              type="text"
              id="facts"
              placeholder="List one or more fun fact about yourself"
              onChange={handleChange}
            />
          </div>
          <div>
            <label for="linkedin">Linkedin: </label>
            <input
              value={profileData.linkedin}
              type="text"
              id="linkedin"
              placeholder="Enter your Linkedin profile link"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Profile photo: </label>
            <input
              value={profileData.photo}
              type="text"
              id="photo"
              placeholder="Attach your profile picture here"
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateProfileForm;