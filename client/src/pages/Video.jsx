import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import Player from "../components/Player/Player";
import VideoDescription from "../components/Player/VideoDescription";
import VideoList from "../components/RelatedList/VideoList";
import { fetchVideo } from "../features/video/videoSlice";

const Video = () => {
  // Use selector
  const { video, isLoading, isError, error } = useSelector(
    state => state.video
  );

  // Use Dispatch
  const dispatch = useDispatch();

  // use Params
  const { videoId } = useParams();

  // useEffect
  useEffect(() => {
    dispatch(fetchVideo(videoId));
  }, [dispatch, videoId]);

  // destruction from data
  const { tags, id } = video || {};

  // decide what to render
  let content = null;

  if (isLoading) content = <Loading />;

  if (!isLoading && isError) {
    content = <div className='col-span-12'>{error}</div>;
  }

  if (!isError && !isLoading && !video?.id) {
    content = <div className='col-span-12'>No video found!</div>;
  }

  if (!isError && !isLoading && video?.id) {
    content = (
      <div className='grid grid-cols-3 gap-2 lg:gap-8'>
        <div className='col-span-full w-full space-y-8 lg:col-span-2'>
          <Player video={video} />
          <VideoDescription video={video} />
        </div>

        <VideoList currentVideoId={id} tags={tags} />
      </div>
    );
  }

  return (
    <div className='pt-6 pb-20'>
      <div className='mx-auto max-w-7xl px-2 pb-20 min-h-[400px]'>
        {content}
      </div>
    </div>
  );
};

export default Video;
