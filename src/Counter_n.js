import React, { useState } from "react";

const Counter = () => {
  //  useState: 한번에 하나의 상태만 저장가능
  const [value, setValue] = useState(0);
  return (
    <div>
      <p>
        현재 카운터의 값은 <b>{value}</b>
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  );
};

export default Counter;
