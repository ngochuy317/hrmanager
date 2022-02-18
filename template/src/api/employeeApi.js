import axiosClient from "./axiosClient";

const employeeApi = {
  getAll: (params) => {
    const url = "employee/";
    return axiosClient.get(url, { params });
  },
  post: () => {
    const url = "employee/";
    return axiosClient.post(url);
  },
  get: (id) => {
    const url = `employee/${id}/`;
    return axiosClient.get(url);
  },
  put: (id, data) => {
    const url = `employee/${id}/`;
    return axiosClient.get(url, data);
  },
  delete: (id) => {
    const url = `employee/${id}/`;
    return axiosClient.get(url);
  },
};

export default employeeApi;
