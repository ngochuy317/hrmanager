import axiosClient from "./axiosClient"
const userApi = {
    register(data) {
        const url = 'v1/register/';
        return axiosClient.post(url, data)
    },
    
    login(data) {
        const url = 'v1/token/';
        return axiosClient.post(url, data);
    },
}
export default userApi