import React from "react";
import { More } from "../icons";
import "./MyMessage.css";
function MyMessage(props) {
  return (
    <div className="myMessageItem">
      <More />
      <div className="myMessage">
        <span>{props.message}</span>
      </div>
    </div>
  );
}

export default MyMessage;
