import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import store from "./store";
import { Provider } from "react-redux";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  //provider로 감싼후 props로 store을 줘서 전역적으로 store을 사용가능하도록함
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
