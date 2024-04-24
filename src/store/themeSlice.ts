import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { loadFromLocalStorage } from '../utils/localStorage';
import { Theme } from 'react-toastify';

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
