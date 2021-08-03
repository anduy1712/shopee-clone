import axiosClient from "./axiosClient";

const cartApi = {
  getCart: (id) => {
    const url = `/carts/${id}`;
    return axiosClient.get(url);
  },
};

export default cartApi;
