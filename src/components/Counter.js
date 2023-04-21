import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    // console.log(`before setState: ${count}`);

    // setCount(count + 1);

    // console.log(`after setState: ${count}`);
   //setCount(count + 1);
   setCount((currentCount)=> currentCount + 1);
   setCount((currentCount)=> currentCount + 1);

  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;