import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types/Product';
import { loadFromLocalStorage } from '../utils/localStorage';

export interface CartState {
  cart: Product[];
}

const persistedState = loadFromLocalStorage<Product[]>('cart');

const initialState: CartState = {
  cart: persistedState ?? [],
};

export const cartSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<Product[]>) => {
      state.cart = action.payload;
    },
  },
});

export const { setCart } = cartSlice.actions;
export default cartSlice.reducer;