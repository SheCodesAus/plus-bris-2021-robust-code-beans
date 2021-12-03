import React, { useState, useHistory } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../App.css";

function CreateProfileForm() {
  const [selectedFile, setSelectedFile] = useState(null);
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
    date_created: new Date().toISOString()
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log("handle change");
    const { id, value } = e.target;
    setProfileData({
      ...profileData,
      [id]: value
    });
    console.log("profileData: ", profileData);
  };

  const fileSelectedHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputs = Object.values(profileData);
    console.log(inputs);
    const checkemptyinputs = inputs.includes("");
    console.log(checkemptyinputs);

    if (checkemptyinputs) {
      alert("Please complete all fields");
      return;
    } else {
      // Step 1 - UPLOAD PHOTO TO CLOUNDINARY
      const fd = new FormData();
      fd.append("api_key", process.env.REACT_APP_CLOUDINARY_API_KEY);
      fd.append("file", selectedFile);
      fd.append(
        "upload_preset",
        process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
      );
      const upload_response = await axios.post(
        `https://api.cloudinary.com/v1_1/tech-is-me/image/upload`,
        fd
      );

      // GET THE PHOTO URL FROM CLOUNDINARY AFTER UPLOAD
      const photoURL = upload_response.data.url;

      // SENDING INFORMATION TO DRF WITH THE URL
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/profiles/`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ ...profileData, photo: photoURL })
        }
      ).then((response) => {
        console.log("response: ", response);
        console.log("Hi world");
        return response.json();
      });
      navigate("/confirm-submit");
    }
    return;
  };

  return (
    <div>
      <div class="form">
        <form class="formcontent">
          <div>
            <label for="first_name">First Name: </label>
            <input
              className="formlines"
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
              <option value=""> </option>
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
              className="big-input"
              value={profileData.bio}
              type="text"
              id="bio"
              placeholder="Enter a short bio (300 characters max)"
              onChange={handleChange}
            />
          </div>
          <div>
            <label for="facts">Fun Facts: </label>
            <input
            className="big-input"
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
            <label> Upload Photo: </label>
            <input 
            className="upload"
            type="file" onChange={fileSelectedHandler}/>
          </div>
          <div>
            <button class="button" type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateProfileForm;
