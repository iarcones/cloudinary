import React from "react";
import "./style.css";
import placeholder from "../images/profileIcon.png";

function UserInfo(props) {
  const photo = props.profilePhotoURL ? props.profilePhotoURL : placeholder;
  const url = props.profilePhotoURL ? props.profilePhotoURL : "";

  return (
    <div>
      <h1>Adding pictures using Cloudinary</h1>

      <button onClick={props.showWidget}>Upload picture</button>
      <br />

      <img className="profileImg" src={photo} />

      <br />
      <p>This is the URL: <span><a href={url}>{url}</a></span></p>
      
    </div>
  );
}

export default UserInfo;
