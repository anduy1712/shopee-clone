import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productsSlice";
import usersReducer from "./reducers/usersSlice";

const store = configureStore({
  reducer: {
    productsReducer,
    usersReducer,
  },
});
export default store;
