import React, { Component } from "react";

// class형
class Counter extends Component {
  /*constructor(props) {
    // 생성자 쓰는 방법
    super(props); // 꼭 있어야
    this.state = {
      number: 0,
        fixNum: 0
    };
  }*/
    state = {   // 생성자 안 쓰는 방법
        number: 0,
        fixNum: 0,
    };

  render() {
    const { number, fixNum } = this.state; // this.state에서 this(객체)에서 state를 조회, state 초깃값 0
    return (
      <div>
        <h1>{number}</h1>
          <h2>{fixNum}</h2>
        <button
          onClick={() => {
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

/*const array = [1, 2];
const one = array[0];
const two = array[1];
// 배열 비구조화 할당을 쓰면
const [one, two] = array // 38, 39가*/

export default Counter;
