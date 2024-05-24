import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { Product } from '../types/Product';
import { loadFromLocalStorage } from '../utils/localStorage';

export interface FavouritesState {
  favouritesProducts: Product[];
}

const persistedState = loadFromLocalStorage<Product[]>('fav');

const initialState: FavouritesState = {
  favouritesProducts: persistedState ?? [],
};

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addFavourites: (state, action: PayloadAction<Product>) => {
      state.favouritesProducts.push({ ...action.payload });
    },
    removeFavourite(state, action: PayloadAction<number>) {
      state.favouritesProducts = state.favouritesProducts.filter(
        (obj) => obj.id !== action.payload,
      );
    },
  },
});

export const { addFavourites, removeFavourite } = favouritesSlice.actions;
export default favouritesSlice.reducer;
