import axios from "axios";
const KEY = "AIzaSyA2QZBYm2kMpYJKfyFgX9kmr67DAiPveOo";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
