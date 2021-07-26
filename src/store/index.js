import { configureStore } from "@reduxjs/toolkit";
import producstSlice from "./reducers/productsSlice";

const store = configureStore({
  reducer: {
    producstSlice,
  },
});
export default store;
