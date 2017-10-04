import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";
import reducers from "../reducers";
import { BASE_URL } from "../config";

const client = axios.create({
  baseURL: BASE_URL,
  responseType: "json"
});

const middleware = [promise(), thunk, axiosMiddleware(client)];
export default createStore(reducers, applyMiddleware(...middleware));
