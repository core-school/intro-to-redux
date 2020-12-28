import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Alberto } from "./components/Alberto";
import { store } from "./redux/store";

const App = () => (
  <div>
    <Alberto />
    <Alberto />
    <Alberto />
    <Alberto />
  </div>
);

const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<AppWithStore />, document.getElementById("root"));
