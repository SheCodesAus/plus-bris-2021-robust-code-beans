import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({ profile, featured }) => {
  const formattedDate = new Date(profile.date_created).toLocaleDateString();

  return (
    <div className={featured ? 'featured-profile-card' : 'profile-card'}>
      {
        featured && (
          <h1 className='featured-profile-title'>Meet our Featured Person</h1>
        )
      }
      <p>{profile.id}</p>
      <img className="profile-photo" src={profile.photo}/>
      <p>{profile.first_name}</p>
      <p>Gender: {profile.gender}</p>
      <p>Profile: {profile.bio}</p>
      <p>Role: {profile.role}</p>
      <p>Company: {profile.company}</p>
      <p>Experience: {profile.experience}</p>
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
