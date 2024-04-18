import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import favouritsReducer from './favouriteSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    favourites: favouritsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
