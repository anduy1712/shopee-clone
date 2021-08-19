import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import productApi from '../../api/productApi';
export const getProducts = createAsyncThunk('products/get', async () => {
  try {
    const response = await productApi.getAll();
    return response;
  } catch (error) {
    return error;
  }
});
export const getProduct = createAsyncThunk(
  'products/getProduct',
  async (id) => {
    try {
      const response = await productApi.getProduct(id);
      return response;
    } catch (error) {
      return error;
    }
  }
);
export const filterProduct = createAsyncThunk(
  'products/filterProduct',
  async (name) => {
    try {
      const response = await productApi.filterProduct(name);
      return response;
    } catch (error) {
      return error;
    }
  }
);
export const producstSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    product: {}
  },
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.products = [];
    },
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
    [getProduct.pending]: (state, action) => {
      state.product = {};
    },
    [getProduct.fulfilled]: (state, action) => {
      state.product = action.payload;
    },
    [filterProduct.pending]: (state, action) => {
      state.products = null;
    },
    [filterProduct.fulfilled]: (state, action) => {
      state.products = action.payload;
    }
  }
});

//export selector
export const productsSelector = (state) => state.products;
