import { FixMeLater } from '../constant/other';
import axiosClient from './axiosClient';
 
const cartApi = {
  getAll: () => {
    const url = '/carts';
    return axiosClient.get(url);
  },
  getCart: (id: FixMeLater) => {
    const url = `/carts/${id}`;
    return axiosClient.get(url);
  },
  postCart: (obj: FixMeLater) => {
    const url = `/carts`;
    return axiosClient.post(url, obj);
  },
  putCart: (obj: FixMeLater) => {
    const url = `/carts/${obj.id}`;
    return axiosClient.put(url, obj);
  },
  getCartByUser: (id: FixMeLater) => {
    const url = `/carts?userId=${id}`;
    return axiosClient.get(url);
  },
  deleteItemCart: (obj: FixMeLater) => {
    const url = `/carts/${obj.id}`;
    return axiosClient.put(url, obj);
  }
};

export default cartApi;
