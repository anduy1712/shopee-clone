import { FixMeLater } from '../constant/other';
import { CartRequest } from '../models/cart/Cart.type';
import axiosClient from './axiosClient';

const cartApi = {
  getAll: () => {
    const url = '/cart';
    return axiosClient.get(url);
  },
  getCart: (id: string): Promise<CartRequest> => {
    const url = `/cart/${id}`;
    return axiosClient.get(url);
  },
  postCart: (obj: CartRequest): Promise<CartRequest> => {
    const url = `/cart`;
    return axiosClient.post(url, obj);
  },
  putCart: (obj: FixMeLater): Promise<CartRequest> => {
    const url = `/cart/${obj.id}`;
    return axiosClient.put(url, obj);
  },
  getCartByUser: (id: string): Promise<CartRequest> => {
    const url = `/cart/user/${id}`;
    return axiosClient.get(url);
  },
  deleteItemCart: (obj: FixMeLater): Promise<CartRequest> => {
    const url = `/cart/${obj.id}`;
    return axiosClient.put(url, obj);
  },
  update: (id: string, obj: FixMeLater): Promise<CartRequest> => {
    const url = `/cart/user/${id}`;
    return axiosClient.put(url, obj);
  }
};

export default cartApi;
