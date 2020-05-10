import {combineReducers, createStore, applyMiddleware} from "redux";
import {logger} from "redux-logger";
import thunk from "redux-thunk";

import user from "./reducers/userReducer";
import {reducer} from "./reducers/reducer";

export default createStore(
    combineReducers({user, reducer}),
    applyMiddleware(thunk, logger)
);