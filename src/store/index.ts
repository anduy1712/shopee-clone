import { configureStore } from '@reduxjs/toolkit';
import { producstSlice } from './reducers/productsSlice';
import { usersSlice } from './reducers/usersSlice';
import { cartsSlice } from './reducers/cartsSlice';
import { customersSlice } from './reducers/customersSlice';
const store = configureStore({
  reducer: {
    carts: cartsSlice.reducer,
    products: producstSlice.reducer,
    users: usersSlice.reducer,
    customers: customersSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>; // A global type to access reducers types
export type AppDispatch = typeof store.dispatch; // Type to access dispatch

export default store;
