import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, clickHandler }) => {
  return (
    <div className="ui relaxed divided list  six wide column">
      {videos.map((v) => (
        <VideoItem video={v} key={v.id.videoId} clickHandler={clickHandler} />
      ))}
    </div>
  );
};

export default VideoList;
