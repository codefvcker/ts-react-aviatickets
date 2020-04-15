// import { filterReducer } from "./filterReducer";
import { combineReducers } from "redux";
import { ticketsReduser } from "./ticketsReducer";

export const rootReducer = combineReducers({
  // filter: filterReducer,
  tickets: ticketsReduser,
});
