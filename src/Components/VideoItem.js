import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, clickHandler }) => {
  const { title, thumbnails } = video.snippet;
  return (
    <div className="item video-item" onClick={clickHandler.bind(null, video)}>
      <img
        className="ui image "
        src={thumbnails.medium.url}
        alt={thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
