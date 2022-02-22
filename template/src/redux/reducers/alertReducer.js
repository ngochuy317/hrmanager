import { GET_ALERT} from '../actions/types'

const initialState = {
    msg: null,
    type: null,
}

export default function  alertReducer(state = initialState , action) {
    switch (action.type) {
        case GET_ALERT:
            return {
                msg: action.payload.msg,
                type: action.payload.type,
            }
        default: 
            return state;
    }

}