import React from "react";
// import "./ProfileCard.css";

const SingleProfileCard = (props) => {
  const { profile } = props;
  const formattedDate = new Date(profile.date_created).toLocaleDateString();

  // const handleChange = (e) => {
  //   const { id, value } = e.target;
  //   console.log("updating profile");
  //   setProfileData({
  //     ...profileData,
  //     [id]: value,
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch(
  //       `${process.env.REACT_APP_API_URL}projects/${profile_id}/`,
  //       {
  //         method: "PUT",
  //         headers: {
  //           Authorization: `Token ${localStorage.getItem("token")}`,
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(profileData),
  //       }
  //     );

  return (
    <div className="profile-card">
      <p>{profile.id}</p>
      <p>{profile.first_name}</p>
      <p>{profile.photo}</p>
      <p>{profile.gender}</p>
      <p>{profile.bio}</p>
      <p>{profile.role}</p>
      <p>{profile.company}</p>
      <p>{profile.facts}</p>
      <p>{profile.linkedin}</p>
      <p>{profile.status}</p>
      <p>{formattedDate}</p>
    </div>
  );
};

export default SingleProfileCard;
