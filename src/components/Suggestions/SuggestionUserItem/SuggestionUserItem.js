import React from "react";
import "./SuggestionUserItem.css";
function SuggestionUserItem(props) {
  return (
    <div className="suggestionUsersItem">
      <div className="suggestionUsersItemAvatar">
        <img src={props.userImage} alt="userSwitchAvatar" />
      </div>
      <div className="suggestionUsersItemName">
        <span>{props.username}</span>
        <span>{props.displayName}</span>
      </div>
      <button>Follow</button>
    </div>
  );
}

export default SuggestionUserItem;
