import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { Theme } from 'react-toastify';

import { loadFromLocalStorage } from '../utils/localStorage';

export interface ThemeState {
  theme: Theme;
}

const persistedState = loadFromLocalStorage<ThemeState>('theme');

const initialState: ThemeState = {
  theme: persistedState ? persistedState.theme : 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeState>) => {
      state.theme = action.payload.theme;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
