import { configureStore } from '@reduxjs/toolkit';
import { producstSlice } from './reducers/productsSlice';
import { usersSlice } from './reducers/usersSlice';
import { cartsSlice } from './reducers/cartsSlice';
const store = configureStore({
  reducer: {
    carts: cartsSlice.reducer,
    products: producstSlice.reducer,
    users: usersSlice.reducer
  }
});
export default store;
