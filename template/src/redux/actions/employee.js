import { SET_EMPLOYEES } from "./types";
import employeeApi from "../../api/employeeApi";
//GET_LIST
export const setEmployee = (items) => ({
  type: SET_EMPLOYEES,
  payload: items,
});
export const fetchEmployees = () => async (dispatch) => {
  const res = await employeeApi.getAll();
  dispatch(setEmployee(res));
};
