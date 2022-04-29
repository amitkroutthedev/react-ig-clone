import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Info } from "../icons";
import FromMessage from "../FromMessage/FromMessage";
import MyMessage from "../MyMessage/MyMessage";
import ChatInputs from "../ChatInputs/ChatInputs";
import "./Chat.css";
function Chat(props) {
  let { id } = useParams();
  const [messagesData, setMessagesData] = useState();
  const [user, setUser] = useState();
  useEffect(() => {
    var element = document.querySelector(".chatMessages");
    element.scrollTop = element.scrollHeight;
  }, []);

  useEffect(() => {
    setMessagesData(props.messages.find((message) => message.to === id));
    setUser(props.users.find((user) => user.username === id));
  }, [id]);
  return (
    <div className="chat">
      <div className="chatHeader">
        <div className="chatHeaderAvatar">
          <img src={user && user.userimage} alt="chatHeaderAvatar" />
        </div>
        <div className="chatHeaderUsername">
          <span>{user && user.username}</span>
        </div>
        <Info />
      </div>
      <div className="chatMessages">
        {messagesData &&
          messagesData.messages.map((message) => {
            if (message.from === user.username) {
              return (
                <FromMessage
                  userImage={user.userimage}
                  message={message.message}
                />
              );
            } else {
              return <MyMessage message={message.message} />;
            }
          })}
      </div>
      <ChatInputs to={user && user.username} />
    </div>
  );
}

export default Chat;
