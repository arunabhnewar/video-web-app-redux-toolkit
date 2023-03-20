import React from "react";
import Pagination from "../components/Pagination/Pagination";
import Tags from "../components/Tags/Tags";
import VideoGrid from "../components/VideoGrid/VideoGrid";

const Home = () => {
  return (
    <>
      <Tags />
      <VideoGrid />
      <Pagination />
    </>
  );
};

export default Home;
