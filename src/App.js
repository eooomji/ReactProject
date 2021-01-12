/* Class형 컴포넌트
import React, {Component} from 'react';

class App extends Component {
  render() {
    const name = 'react';
    return <div className="react">{name}</div>;
  }
}*/

import React from "react";
import MyComponent from "./MyComponent";


function App() {
  return <MyComponent name="손엄지" favoriteNumber={7}>리액트</MyComponent>;
}

export default App;