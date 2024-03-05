import { combineReducers, createStore } from "redux";
import taskReducer from "./taskReducer";

const rootReducer = combineReducers({taskReducer})

export default rootReducer