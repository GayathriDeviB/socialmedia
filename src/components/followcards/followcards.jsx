import React, { useState } from "react";
import "./followcards.css";
import tickicon from "../../assets/icons/tickicon.png";
import blueline from "../../assets/images/blue line.png";
const Follow = [
  {
    id: 1,
    icon: tickicon,
    name: "Jessica",
    followers: "2M Followers",
    designation: "Scientist",
    message: "Message",
    followed: false,
    // follow: "Follow",
    // unfollow: "Unfollow",
  },
  {
    id: 2,
    icon: tickicon,
    name: "Jack",
    followers: "2M Followers",
    designation: "Software Developer",
    message: "Message",
    followed: false,
    // follow: "Follow",
    // unfollow: "Unfollow",
  },
  {
    id: 3,
    icon: tickicon,
    name: "Thomas",
    followers: "2M Followers",
    designation: "Web Designer",
    message: "Message",
    followed: false,
    // follow: "Follow",
    // unfollow: "Unfollow",
  },
  {
    id: 4,
    icon: tickicon,
    name: "Atkinson",
    followers: "2M Followers",
    designation: "Artist",
    message: "Message",
    followed: false,
    // follow: "Follow",
    // unfollow: "Unfollow",
  },
];
const CardsFollow = () => {
  // const [follow, setFollow] = useState(false);
  const [users, setUsers] = useState(Follow);
  const handleFollow = (userId) => {
    setUsers((prevUser) =>
      prevUser.map((user) =>
        user.id === userId ? { ...user, followed: !user.followed } : user
      )
    );
  };
  const renderfollow = users.map((user) => {
    return (
      <div className="cardsfollowmain">
        <div className="follow_user"></div>
        <div className="cards_content">
          <div className="profile_follow">
            <div className="name">
              <img src={tickicon} alt="image" />
              <h3>{user.name}</h3>
            </div>
            <h5>{user.followers}</h5>
          </div>
          <h4>{user.designation}</h4>
          <div className="butn">
            <button id="butn1">{user.message}</button>
            <button onClick={() => handleFollow(user.id)}>
              {user.followed ? "Unfollow" : "Follow"}
            </button>
          </div>
        </div>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="followmain">
        <div className="follow">
          <img src={blueline} alt="image" />
          <h1>FOLLOW</h1>
        </div>
        <div className="followlist">{renderfollow}</div>
      </div>
    </React.Fragment>
  );
};
export default CardsFollow;
