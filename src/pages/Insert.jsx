
import React, { useState } from 'react';

const Counter = () => {

  const [count, setCount] = useState(0);


  const handleIncrement = () => {
    setCount(count + 10);
  };


  const handleDecrement = () => {
    if(count>0){

        setCount(count - 10);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <div style={{ margin: 'auto', textAlign: 'center', marginTop: '50px' }}>
        <h1>{count}</h1>
        <button onClick={handleIncrement} style={{ marginRight: '10px' }}>
          Increment
        </button>
        <button onClick={handleDecrement} style={{ marginRight: '10px' }}>
          Decrement
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
};

export default Counter;
