import React from "react";
import "./ProfileCard.css";

const ProfileCard = (props) => {
  const { profile } = props;

  const formattedDate = new Date(profile.date_created).toLocaleDateString();

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

export default ProfileCard;
