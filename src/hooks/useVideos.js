import { useEffect, useState } from "react";
import youtube from "../api/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    //initial search Optional
    Search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const Search = async (term) => {
    const result = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(result.data.items);
  };
  return { videos, Search };
};

export default useVideos;
