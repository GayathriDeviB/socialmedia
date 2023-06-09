import React from "react";
import "./wall.css";
import NewsCards from "../components/newscards/newscards";
import CardsFollow from "../components/followcards/followcards";
import Profile from "../components/profilenetwork/profile";
import NewsFeed from "../components/newsfeedprofile/newsfeed";

const Wall = () => {
  return (
    <div className="wall_main">
      <div className="prof_newscard">
        <Profile />
        <NewsCards />
      </div>
      <div>
        <NewsFeed />
        <NewsFeed />
      </div>
      <CardsFollow />
    </div>
  );
};
export default Wall;
