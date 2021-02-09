import rootReducer from "../reducers";
import { applyMiddleware, createStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";

const middleware = applyMiddleware(thunkMiddleware);

const store = createStore(rootReducer, undefined, compose(middleware));

export default store;
