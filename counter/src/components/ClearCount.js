import React from 'react';

const ClearCount = (props) => {
  const {count, setCount} = props;

  const clearCount = (e) => {
    e.preventDefault();
    setCount(0);
  }

  return (
    <div className="mx-3">
      <button className="bg-gray-600 h-10 w-32 rounded hover:bg-gray-700 text-white" onClick={clearCount}>Clear</button>
    </div>
  )
}

export default ClearCount;