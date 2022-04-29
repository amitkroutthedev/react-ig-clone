import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import HomeBox from "../../components/HomeBox/HomeBox";
import LastMessages from "../../components/LastMessages/LastMessages";
import Chat from "../../components/Chat/Chat";
import NewMessage from "../../components/NewMessage/NewMessage";
import "./Direct.css";
function Direct() {
  let { id } = useParams();
  let messages = useSelector((state) => state.messages);
  let users = useSelector((state) => state.users);
  console.log(messages);
  return (
    <HomeBox>
      <div className="direct">
        <LastMessages key={id} messages={messages} users={users} />
        {id ? <Chat messages={messages} users={users} /> : <NewMessage />}
      </div>
    </HomeBox>
  );
}

export default Direct;
