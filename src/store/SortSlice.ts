import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SortStatus } from '../types/enums';

export interface SortState {
  filter: SortStatus;
}

const initialState = {
  filter: SortStatus.Newest,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<SortStatus>) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;

export const selectCurrentFilter = (state: { filter: SortState }) => state.filter.filter;