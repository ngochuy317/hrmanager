import {SET_DEPARTMENT,REMOVE_DEPARTMENT,ADD_DEPARTMENT} from './types'
import departmentApi from '../../api/departmentApi';
import {getAlerts} from '../actions/alertAct'
//getAll list Employee
export const setDerpartments = (items) => ({
    type: SET_DEPARTMENT,
    payload: items,
  });
  
  // fetch all Employee
  export const fetchDerpartments = () => async (dispatch) => {
    departmentApi.getAll()
    .then(res =>  dispatch(setDerpartments(res)))
    .catch(err =>  dispatch(getAlerts({ msg: `disconnect fetch : ${err.message} `, type: 'error'})))
  };