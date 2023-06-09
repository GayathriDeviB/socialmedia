import React from "react";
import "./chats.css";
import RecentChat from "../components/chats/recentchat/recentchat";
import OpenChat from "../components/chats/openchat/openchat";

const Chats = () => {
  return (
    <div className="chats_main">
      <RecentChat />
      <OpenChat />
    </div>
  );
};
export default Chats;
