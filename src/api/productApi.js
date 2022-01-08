import axiosClient from './axiosClient';

const productApi = {
  getAll: (params) => {
    const url = '/product';
    return axiosClient.get(url, { params });
  },
  getProduct: (id) => {
    const url = `/product/${id}`;
    return axiosClient.get(url);
  },
  filterProduct: (params) => {
    const url = `/products${params}`;
    return axiosClient.get(url);
  }
};
export default productApi;
