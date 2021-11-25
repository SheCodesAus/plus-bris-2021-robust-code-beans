import React, { useState } from "react";

const AdminProfileCard = (props) => {
  const { profile } = props;
  const formattedDate = new Date(profile.date_created).toLocaleDateString();
  const [status, setStatus] = useState();

  const processProfile = async (profile, result) => {
    const token = window.localStorage.getItem("token");
    console.log("token", token);
  console.log("clicked approved", profile.id);

  if (result === "Approved") {
    profile.status = "Approved";
  }
  if (result === "Declined") {
    profile.status = "Declined";
  }
    console.log("UPDATING STATUS");

  fetch(`${process.env.REACT_APP_API_URL}profiles/${profile.id}/`, {
    method: "PUT",
    headers: {
      Authorization: `Token ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profile),
  }).then((response) => {
      console.log("profile data: ", status);
      return response.json();
    })
    .then((data) => {
      console.log("response: ", data);
    });
  };

const declineProfile = () => {
console.log("decline")
}

  return (
    <div className="profile-card">
      <form>
        <button onClick={() => processProfile(profile, "Approved")}>Approved</button>
        <button onClick={() => processProfile(profile, "Declined")}>Declined</button>
      </form>
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
