import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("products/get", async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (error) {
    return error;
  }
});
export const getProduct = createAsyncThunk(
  "products/getProduct",
  async (id) => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
);
const producstSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    product: {},
  },
  reducers: {},
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
    [getProduct.fulfilled]: (state, action) => {
      state.product = action.payload;
    },
  },
});
//reducers
const productsReducer = producstSlice.reducer;
//get state
export const productsSelector = (state) => state.productsReducer.products;
export const productSelector = (state) => state.productsReducer.product;

export default productsReducer;
