import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import favouritsReducer from './favouriteSlice';
import cartReducer from './cartSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { saveToLocalStorage } from '../utils/localStorage';
import { throttle } from 'lodash';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    favourites: favouritsReducer,
    cart: cartReducer,
  },
});

store.subscribe(
  throttle(() => {
    saveToLocalStorage('cart', store.getState().cart.cart);
    saveToLocalStorage('fav', store.getState().favourites.favouritesProducts);
  }, 500),
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
