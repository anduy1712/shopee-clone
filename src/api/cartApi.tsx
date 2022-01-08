import axiosClient from './axiosClient';

const cartApi = {
  getAll: () => {
    const url = '/carts';
    return axiosClient.get(url);
  },
  getCart: (id: any) => {
    const url = `/carts/${id}`;
    return axiosClient.get(url);
  },
  postCart: (obj: any) => {
    const url = `/carts`;
    return axiosClient.post(url, obj);
  },
  putCart: (obj: any) => {
    const url = `/carts/${obj.id}`;
    return axiosClient.put(url, obj);
  },
  getCartByUser: (id: any) => {
    const url = `/carts?userId=${id}`;
    return axiosClient.get(url);
  },
  deleteItemCart: (obj: any) => {
    const url = `/carts/${obj.id}`;
    return axiosClient.put(url, obj);
  }
};

export default cartApi;
