import { createStore, applyMiddleware, compose } from "redux";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers";

export default createStore(
  rootReducer,

  applyMiddleware(promise, createLogger(), thunk),
);
