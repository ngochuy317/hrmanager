import {
    USER_LOADED,
    USER_LOADING,
    // AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    // REGISTER_FAIL,
    // REGISTER_SUCCESS
} from './types'
import userAPI from '../../api/userApi'
import jwtDecode from 'jwt-decode'
//signUp
export const loginUser = (user) => (dispatch) => {
    userAPI.login(user).then(
        response => {
            localStorage.setItem("access_token", response['jwt_token'])
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response
            })
        }
    ).catch(error => {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.message
        })
    })
}

export const loadUser = () => (dispatch, getState) => {
    const token = getState().auth.token
    if(token){
        const user = jwtDecode(token)
        dispatch({
            type: USER_LOADED,
            payload: {token,user}
        })
    } else {
        dispatch({
        type: USER_LOADING,
        payload: null,
    })}

}

export const signOut = () => (dispatch) => {
    dispatch({
        type: LOGOUT_SUCCESS,
        payload: null,
    })
}