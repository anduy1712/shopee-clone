import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import customerApi from '../../api/customerApi';

export const addCustomerApi = createAsyncThunk(
  'customers/addCustomerApi',
  async (obj) => {
    try {
      const response = await customerApi.postCustomer(obj);
      return response;
    } catch (error) {}
  }
);
export const getCustomerByUserApi = createAsyncThunk(
  'customers/getCustomerByUserApi',
  async (obj) => {
    try {
      const response = await customerApi.getCustomerByUser(obj);
      return response;
    } catch (error) {}
  }
);

const initialState = {
  customers: [],
  successOrder: false
};
export const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    setSuccessOrder: (state, action) => {
      state.successOrder = true;
    }
  },
  extraReducers: {
    [addCustomerApi.fulfilled]: (state, action) => {
      // state.customers = action.payload;
    },
    [getCustomerByUserApi.fulfilled]: (state, action) => {
      state.customers = action.payload;
    }
  }
});
//export action
export const { setSuccessOrder } = customersSlice.actions;
//selector
export const customersSelector = (state) => state.customers;
