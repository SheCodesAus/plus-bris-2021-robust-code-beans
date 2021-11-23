import React, { useState } from "react";
import { useParams } from "react-router-dom";

const AdminProfileCard = (props) => {
  const { profile } = props;
  const formattedDate = new Date(profile.date_created).toLocaleDateString();
  const [status, setStatus] = useState();
  const { id: profile_id } = useParams();


  const handleSubmit = async (e) => {
  // this is a PUT request
  // need to set profile.status to approved
  e.preventDefault();
  console.log("clicked approved")

  console.log("UPDATING STATUS");
  fetch(`${process.env.REACT_APP_API_URL}profiles/${profile_id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(status),
  })
    .then((response) => {
      console.log("profile data: ", status);
      return response.json();
    })
    .then((data) => {
      console.log("response: ", data);
      setStatus({
        ...status
        // [e.target.name]: e.target.value,
      });
    });
  };


  const handleChange = (e) => {
    const { id, value } = e.target;
    console.log("HELLO");
    setStatus({
      ...status,
      [id]: value,
    });
  };

  return (
    <div className="profile-card">
      <form>
        <h3>form start</h3>
        <button onClick={handleSubmit}>Approved</button>
        <button>Declined</button>
      </form>

      <input
              value=""
              name="status"
              type="text"
              id="status"
              onChange={handleChange}
            />

      <p>{profile.status}</p>
      <p>{profile.id}</p>
      <p>{profile.first_name}</p>
      <p>{profile.photo}</p>
      <p>{profile.gender}</p>
      <p>{profile.bio}</p>
      <p>{profile.role}</p>
      <p>{profile.company}</p>
      <p>{profile.facts}</p>
      <p>{profile.linkedin}</p>
      <p>{formattedDate}</p>
    </div>
  );
};

export default AdminProfileCard;
