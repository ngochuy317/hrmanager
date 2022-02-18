import { SET_EMPLOYEES } from "../actions/types.js";

const initalState = {
  somethings: "text",
  list: [],
};

export default function employeeReducer(state = initalState, action) {
  switch (action.type) {
    case SET_EMPLOYEES:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
}
