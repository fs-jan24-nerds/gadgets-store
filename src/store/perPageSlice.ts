import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PerPageState {
  itemsPerPage: number;
}

const initialState: PerPageState = {
  itemsPerPage: 10,
};

const perPageSlice = createSlice({
  name: 'perPage',
  initialState,
  reducers: {
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
    },
  },
});

export const { setItemsPerPage } = perPageSlice.actions;
export default perPageSlice.reducer;

export const selectItemsPerPage = (state: { perPage: PerPageState }) => state.perPage.itemsPerPage;
