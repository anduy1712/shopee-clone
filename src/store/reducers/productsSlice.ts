import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import productApi from '../../api/productApi';
import { FixMeLater } from '../../constant/other';
import {
  ProductInputModel,
  ProductOutputModel
} from '../../models/product/product.type';
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
  async (id: any) => {
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
  async (name: FixMeLater) => {
    try {
      const response = await productApi.filterProduct(name);
      return response;
    } catch (error) {
      return error;
    }
  }
);
export type initialProductType = {
  products: ProductOutputModel[];
  product: Partial<ProductOutputModel>;
};
const initialState: initialProductType = {
  products: [],
  product: {}
};
export const producstSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.products = [];
    });
    builder.addCase(getProducts.fulfilled, (state: FixMeLater, action) => {
      state.products = action.payload;
    });
    builder.addCase(getProduct.pending, (state: FixMeLater, action) => {
      state.product = {};
    });
    builder.addCase(getProduct.fulfilled, (state: FixMeLater, action) => {
      state.product = action.payload;
    });
    builder.addCase(filterProduct.pending, (state: FixMeLater, action) => {
      state.products = null;
    });
    builder.addCase(filterProduct.fulfilled, (state: FixMeLater, action) => {
      state.products = action.payload;
    });
  }
});

//export selector
export const productsSelector = (state: FixMeLater) => state.products;
