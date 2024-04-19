import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { FavouriteProduct } from '../types/Product';
import { loadFromLocalStorage } from '../utils/localStorage';

export interface FavouritesState {
  favouritesProducts: FavouriteProduct[];
}

const persistedState = loadFromLocalStorage<FavouriteProduct[]>('fav');

const initialState: FavouritesState = {
  favouritesProducts: persistedState ?? [],
 };

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addFavourites: (state, action: PayloadAction<FavouriteProduct>) => {
      state.favouritesProducts.push({...action.payload})
    },
    removeFavourite(state, action: PayloadAction<number>) {
      state.favouritesProducts = state.favouritesProducts.filter((obj) => obj.id !== action.payload);
    },
   }
  });

export const { addFavourites, removeFavourite } = favouritesSlice.actions;
export default favouritesSlice.reducer;
