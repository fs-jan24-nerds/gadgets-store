import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';
import { Product } from '../types/Product';
import { CartItemType } from '../types/cart';
import { loadFromLocalStorage } from '../utils/localStorage';

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
        toast.success('The product has been successfully added to the cart');
      }
    },
    removeOneFromCart: (state, action: PayloadAction<number | string>) => {
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
    removeAllFromCart: (state, action: PayloadAction<number | string>) => {
      state.cart = state.cart.filter((cartItem) => cartItem.id !== action.payload);
      toast.warn('The product has been successfully removed from the shopping cart');
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { setCart, addToCart, removeOneFromCart, removeAllFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
