import React, { useState } from "react";
import tickicon from "../../assets/icons/tickicon.png";
import blueline from "../../assets/images/blue line.png";
import "./card.css";
const Card = () => {
  // const [activeButton, setActiveButton] = useState(false);

  const Profile = [
    {
      id: 1,
      icon: tickicon,
      name: "Dora",
      designation: "Travelling Agent",
      description:
        "Nobody blocks your success except yourself. Accept what you are. Trust the progress and time that one day will be your achievement and satisfactory one.",
      followers: "2M Followers",
      posts: "40+ posts",
      message: "Message",
      followed: false,
      // follow: "Follow",
      // unfollow: "Unfollow",
    },
    {
      id: 2,
      icon: tickicon,
      name: "Jessica",
      designation: "Scientist",
      description:
        "Nobody blocks your success except yourself. Accept what you are. Trust the progress and time that one day will be your achievement and satisfactory one.",
      followers: "2M Followers",
      posts: "40+ posts",
      message: "Message",
      followed: false,
      // follow: "Follow",
      // unfollow: "Unfollow",
    },
    {
      id: 3,
      icon: tickicon,
      name: "Shobi",
      designation: "Developer",
      description:
        "Nobody blocks your success except yourself. Accept what you are. Trust the progress and time that one day will be your achievement and satisfactory one.",
      followers: "2M Followers",
      posts: "40+ posts",
      message: "Message",
      followed: false,
      // follow: "Follow",
      // unfollow: "Unfollow",
    },
    {
      id: 4,
      icon: tickicon,
      name: "Thomas",
      designation: "Designer",
      description:
        "Nobody blocks your success except yourself. Accept what you are. Trust the progress and time that one day will be your achievement and satisfactory one.",
      followers: "2M Followers",
      posts: "40+ posts",
      message: "Message",
      followed: false,
      // follow: "Follow",
      // unfollow: "Unfollow",
    },
    {
      id: 5,
      icon: tickicon,
      name: "Atkinson",
      designation: "Artist",
      description:
        "Nobody blocks your success except yourself. Accept what you are. Trust the progress and time that one day will be your achievement and satisfactory one.",
      followers: "2M Followers",
      posts: "40+ posts",
      message: "Message",
      followed: false,
      // follow: "Follow",
      // unfollow: "Unfollow",
    },
    {
      id: 6,
      icon: tickicon,
      name: "Jack",
      designation: "Software Developer",
      description:
        "Nobody blocks your success except yourself. Accept what you are. Trust the progress and time that one day will be your achievement and satisfactory one.",
      followers: "2M Followers",
      posts: "40+ posts",
      message: "Message",
      followed: false,
      // follow: "Follow",
      // unfollow: "Unfollow",
    },
  ];
  const [friends, setFriends] = useState(Profile);
  const handleFriends = (friendId) => {
    setFriends((prevFriends) =>
      prevFriends.map((friend) =>
        friend.id === friendId
          ? { ...friend, followed: !friend.followed }
          : friend
      )
    );
  };
  const renderprofile = friends.map((friend) => {
    return (
      <div className="all_profile">
        <div className="usercard"></div>
        <div className="profileinfo">
          <div className="profile_name">
            <img src={friend.icon} alt="tick" />
            <h1>{friend.name}</h1>
          </div>
          <p>{friend.designation}</p>
          <p>{friend.description}</p>
          <p>
            <b>{friend.followers}</b>
          </p>
          <div className="post">
            <p>{friend.posts}</p>
            <button>{friend.message}</button>
          </div>
          <button onClick={() => handleFriends(friend.id)}>
            {friend.followed ? "Unfollow" : "Follow"}
          </button>
        </div>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="allcards">
        <div className="cardhead">
          <img src={blueline} alt="image" />
          <h1>Popular people on social network</h1>
        </div>
        <div className="card_main">{renderprofile}</div>
      </div>
    </React.Fragment>
  );
};
export default Card;
