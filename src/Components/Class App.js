import React from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  async SearchSubmitHandler(term) {
    const result = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: result.data.items });
    this.setState({ selectedVideo: this.state.videos[0] });
  }
  async componentDidMount() {
    await this.SearchSubmitHandler("news");
  }

  videoClickHandler(videoId) {
    const selectedVideo = this.state.videos.find(
      (v) => v.id.videoId === videoId
    );
    console.log("App Component log", selectedVideo);
    //inhaced Object
    this.setState({
      selectedVideo,
    });
  }

  render() {
    return (
      <div className="app ui container">
        <SearchBar SearchSubmit={this.SearchSubmitHandler.bind(this)} />
        <div className="ui grid ">
          <div className="ui row">
            {/* {this.state.selectedVideo && (
          <VideoDetail video={this.state.selectedVideo} />
        )} */}
            {this.state.selectedVideo ? (
              <VideoDetail video={this.state.selectedVideo} />
            ) : (
              "loading ..."
            )}
            <VideoList
              videos={this.state.videos}
              clickHandler={this.videoClickHandler.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
