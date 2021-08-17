import { createSlice } from '@reduxjs/toolkit';

const cart = JSON.parse(localStorage.getItem('cart'))
  ? JSON.parse(localStorage.getItem('cart'))
  : [];
const initialState = {
  cart,
  quantity: 0,
  totalCart: 0,
  SearchTheme: false
};
export const cartsSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action) => {
      if (state.cart.length !== 0) {
        const { id, amount } = action.payload;
        let isSame = false;
        state.cart.forEach((item) => {
          if (item.id === id) {
            isSame = true;
            item.amount += amount;
          }
        });
        localStorage.setItem('cart', JSON.stringify(state.cart));
        if (!isSame) {
          state.cart = [...state.cart, action.payload];
          localStorage.setItem('cart', JSON.stringify([...state.cart]));
        }
      } else {
        state.cart = [...state.cart, action.payload];
        //Create cart in localstorage
        localStorage.setItem('cart', JSON.stringify([action.payload]));
      }
    },
    amount: (state, action) => {
      state.quantity = state.cart.reduce((sum, item) => {
        return (sum += item.amount);
      }, 0);
    },
    increase: (state, action) => {
      state.cart.forEach((item) => {
        if (item.id === action.payload) {
          item.amount += 1;
        }
      });
      localStorage.setItem('cart', JSON.stringify([...state.cart]));
    },
    decrease: (state, action) => {
      state.cart.forEach((item) => {
        if (item.id === action.payload) {
          item.amount -= 1;
        }
      });
      state.cart = state.cart.filter((item) => {
        return item.amount !== 0;
      });
      localStorage.setItem('cart', JSON.stringify([...state.cart]));
    },
    onChangeAmount: (state, action) => {
      state.cart.forEach((item) => {
        if (item.id === action.payload.id) {
          item.amount = action.payload.value;
        }
      });
      state.cart = state.cart.filter((item) => {
        return item.amount !== 0;
      });
      localStorage.setItem('cart', JSON.stringify([...state.cart]));
    },
    remove: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    total: (state, action) => {
      state.totalCart = state.cart.reduce((total, item) => {
        return (total += item.amount * item.price);
      }, 0);
    },
    getItemCart: (state, action) => {
      let isSame = false;
      const { productId } = action.payload.product;
      console.log(state.cart, '1');
      const test = state.cart.forEach((item) => {
        if (item.product.productId === productId) {
          isSame = true;
          item.amount += 1;
        }
      });
      console.log(test, '2');
      if (!isSame) {
        //add new item cart
        // addCart(action.payload);
      }
    },
    setTheme: (state, action) => {
      state.SearchTheme = action.payload;
    }
  },
  extraReducers: {}
});
//export action
export const {
  addCart,
  amount,
  increase,
  decrease,
  onChangeAmount,
  remove,
  total,
  getItemCart,
  setTheme
} = cartsSlice.actions;
//selector
export const cartsSelector = (state) => state.carts;
