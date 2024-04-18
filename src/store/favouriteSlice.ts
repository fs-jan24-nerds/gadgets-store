import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { FavouriteProduct } from '../types/Product';

export interface FavouritesState {
  products: FavouriteProduct[];
  isLike: boolean;
}

const initialState: FavouritesState = {
  products: [],
  isLike: false
};


export const favouritesSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToFavourites: (state, action: PayloadAction<FavouriteProduct>) => {
      state.products.push({
        ...action.payload,
      });
     
    },
   
  }
  
});
export const { addToFavourites } = favouritesSlice.actions;
export default favouritesSlice.reducer;