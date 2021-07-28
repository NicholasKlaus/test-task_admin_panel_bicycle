import { combineReducers } from "redux";
import { bicycleReducer } from './bicycleReducer';


export const rootReducer = combineReducers({
  bicycles: bicycleReducer
})