import React from "react";

const VideoDetail = ({ video }) => {
  return (
    <div className="ten wide column">
      <div className="ui embed">
        <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p className="">{video.snippet.description}</p>
      </div>
      {/* <img src={video.snippet.thumbnails.high.url} alt="" /> */}
    </div>
  );
};

export default VideoDetail;
