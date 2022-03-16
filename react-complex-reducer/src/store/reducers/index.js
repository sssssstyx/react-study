import { combineReducers } from "redux";
import user from "./user";
import settings from "./settings"   
import monitor from "./monitor"
import app from "./app";

export default combineReducers({
  user,
  app,
  settings,
  monitor
});