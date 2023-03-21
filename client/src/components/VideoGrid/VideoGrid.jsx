import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../features/videos/videosSlice";
import Loading from "../Loading/Loading";
import VideoGridItem from "./VideoGridItem";

const VideoGrid = () => {
  // Use selector
  const { videos, isLoading, isError, error } = useSelector(
    state => state.videos
  );

  const { tags, search } = useSelector(state => state.filter);

  // Dispatch
  const dispatch = useDispatch();

  // UseEffect
  useEffect(() => {
    dispatch(fetchVideos({ tags, search }));
  }, [dispatch, tags, search]);

  // decide what to render
  let content;

  if (isLoading) content = <Loading />;

  if (!isLoading && isError) {
    content = <div className='col-span-12'>{error}</div>;
  }

  if (!isError && !isLoading && videos?.length === 0) {
    content = <div className='col-span-12'>No videos found!</div>;
  }

  if (!isError && !isLoading && videos?.length > 0) {
    content = videos.map(video => (
      <VideoGridItem video={video} key={video.id} />
    ));
  }

  return (
    <div className='pt-12'>
      <div className='pt-12'>
        <div className='grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]'>
          {/* <!-- single video --> */}
          {content}

          {/* <!-- error section --> */}
          {/* <div className='col-span-12'>some error happened</div> */}
        </div>
      </div>
    </div>
  );
};

export default VideoGrid;
