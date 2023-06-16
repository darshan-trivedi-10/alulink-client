import { combineReducers } from "redux";
import organizationReducer from './organizationReducer';
import userReducer from "./userReducer";

export const reducers = combineReducers({ organizationReducer, userReducer });
