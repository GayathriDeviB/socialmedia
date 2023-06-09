import React, { useState } from "react";
import messenger from "../../../assets/icons/messenger.jpeg";
import add from "../../../assets/icons/add.jpeg";
import search from "../../../assets/icons/searchicon.jpg";
import burger from "../../../assets/icons/hamburger.svg";
import close from "../../../assets/icons/close.svg";
import "./header.css";
import Addpost from "../addpost/addpost";
import { Link } from "react-router-dom";
const Header = () => {
  const [addpostOpen, setAddpostOpen] = useState(false);
  const [sidebarOn, setSidebarOn] = useState(false);
  const Hamburger = (
    <>
      {!sidebarOn ? (
        <img
          src={burger}
          alt="icon"
          className="hamimage"
          width="30"
          height="30"
          onClick={(e) => {
            e.preventDefault();
            setSidebarOn(true);
          }}
        />
      ) : (
        <img
          src={close}
          alt="icon"
          className="hamimage"
          width="30"
          height="30"
          onClick={(e) => {
            e.preventDefault();
            setSidebarOn(false);
          }}
        />
      )}
    </>
  );
  const Sidebar = (
    <div className="sidebar">
      <div className="sidebar_content">
        <Link to="/">Wall</Link>
        <Link to="/friends">Friends</Link>
        <Link to="/chats" id="b2">
          <img src={messenger} alt="messenger" />
        </Link>
      </div>
    </div>
  );
  return (
    <div className="header_main">
      <h3>Social Network</h3>
      <form>
        <input type="text" id="search_box" placeholder="Search" />
        <button id="b1">
          <img src={search} alt="searchicon" />
        </button>
      </form>
      <Link to="/">Wall</Link>
      <Link to="/friends">Friends</Link>
      <Link to="/chats" id="b2">
        <img src={messenger} alt="messenger" />
      </Link>
      <button id="b3" onClick={() => setAddpostOpen(true)}>
        <img src={add} alt="add" />
        Create Post
      </button>
      {Hamburger}
      {sidebarOn && Sidebar}
      <button id="b4">Logout</button>
      <Addpost trigger={addpostOpen} setTrigger={setAddpostOpen} />
    </div>
  );
};
export default Header;
