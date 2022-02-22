import { GET_ALERT } from './types'

export const getAlerts = (msg) => {
    return {
        type: GET_ALERT,
        payload: msg
    }
}