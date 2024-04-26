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
      const MAX_ITEMS_PER_PAGE = 24; // Максимально дозволене значення
      const MIN_ITEMS_PER_PAGE = 4; // Мінімально дозволене значення

      // Обмежуємо значення в межах дозволеного діапазону
      const validItemsPerPage = Math.max(
        MIN_ITEMS_PER_PAGE,
        Math.min(MAX_ITEMS_PER_PAGE, action.payload),
      );

      state.itemsPerPage = validItemsPerPage; // Оновлюємо з перевіреним значенням
    },
  },
});

export const { setItemsPerPage } = perPageSlice.actions;
export default perPageSlice.reducer;

export const selectItemsPerPage = (state: { perPage: PerPageState }) => state.perPage.itemsPerPage;
