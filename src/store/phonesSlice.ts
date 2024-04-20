import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Item } from '../types/Product';

export interface PhonesState {
  isLoaded: boolean;
  phones: Item[];
}

const initialState: PhonesState = {
  isLoaded: false,
  phones: [],
};

export const phonesSlice = createSlice({
  name: 'phones',
  initialState,
  reducers: {
    setPhones: (state, action: PayloadAction<Item[]>) => {
      state.isLoaded = true;
      state.phones = action.payload;
    },
  },
});

export const { setPhones } = phonesSlice.actions;
export default phonesSlice.reducer;
