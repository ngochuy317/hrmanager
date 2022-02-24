import { SET_EMPLOYEES, DELETE_EMPLOYEE, ADD_EMPLOYEE } from "../actions/types.js";

const initalState = {
  somethings: "text",
  list: [],
};

export default function employeeReducer(state = initalState, action) {
  switch (action.type) {
    case SET_EMPLOYEES:{
      const newList = [...action.payload]
      return {
        ...state,
        list: newList,
      };
    }
    case DELETE_EMPLOYEE: {
      const newList = [...state.list]
      return {
        ...state,
        list: newList.filter(item => { return item.id !== action.payload} )
      }
    }
    case ADD_EMPLOYEE: {
      const newList = [...state.list];
      newList.push(action.payload)
      return {
        ...state,
        list: newList,
      }
    }
    default:
      return state;
  }
}
