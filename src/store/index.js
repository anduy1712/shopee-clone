import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productsSlice";
import usersReducer from "./reducers/usersSlice";
import cartsReducer from "./reducers/cartsSlice";
const store = configureStore({
  reducer: {
    productsReducer,
    usersReducer,
    cartsReducer,
  },
});
export default store;
