import React from 'react';

const SubtractOne = (props) => {
  const {count, setCount} = props;

  const subtractOne = (e) => {
    e.preventDefault();
    const newNum = count - 1;
    setCount(newNum);
  }
  return (
    <div className="mx-3">
      <button className="bg-red-600 h-10 w-32 rounded hover:bg-red-700 text-white" onClick={subtractOne}>Subtract One</button>
    </div>
  )
}

export default SubtractOne;