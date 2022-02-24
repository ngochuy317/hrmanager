import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
} from '../actions/types'

const initialState = {
    token: localStorage.getItem('access_token'),
    isAuthenticated: false,
    isLoading: false,
    user: null,
}

export default function authReducer(state = initialState , action) {
    switch (action.type) {
        case USER_LOADING:{
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false,
                user: null
            }
        }
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: true,
                user: action.payload.user,
            } 
        case LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload.jwt_token,
                user: {
                    id: action.payload.id,
                    name: action.payload.name,
                    role: action.payload.role
                },
                isAuthenticated: true,
                isLoading: true,
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: true,
            }
        case LOGOUT_SUCCESS:{
            localStorage.removeItem("access_token")
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false,
            }
        }   
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case REGISTER_FAIL:
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false,
            }
        default: 
            return state
    }
}