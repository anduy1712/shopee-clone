import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productsSlice";
import usersReducer from "./reducers/usersSlice";
import { cartsSlice } from "./reducers/cartsSlice";
const store = configureStore({
  reducer: {
    carts: cartsSlice.reducer,
    productsReducer,
    usersReducer,
  },
});
export default store;
