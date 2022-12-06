import { createStore } from "redux";

const reducer = (state, action) => {
  if (action.type === "UP") {
    return { ...state, value: state.value + action.step };
  } else if (action.type === "DOWN") {
    return { ...state, value: state.value - action.step };
  } else if (action.type === "RESET") {
    return { ...state, value: 0 };
  }
  return state;
};
const initialState = {
  value: 10
};
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
