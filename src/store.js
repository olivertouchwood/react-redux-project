import {combineReducers, createStore, applyMiddleware} from "redux";
import {logger} from "redux-logger";
import thunk from "redux-thunk";

import user from "./reducers/userReducer";
import {reducer} from "./reducers/reducer";
import {modalReducer} from "./reducers/modalReducer";

export default createStore(
    combineReducers({user, reducer, modalReducer}),
    applyMiddleware(thunk, logger)
);