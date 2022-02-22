import axiosClient from "./axiosClient";

const employeeApi = {
  getAll: (params) => {
    const url = "employee/";
    return axiosClient.get(url, { params });
  },
  post: (data) => {
    const url = "employee/";
    return axiosClient.post(url,data);
  },
  get: (id) => {
    const url = `employee/${id}/`;
    return axiosClient.get(url);
  },
  put: (id, data) => {
    const url = `employee/${id}/`;
    return axiosClient.put(url, data);
  },
  delete: (id) => {
    const url = `employee/${id}/`;
    return axiosClient.delete(url);
  },
};

export default employeeApi;
