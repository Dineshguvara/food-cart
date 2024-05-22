import { combineReducers  } from "@reduxjs/toolkit";
import sideBarReducer from "./sbSlice"
import counterReducer from "./counter/counterSlice"
const rootReducer = combineReducers({
  sideBar: sideBarReducer,
  counter:counterReducer
});
 
export default rootReducer;