import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configurationStore from "./redux/index";
import { BrowserRouter, Router } from "react-router-dom";

import App from "./App";

import "antd/dist/antd.css";
import "./styles/index.scss";
import { createHashHistory } from "history";

const store = configurationStore;
export const history = createHashHistory();

ReactDOM.render(
  <BrowserRouter>
    ,
    <Provider store={store}>
      <App />
    </Provider>
    ,
  </BrowserRouter>,
  document.getElementById("root")
);
