import axiosClient from "./axiosClient";

const userApi = {
  getAll: (params) => {
    const url = "/users";
    return axiosClient.get(url, { params });
  },
  getUser: (params) => {
    const url = "/users";
    return axiosClient.post(url, { params });
  },
};
export default userApi;
