import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../../features/tags/tagsSlice";
import SingleTag from "./SingleTag";

const Tags = () => {
  // Use Selector
  const { tags } = useSelector(state => state.tags);

  // Dispatch
  const dispatch = useDispatch();

  // use Effect
  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  return tags?.length > 0 ? (
    <div className='max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto'>
      {tags?.map(tag => (
        <SingleTag tag={tag} key={tag.id} />
      ))}
    </div>
  ) : null;
};

export default Tags;
