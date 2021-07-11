import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import "./Widgets.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widgets_article">
        <div className="widgets_articleLeft">
          <FiberManualRecordIcon />
        </div>
        <div className="widgets_articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2> LinkedIn News </h2>
        <InfoIcon />
      </div>
      {newsArticle("Web Development", "Learning React Js is fun")}
      {newsArticle(
        "Covid",
        "The delta virus is much more effective than sarscov2!"
      )}
      {newsArticle(
        "LinkedIn",
        "An App for professionals to get connect and explore more tech news"
      )}
      {newsArticle("LinkedIn Jobs",
        "LinkedIn Jobs Finding Jobs using 'LinkedIn Jobs' is much easier"
      )}
      {newsArticle("India", "The Software Engineers in India are best")}
    </div>
  );
};

export default Widgets;
