import { FixMeLater } from 'src/constant/other';
import axiosClient from './axiosClient';

const cartApi = {
  getAll: () => {
    const url = '/cart';
    return axiosClient.get(url);
  },
  getCart: (id: FixMeLater) => {
    const url = `/cart/${id}`;
    return axiosClient.get(url);
  },
  postCart: (obj: FixMeLater) => {
    const url = `/cart`;
    return axiosClient.post(url, obj);
  },
  putCart: (obj: FixMeLater) => {
    const url = `/cart/${obj.id}`;
    return axiosClient.put(url, obj);
  },
  getCartByUser: (id: FixMeLater) => {
    const url = `/cart/user/${id}`;
    return axiosClient.get(url);
  },
  deleteItemCart: (obj: FixMeLater) => {
    const url = `/cart/${obj.id}`;
    return axiosClient.put(url, obj);
  },
  update: (id: FixMeLater,obj: FixMeLater) => {
    const url = `/cart/user/${id}`;
    return axiosClient.put(url, obj);
  }
};

export default cartApi;
