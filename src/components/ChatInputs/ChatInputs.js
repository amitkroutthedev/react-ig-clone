import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMessageAction } from "../../redux/actions/messagesAction";
import { Heart, Photo, Smile } from "../icons";
import "./ChatInputs.css";
function ChatInputs({ to }) {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const sendMessage = (e) => {
    if (e.key === "Enter") {
      if (to !== "" && message !== "") {
        dispatch(addMessageAction(message, "mucahitsahin", to));
        setMessage("");
      }
    }
  };
  return (
    <div className="chatInputRow">
      <div className="chatInput">
        <Smile />
        <input
          type="text"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => sendMessage(e)}
        />
        <Photo />
        <Heart />
      </div>
    </div>
  );
}

export default ChatInputs;
