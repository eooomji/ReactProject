import React, { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "김민기" },
    { id: 2, text: "오범석" },
    { id: 3, text: "이수원" },
    { id: 4, text: "배종민" },
    { id: 5, text: "서영건" },
    { id: 6, text: "남영호" },
  ]);
  /*  const names = [
        "김민기",
        "이수원",
        "오범석",
        "서영건",
        "배종민",
        "남영호",
        "강현석",
      ];*/
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(7);

  const onChange = e => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };

  const onRemove = id => {
    const nextNames = names.filter(name => name.id !== id); // 클릭한 id가 아닌 id만 nextNames에 들어감
    setNames(nextNames);
  }

  const nameList = names.map((name) => (
      <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
        {name.text}
      </li>
  ));
  /*  const nameList = names.map((name, index) => <li key={index}>{name}</li>); // key 오류 안 뜸
      const nameList = names.map((name) => <li>{name}</li>);*/
  // return <ul>{nameList}</ul>;
  /*(
          <ul>
              <li>김민기</li>
              <li>이수원</li>
              <li>오범석</li>
              <li>서영건</li>
              <li>배종민</li>
              <li>남영호</li>
          </ul>
      );*/
  return (
      <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
        <ul>{nameList}</ul>
      </>
  );
};

/*
const numbers = [1,2,3,4,5];
const result = numbers.map(num=>num*num);   // 1, 4, 9, 16, 25
*/

export default IterationSample;
