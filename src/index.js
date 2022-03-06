import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./StateProvider";
import  { initialState, reducer } from "./reducer";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StateProvider reducer={reducer} initialState={initialState}>
        <App />
      </StateProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
