/*import React, {useState} from "react";
import Info from "./Info";

function App() {
  const [visible, setVisible] = useState(false);
  return (
      <div>
        <button onClick={()=>{
          setVisible(!visible);
        }}>
          {visible ? '숨기기':'보이기'};
        </button>
        <hr />
        {visible && <Info />}
      </div>
  );
};

export default App;*/

import React from 'react';
import Counter from "./Counter";
import Info_reducerv from "./Info_reducerv";

const App = () => {
    return <Info_reducerv />;
};

export default App;
