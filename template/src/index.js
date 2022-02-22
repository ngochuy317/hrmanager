import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import {positions, Provider as AlertProvides } from 'react-alert'
import AlertTemplate from "react-alert-template-basic"

const alertOptions = {
  timeout: 3000,
  position: positions.TOP_CENTER,
}

ReactDOM.render(
  <Provider store={store}>
    <AlertProvides template={AlertTemplate} {...alertOptions}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AlertProvides>
  </Provider>,
  document.getElementById("root")
);


