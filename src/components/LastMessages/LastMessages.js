import React from "react";
import { useParams } from "react-router-dom";
import { Arrow } from "../icons";
import BottomNavigation from "../BottomNavigation/BottomNavigation";
import LastMessagesItem from "./LastMessagesItem/LastMessagesItem";
import "./LastMessages.css";
function LastMessages(props) {
  console.log(props);
  let { id } = useParams();
  return (
    <div className={`lastMessagesCol ${props.id && "hide"}`}>
      <div className="lastMessagesHeader">
        <span>amit</span>
        <Arrow />
      </div>
      <div className="lastMessages">
        {props.messages.map((message) => {
          const user = props.users.find((user) => user.username === message.to);
          console.log(user);
          if (user) {
            return (
              <LastMessagesItem
                key={props.id}
                username={user.username}
                userImage={user.userimage}
                lastMessage={message.messages.slice(-1)[0].message}
              />
            );
          }
        })}
        <BottomNavigation />
      </div>
    </div>
  );
}

export default LastMessages;
