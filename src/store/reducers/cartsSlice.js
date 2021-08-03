import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartApi from "../../api/cartApi";

export const getCart = createAsyncThunk("cart/getCart", async (id) => {
  const response = await cartApi.getCart(id);
  return response;
});
const cartsSlice = createSlice({
  name: "cart",
  initialState: {
    carts: [],
    product: {},
  },
  reducers: [],
  extraReducers: {
    [getCart.fulfilled]: (state, action) => {
      state.carts = action.payload;
    },
  },
});

const cartsReducer = cartsSlice.reducer;
//selector
export const cartsSelector = (state) => state.cartsReducer.carts;
export default cartsReducer;
