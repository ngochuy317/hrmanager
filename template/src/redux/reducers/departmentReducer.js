import {SET_DEPARTMENT,REMOVE_DEPARTMENT, ADD_DEPARTMENT} from '../actions/types'

const  initialState = {
    somethings: "department",
    list: [],
  };

export default function departmentReducer(state = initialState, action) {
    switch (action.type) {
        case SET_DEPARTMENT: {
            const newList = [...action.payload]
            return {
                  ...state,
                  list: newList,
            };
        }
        default:
            return state
    }
}