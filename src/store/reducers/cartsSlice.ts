import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import cartApi from '../../api/cartApi';
import { FixMeLater } from '../../constant/other';
import { CartRequest, CartType } from '../../models/cart/Cart.type';
import { createGenericSlice, GenericState } from '../types/index.type';

// export const addCartApi = createAsyncThunk(
//   'cart/addCartApi',
//   async (obj: FixMeLater) => {
//     //get cart
//     try {
//       const response: FixMeLater = await cartApi.getAll();
//       //get id cart
//       let checkIdInCart = false;
//       let cartList = null;
//       //Check Cart In Users
//       const arrayCart = cloneDeep(response);
//       await arrayCart.forEach((item: FixMeLater) => {
//         if (item.userId === obj.userId) {
//           checkIdInCart = true;
//           const { id, title, amount, images, price } = obj;
//           let isSame = false;
//           //Increase Cart Item
//           item.products.forEach((item: FixMeLater) => {
//             if (item.productId === id) {
//               isSame = true;
//               item.amount += amount;
//             }
//           });
//           cartList = cartApi.putCart(item);
//           //Add Cart Item in ListCarts
//           if (!isSame) {
//             const product = {
//               productId: id,
//               title,
//               images,
//               price,
//               amount
//             };
//             const test = cloneDeep(item);
//             test.products.push(product);
//             // item.products.push(product);
//             cartList = cartApi.putCart(test);
//           }
//         }
//       });
//       //User don't have Cart before
//       if (!checkIdInCart) {
//         //init cart
//         const { id, title, amount, images, price, userId } = obj;
//         const cart = {
//           userId,
//           date: Date.now(),
//           products: [
//             {
//               productId: id,
//               title,
//               images,
//               price,
//               amount
//             }
//           ]
//         };
//         cartList = await cartApi.postCart(cart);
//         return cartList;
//       }
//       return cartList;
//     } catch (error) {}
//   }
// );
export const postCartApi = createAsyncThunk(
  'cart/postCartApi',
  async (obj: CartRequest) => {
    const result = await cartApi.postCart(obj);
    return result;
  }
);
export const getCartByUser = createAsyncThunk(
  'cart/getCartByUser',
  async (id: string) => {
    try {
      const response = await cartApi.getCartByUser(id);
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
      const response = await cartApi.update(userId, {
        productId,
        quantity
      });

      return response;
    } catch (error) {}
  }
);

type initStateCart = {
  cart: CartType[];
  quantity: number;
  totalCart: number;
  SearchTheme: boolean;
};

const initialState: GenericState<initStateCart> = {
  data: {
    cart: [],
    quantity: 0,
    totalCart: 0,
    SearchTheme: false
  },
  status: 'loading',
  error: ''
};

export const cartsSlice = createGenericSlice({
  name: 'cart',
  initialState,
  reducers: {
    setTheme: (state: GenericState<initStateCart>, action) => {
      const { data } = state;
      if (data) {
        data.SearchTheme = action.payload;
      }
    }
  },
  extraReducers: (builder: any) => {
    builder.addCase(
      getCartByUser.fulfilled,
      (state: GenericState<initStateCart>, action: PayloadAction) => {
        const { products }: FixMeLater = action.payload;
        const { data } = state;
        if (data) {
          data.cart = products;
          data.totalCart = products
            ? products.reduce((sum: number, item: FixMeLater) => {
                return (sum += item.quantity * item.price);
              }, 0)
            : 0;
          data.quantity = products
            ? products.reduce((sum: number, item: FixMeLater) => {
                return (sum += item.quantity);
              }, 0)
            : 0;
        }
      }
    );
    builder.addCase(
      updateQuantityCartApi.fulfilled,
      (state: GenericState<initStateCart>, action: PayloadAction) => {
        const { products }: FixMeLater = action.payload;
        const { data } = state;
        if (data) {
          data.cart = products;
          data.quantity = products
            ? products.reduce((sum: number, item: FixMeLater) => {
                return (sum += item.quantity);
              }, 0)
            : 0;
        }
      }
    );
    builder.addCase(
      postCartApi.fulfilled,
      (state: GenericState<initStateCart>, action: FixMeLater) => {
        const { data } = state;
        if (data) {
          data.cart = action.payload.products;
          data.quantity = action.payload.products?.reduce(
            (sum: number, item: FixMeLater) => {
              return (sum += item.quantity);
            },
            0
          );
        }
      }
    );
  }
});
//export action
export const { setTheme } = cartsSlice.actions;
//selector
export const cartsSelector = (state: FixMeLater) => state.carts;
