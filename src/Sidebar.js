import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import backgroundImg from "./images/bg.jpg";
import { useSelector } from "react-redux";
import { selectUser } from "./features/user/userSlice";

const Sidebar = () => {

  const user = useSelector(selectUser);

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
        <Avatar src={user.photoUrl} className="sidebar_avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
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
        {recentItem("Front-end Web Development")}
        {recentItem("Software Engineering")}
        {recentItem("Developer")}
        {recentItem("Redux")}
      </div>
    </div>
  );
};

export default Sidebar;
