import React from "react";
import Player from "../components/Player/Player";
import VideoDescription from "../components/Player/VideoDescription";
import VideoList from "../components/RelatedList/VideoList";

const Video = () => {
  return (
    <div className='pt-6 pb-20'>
      <div className='mx-auto max-w-7xl px-2 pb-20 min-h-[400px]'>
        <div className='grid grid-cols-3 gap-2 lg:gap-8'>
          <div className='col-span-full w-full space-y-8 lg:col-span-2'>
            <Player />
            <VideoDescription />
          </div>

          <VideoList />
        </div>
      </div>
    </div>
  );
};

export default Video;
