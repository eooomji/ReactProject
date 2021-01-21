/* Class형 컴포넌트
import React, {Component} from 'react';

class App extends Component {
  render() {
    const name = 'react';
    return <div className="react">{name}</div>;
  }
}*/

import React, {Component} from "react";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Hi from "./Hi";
import EventPractice from "./EventPractice";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import IterationSample from "./lterationSample";

class App extends Component {
  render() {
    return <IterationSample />;
  }
}

export default App;