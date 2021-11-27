import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateProfileForm.css";

function CreateProfileForm() {
  const [profileData, setProfileData] = useState({
    status: "Pending",
    first_name: "",
    bio: "",
    gender: "",
    role: "", 
    company: "", 
    experience: "",
    facts: "",
    linkedin: "",
    photo: "",
    date_created: new Date().toISOString(),
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log("handle change")
    const { id, value } = e.target;
    setProfileData({    
      ...profileData,
      [id]: value,
    }); 
    console.log("profileData: ", profileData)
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitData: ", profileData)
    const response = await fetch(`${process.env.REACT_APP_API_URL}profiles/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(profileData)
    }).then((response) => {
      console.log("response: ", response)
      console.log("Hi world")
      return response.json();
    })
    navigate("/confirm-submit");
  };

  // fileUploadHandler=() => {
  //   const fd = new FormData();
  //   fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
  //   axios.post(`${process.env.REACT_APP_API_URL=http:/127.0.0.1:8000/}`, fd)
  // }

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
            <select id="gender" name="gender" onChange={handleChange}>
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
            <select id="experience" name="experience" onChange={handleChange}>
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
              placeholder="List one or more fun facts about yourself"
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
