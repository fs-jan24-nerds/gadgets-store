import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SortStatus } from '../types/enums';

export interface SortState {
  sort: SortStatus;
}

const initialState = {
  sort: SortStatus.Newest,
};

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSort: (state, action: PayloadAction<SortStatus>) => {
      state.sort = action.payload;
    },
  },
});

export const { setSort } = sortSlice.actions;

export default sortSlice.reducer;

export const selectCurrentSort = (state: { sort: SortState }) => state.sort.sort;
