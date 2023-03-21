import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tagRemoved, tagSelected } from "../../features/filter/filterSlice";

const SingleTag = ({ tag }) => {
  // use selector
  const { tags: selectedTags } = useSelector(state => state.filter);

  // Dispatch
  const dispatch = useDispatch();

  //destructuring
  const { title } = tag || {};

  const isSelected = selectedTags.includes(title) ? true : false;

  const selectionStyle = isSelected
    ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
    : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer";

  // Tag selection handler
  const selectHandler = () => {
    if (isSelected) {
      dispatch(tagRemoved(title));
    } else {
      dispatch(tagSelected(title));
    }
  };

  return (
    <div className={selectionStyle} onClick={selectHandler}>
      {title}
    </div>
  );
};

export default SingleTag;
