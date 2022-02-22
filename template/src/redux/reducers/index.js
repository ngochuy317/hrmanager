import { combineReducers } from "redux";
import employeeReducer from "./employeesReducer";
import alertReducer from "./alertReducer";

export default combineReducers({
  employees: employeeReducer,
  alert: alertReducer,
});
