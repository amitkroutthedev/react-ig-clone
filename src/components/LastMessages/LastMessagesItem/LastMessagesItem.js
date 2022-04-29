import React from "react";
import { Link } from "react-router-dom";
import "./LastMessagesItem.css";
function LastMessagesItem(props) {
  return (
    <Link
      to={`/direct/${props.username}`}
      className="lastMessagesItem"
      style={{ textDecoration: "none" }}
    >
      <div className="lastMessagesItemAvatar">
        <img src={props.userImage} alt="profilePhoto" />
      </div>
      <div className="lastMessagesItemName">
        <span>{props.username}</span>
        <span>{props.lastMessage}</span>
      </div>
    </Link>
  );
}

export default LastMessagesItem;
