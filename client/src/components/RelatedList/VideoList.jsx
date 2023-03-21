import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading/Loading";
import { fetchRelatedVideos } from "../../features/relatedVideos/relatedVideosSlice";
import SingleVideo from "./SingleVideo";

const VideoList = ({ currentVideoId, tags }) => {
  // Use Selector
  const { relatedVideos, isLoading, isError, error } = useSelector(
    state => state.relatedVideos
  );

  // Dispatch
  const dispatch = useDispatch();

  // Use Effect
  useEffect(() => {
    dispatch(fetchRelatedVideos({ tags, id: currentVideoId }));
  }, [dispatch, tags, currentVideoId]);

  // decide what to render
  let content = null;

  if (isLoading) content = <Loading />;

  if (!isLoading && isError) {
    content = <div className='col-span-12'>{error}</div>;
  }

  if (!isError && !isLoading && relatedVideos?.length === 0) {
    content = <div className='col-span-12'>No related videos found!</div>;
  }

  if (!isError && !isLoading && relatedVideos?.length > 0) {
    content = relatedVideos.map(relatedVideo => (
      <SingleVideo relatedVideo={relatedVideo} key={relatedVideo.id} />
    ));
  }

  return (
    <div className='col-span-full lg:col-auto max-h-[570px] overflow-y-auto'>
      {content}
    </div>
  );
};

export default VideoList;
