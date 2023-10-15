import React, { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_GIPHY_API;

const useFetch = ({ keyword }) => {
  const [gifUrl, setGifUrl] = useState("");
  const fetchGif = async () => {
    try {
      const res = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword
          .split(" ")
          .join("")}&limit=1`
      );
      const { data } = await res.json();

      setGifUrl(data[0]?.images?.downsized_medium?.url);
    } catch {
      setGifUrl(
        "https://i.pinimg.com/originals/68/a0/9e/68a09e774e98242871c2db0f99307420.gif"
      );
    }
  };

  useEffect(() => {
    if (keyword) fetchGif();
  }, [keyword]);

  return gifUrl;
};

export default useFetch;
