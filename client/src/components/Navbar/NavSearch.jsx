import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
import { searched } from "../../features/filter/filterSlice";

const NavSearch = () => {
  // UseSelector
  const { search } = useSelector(state => state.filter);

  // Dispatch
  const dispatch = useDispatch();

  // Match
  const match = useMatch("/");
  console.log(match);

  // Navigate
  const navigate = useNavigate();

  // Use State
  const [inputData, setInputData] = useState(search);

  // Submit handler
  const submitHandler = e => {
    e.preventDefault();
    dispatch(searched(inputData));
    console.log(inputData);

    // if user is not in home page, redirect to home page
    if (!match) {
      navigate("/");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        className='outline-none border-none mr-2'
        type='search'
        name='search'
        value={inputData}
        onChange={e => setInputData(e.target.value)}
        placeholder='Search'
      />
    </form>
  );
};

export default NavSearch;
