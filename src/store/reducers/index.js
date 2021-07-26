import { configureStore } from "@reduxjs/toolkit";
import producstSlice from "./productsSlice";

const store = configureStore({
  reducer: {
    producstSlice,
  },
});
export default store;
