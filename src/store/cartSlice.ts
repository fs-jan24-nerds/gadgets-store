import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { loadFromLocalStorage } from '../utils/localStorage';
import { CartItemType } from '../types/cart';
import { Product } from '../types/Product';

export interface CartState {
  cart: CartItemType[];
}

const persistedState = loadFromLocalStorage<CartItemType[]>('cart');

const initialState: CartState = {
  cart: persistedState ?? [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<CartItemType[]>) => {
      state.cart = action.payload;
    },
    addToCart: (state, action: PayloadAction<Product>) => {
      const isInCart = state.cart.some((cartItem) => cartItem.id === action.payload.id);

      if (isInCart) {
        state.cart = state.cart.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            return {
              ...cartItem,
              count: cartItem.count + 1,
            };
          }
          return cartItem;
        });
      }

      if (!isInCart) {
        state.cart.push({
          id: action.payload.id,
          count: 1,
          product: action.payload,
        });
      }
    },
    removeOneFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          return {
            ...cartItem,
            count: cartItem.count - 1,
          };
        }
        return cartItem;
      });

      state.cart = state.cart.filter((cartItem) => cartItem.count > 0);
    },
    removeAllFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((cartItem) => cartItem.id !== action.payload);
    },
  },
});

export const { setCart, addToCart, removeOneFromCart, removeAllFromCart } = cartSlice.actions;
export default cartSlice.reducer;
