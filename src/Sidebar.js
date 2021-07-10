import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import backgroundImg from "./images/bg.jpg";

const Sidebar = () => {
    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
          <span className="sidebar_hash">#</span>
          <p>{topic}</p>
        </div>
      );
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src={backgroundImg} alt="" />
        <Avatar className="sidebar_avatar" />
        <h2>Mayur Barpande</h2>
        <h4>mkbarpande@gmail.com</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">2,543</p>
        </div>

        <div className="sidebar_stat">
          <p>View on Posts</p>
          <p className="sidebar_statNumber">2,440</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("Welcome")}
        {recentItem('Front-end Web Development')}
        {recentItem('Software Engineering')}
        {recentItem('Developer')}
        {recentItem('Redux')}
      </div>
    </div>
  );
};

export default Sidebar;
