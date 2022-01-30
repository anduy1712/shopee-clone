import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { cloneDeep, isEmpty } from 'lodash';
import cartApi from '../../api/cartApi';
import { FixMeLater } from '../../constant/other';

export const addCartApi = createAsyncThunk(
  'cart/addCartApi',
  async (obj: FixMeLater) => {
    //get cart
    try {
      const response: FixMeLater = await cartApi.getAll();
      //get id cart
      let checkIdInCart = false;
      let cartList = null;
      //Check Cart In Users
      const arrayCart = cloneDeep(response);
      await arrayCart.forEach((item: FixMeLater) => {
        if (item.userId === obj.userId) {
          checkIdInCart = true;
          const { id, title, amount, images, price } = obj;
          let isSame = false;
          //Increase Cart Item
          item.products.forEach((item: FixMeLater) => {
            if (item.productId === id) {
              isSame = true;
              item.amount += amount;
            }
          });
          cartList = cartApi.putCart(item);
          //Add Cart Item in ListCarts
          if (!isSame) {
            const product = {
              productId: id,
              title,
              images,
              price,
              amount
            };
            const test = cloneDeep(item);
            test.products.push(product);
            // item.products.push(product);
            cartList = cartApi.putCart(test);
          }
        }
      });
      //User don't have Cart before
      if (!checkIdInCart) {
        //init cart
        const { id, title, amount, images, price, userId } = obj;
        const cart = {
          userId,
          date: Date.now(),
          products: [
            {
              productId: id,
              title,
              images,
              price,
              amount
            }
          ]
        };
        cartList = await cartApi.postCart(cart);
        return cartList;
      }
      return cartList;
    } catch (error) {}
  }
);
export const postCartApi = createAsyncThunk(
  'cart/postCartApi',
  async (obj: any) => {
    const result = await cartApi.postCart(obj);
    return result;
  }
);
export const getCartByUser = createAsyncThunk(
  'cart/getCartByUser',
  async (id: FixMeLater) => {
    try {
      const response: FixMeLater = await cartApi.getCartByUser(id);
      return response;
    } catch (error) {}
  }
);

export const updateQuantityCartApi = createAsyncThunk(
  'cart/updateQuantityCartApi',
  async (object: FixMeLater) => {
    try {
      //get user
      const { userId, productId, quantity } = object;
      const response: FixMeLater = await cartApi.update(userId, {
        productId,
        quantity
      });

      return response;
    } catch (error) {}
  }
);
export const removeCartApi = createAsyncThunk(
  'cart/removeCartApi',
  async (id) => {
    try {
      //get user
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      const response: FixMeLater = await cartApi.getCartByUser(user.id);
      //Remove Item
      response[0].products = [];
      //Put Cart
      const data = await cartApi.putCart(response[0]);
      return data;
    } catch (error) {}
  }
);
const initialState = {
  cart: [],
  quantity: 0,
  totalCart: 0,
  SearchTheme: false
};
export const cartsSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state: FixMeLater, action) => {
      if (state.cart.length !== 0) {
        const { id, amount } = action.payload;
        let isSame = false;
        state.cart.forEach((item: FixMeLater) => {
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
    amount: (state: FixMeLater, action) => {
      state.quantity = state.cart.reduce((sum: number, item: FixMeLater) => {
        return (sum += item.amount);
      }, 0);
    },
    increase: (state: FixMeLater, action) => {
      state.cart.forEach((item: FixMeLater) => {
        if (item.id === action.payload) {
          item.amount += 1;
        }
      });
      localStorage.setItem('cart', JSON.stringify([...state.cart]));
    },
    decrease: (state, action) => {
      state.cart.forEach((item: FixMeLater) => {
        if (item.id === action.payload) {
          item.amount -= 1;
        }
      });
      state.cart = state.cart.filter((item: FixMeLater) => {
        return item.amount !== 0;
      });
      localStorage.setItem('cart', JSON.stringify([...state.cart]));
    },
    onChangeAmount: (state, action) => {
      state.cart.forEach((item: FixMeLater) => {
        if (item.id === action.payload.id) {
          item.amount = action.payload.value;
        }
      });
      state.cart = state.cart.filter((item: FixMeLater) => {
        return item.amount !== 0;
      });
      localStorage.setItem('cart', JSON.stringify([...state.cart]));
    },
    remove: (state: FixMeLater, action) => {
      state.cart = state.cart.filter(
        (item: FixMeLater) => item.id !== action.payload
      );
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    total: (state: FixMeLater, action) => {
      state.totalCart = state.cart?.reduce(
        (total: number, item: FixMeLater) => {
          return (total += item.amount * item.price);
        },
        0
      );
    },
    getItemCart: (state, action) => {
      let isSame = false;
      const { productId } = action.payload.product;
      state.cart.forEach((item: FixMeLater) => {
        if (item.product.productId === productId) {
          isSame = true;
          item.amount += 1;
        }
      });
      if (!isSame) {
        //add new item cart
        // addCart(action.payload);
      }
    },
    setTheme: (state, action) => {
      state.SearchTheme = action.payload;
    },
    clearCart: (state, action) => {
      state.cart = [];
      state.quantity = 0;
      state.totalCart = 0;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(addCartApi.fulfilled, (state, action: FixMeLater) => {
      state.cart = action.payload.products;
    });
    builder.addCase(getCartByUser.fulfilled, (state, action) => {
      // state.cart = action.payload;
      const { products }: FixMeLater = action.payload;
      state.cart = products;
      state.quantity = products
        ? products.reduce((sum: number, item: FixMeLater) => {
            return (sum += item.quantity);
          }, 0)
        : 0;
      // if (action.payload.length > 0) {
      //   state.cart = action.payload[0].products;
      // }
      // if (isEmpty(action.payload)) {
      //   state.cart = [];
      // }
    });
    builder.addCase(
      updateQuantityCartApi.fulfilled,
      (state, action: FixMeLater) => {
        const { products } = action.payload;
        state.cart = products;
        state.quantity = products
          ? products.reduce((sum: number, item: FixMeLater) => {
              return (sum += item.quantity);
            }, 0)
          : 0;
      }
    );
    builder.addCase(postCartApi.fulfilled, (state, action: FixMeLater) => {
      state.cart = action.payload.products;
      console.log(`action.payload.products`, action.payload.products);
      state.quantity = action.payload.products?.reduce(
        (sum: number, item: FixMeLater) => {
          return (sum += item.quantity);
        },
        0
      );
    });
  }
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
  setTheme,
  clearCart
} = cartsSlice.actions;
//selector
export const cartsSelector = (state: FixMeLater) => state.carts;
