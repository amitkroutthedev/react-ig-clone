import React from "react";
import "./AppLinks.css";
const AppLinks = () => {
  return (
    <div className="appLinks">
      <span>Get the app.</span>
      <div>
        <img
          src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
          alt="Ios Instagram App"
        />
        <img
          src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
          alt="Android Instagram App"
        />
      </div>
    </div>
  );
};

export default AppLinks;
