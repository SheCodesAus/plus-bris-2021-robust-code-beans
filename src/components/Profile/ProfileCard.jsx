import React from "react";
import { Link } from "react-router-dom";
import "./ProfileCard.css";

const ProfileCard = (props) => {
  const { profile } = props;

  const formattedDate = new Date(profile.date_created).toLocaleDateString();

  return (
    <div className="profile-card">
      <p>{profile.id}</p>
      {/* <Link to={`/projects/${profile.id}`}> */}
      <p>{profile.first_name}</p>
      {/* </Link> */}
      <p>{profile.photo}</p>
      <p>{profile.gender}</p>
      <p>{profile.bio}</p>
      <p>{profile.role}</p>
      <p>{profile.company}</p>
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
      <p>{profile.status}</p>
      <p>{formattedDate}</p>
    </div>
  );
};

export default ProfileCard;
