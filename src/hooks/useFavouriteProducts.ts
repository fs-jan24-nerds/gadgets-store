import { FavouriteProduct } from "../types/Product";
import { useAppDispatch, useAppSelector } from "../store/store";
import { setFavourites } from "../store/favouriteSlice";

export const useFavouritesProducts = (): [FavouriteProduct[], (product: FavouriteProduct) => void] => {
  const dispatch = useAppDispatch();
  const { favouritesProducts } = useAppSelector(state => state.favourites);

  const addToFavourites = (productToAdd: FavouriteProduct) => {
    dispatch(setFavourites([...favouritesProducts, productToAdd]));
  };

  return [favouritesProducts, addToFavourites];
}

