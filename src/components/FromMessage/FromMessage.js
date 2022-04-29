import React from "react";
import { More } from "../icons";
import "./FromMessage.css";
function FromMessage(props) {
  return (
    <div className="fromMessageItem">
      <img src={props.userImage} alt="chatHeaderAvatar" />
      <div className="fromMessage">
        <span>{props.message}</span>
      </div>
      <More />
    </div>
  );
}

export default FromMessage;
