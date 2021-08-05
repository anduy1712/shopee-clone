import { configureStore } from "@reduxjs/toolkit";
import productsReducer, { producstSlice } from "./reducers/productsSlice";
import usersReducer from "./reducers/usersSlice";
import { cartsSlice } from "./reducers/cartsSlice";
const store = configureStore({
  reducer: {
    carts: cartsSlice.reducer,
    products: producstSlice.reducer,
    usersReducer,
  },
});
export default store;
