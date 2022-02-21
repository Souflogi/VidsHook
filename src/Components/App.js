import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
//Custom hook
import useVideos from "../hooks/useVideos";
const App = () => {
  const [mainVideo, setMainVideo] = useState(null);

  const { videos, Search } = useVideos("lions");

  useEffect(() => {
    setMainVideo(videos[0]);
  }, [videos]);

  return (
    <div className="app ui container">
      <SearchBar SearchSubmit={Search} />
      <div className="ui grid ">
        <div className="ui row">
          {mainVideo ? <VideoDetail video={mainVideo} /> : "loading ..."}
          <VideoList videos={videos} clickHandler={setMainVideo} />
        </div>
      </div>
    </div>
  );
};

export default App;
