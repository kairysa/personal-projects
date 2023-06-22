import React from 'react';

const AddOne = (props) => {
  const {count, setCount} = props;
  
  const addOne = (e) => {
    e.preventDefault();
    const newNum = count + 1;
    setCount(newNum);
  }
  return (
    <div className="mx-3">
      <button className="bg-blue-600 h-10 w-32 rounded hover:bg-blue-700 text-white" onClick={addOne}>Add One</button>
    </div>
  )
}

export default AddOne;