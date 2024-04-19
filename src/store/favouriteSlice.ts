import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { FavouriteProduct } from '../types/Product';


export interface FavouritesState {
  favouritesProducts: FavouriteProduct[];
}

const initialState: FavouritesState = {
  favouritesProducts: [],
};

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    setFavourites: (state, action: PayloadAction<FavouriteProduct[]>) => {
      state.favouritesProducts = action.payload
    }
   }
  });
export const { setFavourites } = favouritesSlice.actions;
export default favouritesSlice.reducer;
