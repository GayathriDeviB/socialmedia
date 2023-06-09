import React from "react";
import "./newscards.css";
import mtabu from "../../assets/images/mtabu.jpg";
import blueline from "../../assets/images/blue line.png";
const NewsCards = () => {
  const News = [
    {
      Image: mtabu,
      topic: "The news mint. 1 week ago",
      description: "DeFi booming with new initiative and launches in the space",
      views: "205 Views",
      trending: "TRENDING",
    },
    {
      Image: mtabu,
      topic: "The news mint. 1 week ago",
      description: "DeFi booming with new initiative and launches in the space",
      views: "205 Views",
      trending: "TRENDING",
    },
    {
      Image: mtabu,
      topic: "The news mint. 1 week ago",
      description: "DeFi booming with new initiative and launches in the space",
      views: "205 Views",
      trending: "TRENDING",
    },
  ];
  const renderNews = News.map((newslist) => {
    return (
      <div className="newsmain">
        <img src={newslist.Image} alt="image" />
        <div className="newsmaincontent">
          <h3>{newslist.topic}</h3>
          <p>
            <b>{newslist.description}</b>
          </p>
          <div className="views_main">
            <h3>{newslist.views}</h3>
            <a href="#">{newslist.trending}</a>
          </div>
        </div>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="newscards_main">
        <div className="heading">
          <img src={blueline} alt="image" />
          <h1>NEWS</h1>
        </div>
        <div className="news1">
          <img src={mtabu} alt="image" />
          <div className="content">
            <h3>The news mint. 1 week ago</h3>
            <p>
              <b>DeFi booming with new initiative and launches in the space</b>
            </p>
            <div className="view1">
              <h3>205 Views</h3>
              <a href="#">TRENDING</a>
            </div>
          </div>
        </div>
        <div className="news2">
          <h3>The news mint. 1 week ago</h3>
          <p>
            <b>#NFTize the art industry</b>
          </p>
          <div className="view2">
            <h3>205 Views</h3>
            <a href="#">LATEST</a>
          </div>
        </div>
        <div className="newscards_content"> {renderNews}</div>
      </div>
    </React.Fragment>
  );
};
export default NewsCards;
