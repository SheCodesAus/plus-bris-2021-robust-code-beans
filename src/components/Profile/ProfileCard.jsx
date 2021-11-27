import React from "react";
import "./ProfileCard.css";

const ProfileCard = (props) => {
  const { profile } = props;

  const formattedDate = new Date(profile.date_created).toLocaleDateString();

  return (
    <div className="profile-card">
      <p>{profile.id}</p>
      <p>{profile.photo}</p>
      <p>{profile.first_name}</p>
      <p>Gender: {profile.gender}</p>
      <p>Profile: {profile.bio}</p>
      <p>Role: {profile.role}</p>
      <p>Company: {profile.company}</p>
      <p>Facts! {profile.facts}</p>
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
      {/* <p>{profile.status}</p> */}
      <p>Posted: {formattedDate}</p>
    </div>
  );
};

export default ProfileCard;
