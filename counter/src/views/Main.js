import React, {useState} from 'react';
import AddOne from '../components/AddOne';
import SubtractOne from '../components/SubtractOne';
import ClearCount from '../components/ClearCount';

const Main = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div>
        <AddOne />
        <SubtractOne />
        <ClearCount />
      </div>
      <div>
        <p>Count: {count}</p>
      </div>
    </div>
  )
}

export default Main;