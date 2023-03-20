import React from "react";

const Tag = () => {
  return (
    <>
      <div className='bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer'>
        react
      </div>
      {/* <!-- selected --> */}
      <div className='bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer'>
        redux
      </div>
    </>
  );
};

export default Tag;
