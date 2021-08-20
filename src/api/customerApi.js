import axiosClient from "./axiosClient";

const customerApi = {
  postCustomer: (obj) => {
    const url = `/customers`;
    return axiosClient.post(url, obj);
  },
  getCustomerByUser: (id) => {
    const url = `/customers?userId=${id}`;
    return axiosClient.get(url);
  },
};
export default customerApi;
