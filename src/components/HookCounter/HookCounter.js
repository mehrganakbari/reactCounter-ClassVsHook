import { useState } from "react";

const HookCounter = () => {
  const [count, setCount] = useState(0);
  const addOneHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const addTwoHandler = () => {
    setCount((prevCount) => prevCount + 2);
  };
  const addFiveHandler = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  //   if update state based on pervious state => callback function used
  return (
    <div>
      <h2>count - <span>{count}</span></h2>
      <button onClick={addOneHandler}>add One</button>
      <button onClick={addTwoHandler}>add Two</button>
      <button onClick={addFiveHandler}>add Five</button>
    </div>
  );
};

export default HookCounter;
