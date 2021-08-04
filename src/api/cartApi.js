import axiosClient from "./axiosClient";

const cartApi = {
  getAll: (params) => {
    const url = "/carts";
    return axiosClient.get(url, { params });
  },
  getCart: (id) => {
    const url = `/carts/${id}`;
    return axiosClient.get(url);
  },
  postCart: (obj) => {
    const url = `/carts`;
    return axiosClient.post(url, obj);
  },
};

export default cartApi;
