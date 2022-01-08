import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import customerApi from '../../api/customerApi';
import { FixMeLater } from '../../constant/other';

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
  async (obj: FixMeLater) => {
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
  extraReducers: (builder) => {
    builder.addCase(addCustomerApi.fulfilled, (state, action) => {
      // state.customers = action.payload;
    });
    builder.addCase(
      getCustomerByUserApi.fulfilled,
      (state: FixMeLater, action) => {
        state.customers = action.payload;
      }
    );
  }
});
//export action
export const { setSuccessOrder } = customersSlice.actions;
//selector
export const customersSelector = (state: RootState) => state.customers;
