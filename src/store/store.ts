import { configureStore } from '@reduxjs/toolkit';
import { throttle } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';

import { saveToLocalStorage } from '../utils/localStorage';
import sortReduser from './SortSlice';
import cartReducer from './cartSlice';
import favouritsReducer from './favouriteSlice';
import perPageReduser from './perPageSlice';
import productsReducer from './productsSlice';
import themeReducer from './themeSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    favourites: favouritsReducer,
    cart: cartReducer,
    sort: sortReduser,
    perPage: perPageReduser,
    theme: themeReducer,
  },
});

store.subscribe(
  throttle(() => {
    saveToLocalStorage('cart', store.getState().cart.cart);
    saveToLocalStorage('fav', store.getState().favourites.favouritesProducts);
    saveToLocalStorage('theme', store.getState().theme);
  }, 500),
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
