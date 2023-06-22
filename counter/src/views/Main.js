import React, {useState} from 'react';
import AddOne from '../components/AddOne';
import SubtractOne from '../components/SubtractOne';
import ClearCount from '../components/ClearCount';

const Main = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen p-3 font-semibold">
      <div className="w-auto">
        <p>Count: {count}</p>
      </div>
      <div className="m-3 flex w-auto justify-center">
        <AddOne count={count} setCount={setCount}/>
        <SubtractOne count={count} setCount={setCount}/>
        <ClearCount count={count} setCount={setCount}/>
      </div>
    </div>
  )
}

export default Main;