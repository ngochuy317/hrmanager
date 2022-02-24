import axiosClient from "./axiosClient";

const departmentApi = {
  getAll: (params) => {
    const url = "department/";
    return axiosClient.get(url, { params });
  },
  post: (data) => {
    const url = "department/";
    return axiosClient.post(url,data);
  },
  get: (id) => {
    const url = `department/${id}/`;
    return axiosClient.get(url);
  },
  put: (id, data) => {
    const url = `department/${id}/`;
    return axiosClient.put(url, data);
  },
  delete: (id) => {
    const url = `department/${id}/`;
    return axiosClient.delete(url);
  },
};

export default departmentApi;