import axiosClient from './axiosClient';

const cartApi = {
  getAll: (params) => {
    const url = '/carts';
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
  putCart: (obj) => {
    const url = `/carts/${obj.id}`;
    return axiosClient.put(url, obj);
  },
  getCartByUser: (id) => {
    const url = `/carts?userId=${id}`;
    return axiosClient.get(url);
  },
  deleteItemCart: (obj) => {
    const url = `/carts/${obj.id}`;
    return axiosClient.put(url, obj);
  },
};

export default cartApi;
