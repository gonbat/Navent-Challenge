import { createStore, applyMiddleware, compose } from "redux";
import deptos from "./reducers/deptos";
import promise from "redux-promise-middleware";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  deptos,

  composeEnhancers(applyMiddleware(promise, createLogger(), thunkMiddleware)),
);
