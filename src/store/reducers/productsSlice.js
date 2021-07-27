import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("products/get", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
});

const producstSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {},
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
  },
});
//reducers
const productsReducer = producstSlice.reducer;
//get state
export const productsSelector = (state) => state.productsReducer.products;
export default productsReducer;
