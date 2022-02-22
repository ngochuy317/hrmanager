import { SET_EMPLOYEES, DELETE_EMPLOYEE, ADD_EMPLOYEE } from "../actions/types.js";

const initalState = {
  somethings: "text",
  list: [],
};

export default function employeeReducer(state = initalState, action) {
  switch (action.type) {
    case SET_EMPLOYEES:{
      let newList = [...action.payload]
      return {
        ...state,
        list: newList,
      };
    }
    case DELETE_EMPLOYEE: {
      let newList = [...state.list]
      return {
        ...state,
        list: newList.filter(item => { return item.id !== action.payload} )
      }
    }
    case ADD_EMPLOYEE:{
      let newList = [...state.list].push(action.payload);
      return {
        ...state,
        list: newList,
      }
    }
    default:
      return state;
  }
}
