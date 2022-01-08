import axiosClient from './axiosClient';

const userApi = {
  getAll: (params) => {
    const url = '/login';
    return axiosClient.get(url, { params });
  },
  getUser: (params) => {
    const url = '/login';
    return axiosClient.post(url, { ...params });
  },
  editUser: (obj) => {
    const url = `/login/${obj.id}`;
    return axiosClient.put(url, obj);
  }
};
export default userApi;
