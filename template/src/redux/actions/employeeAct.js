import { SET_EMPLOYEES,DELETE_EMPLOYEE, ADD_EMPLOYEE} from "./types";
import employeeApi from "../../api/employeeApi";
import {getAlerts} from "./alertAct"
//getAll list Employee
export const setEmployee = (items) => ({
  type: SET_EMPLOYEES,
  payload: items,
});

// fetch all Employee
export const fetchEmployees = () => async (dispatch) => {
  employeeApi.getAll()
  .then(res =>  dispatch(setEmployee(res)))
  .catch(err =>  dispatch(getAlerts({ msg: "disconnect fetch", type: 'error'})))
};
// Delete employee
export const deleteEmployee = (id) => (dispatch) => {
  employeeApi.delete(id)
  .then( (res) => {
    dispatch(getAlerts({msg: `success delete`, type: 'success'}))
    dispatch({type: DELETE_EMPLOYEE, payload: id,})
  })
  .catch(err =>  dispatch(getAlerts({ msg: err.response.statusText, type: 'error'})));
}

// add employee
export const addEmployee = (employee) => (dispatch) => {
  employeeApi.post(employee)
  .then( res => {
    dispatch(getAlerts({msg: `success create employee id ${res.id}`, type: 'success'}))
    console.log(res)
    dispatch({
      type: ADD_EMPLOYEE,
      payload: res
    });
  })
  .catch(err => {
    dispatch(getAlerts({ msg: err.response.statusText, type: 'error'}))
  });
} 
