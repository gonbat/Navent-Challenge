import { createStore, applyMiddleware, compose } from "redux";
import aparts from "./reducers/aparts";
import promise from "redux-promise-middleware";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,

  composeEnhancers(applyMiddleware(promise, createLogger(), thunkMiddleware)),
);
