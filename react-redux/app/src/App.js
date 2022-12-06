import "./styles.css";
import { useState, useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";

//action을 만드는 함수 = action creator func
//step의 값을 주지않으면 step의 기본값은 1
const up = (step = 1) => {
  return { type: "UP", step };
};

function Left1(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Left1</h1>
      <button
        onClick={() => {
          dispatch(up(20));
        }}
      >
        +
      </button>
      <Left2></Left2>
    </div>
  );
}
function Left2(props) {
  return (
    <div>
      <h1>Left2</h1>
      <Left3></Left3>
    </div>
  );
}
function Left3(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Left3</h1>
      <button
        onClick={() => {
          dispatch(up());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "RESET" });
        }}
      >
        0
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DOWN", step: 2 });
        }}
      >
        -
      </button>
    </div>
  );
}
function Right1() {
  const count = useSelector((state) => state.value);
  //state 값 중 선택한 값만 리랜더링 시켜줌. -> 여기서는 state.value 값만 리랜더링
  return (
    <div>
      <h1>Right1</h1>
      {count}
      <Right2></Right2>
    </div>
  );
}
function Right2() {
  return (
    <div>
      <h1>Right2</h1>
      <Right3></Right3>
    </div>
  );
}
function Right3() {
  const count = useSelector((state) => {
    return state.value;
  });
  return (
    <div>
      <h1>Right3</h1>
      {count}
    </div>
  );
}
export default function App() {
  return (
    <div id="app">
      <h1>Root</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <Left1></Left1>
        <Right1></Right1>
      </div>
    </div>
  );
}