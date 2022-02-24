import { combineReducers } from "redux";
import employeeReducer from "./employeesReducer";
import alertReducer from "./alertReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import departmentReducer from "./departmentReducer";
export default combineReducers({
  employees: employeeReducer,
  departments: departmentReducer,
  alert: alertReducer,
  error: errorReducer,
  auth: authReducer,
});
