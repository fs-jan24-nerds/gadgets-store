import { FavouriteProduct } from "../types/Product";
import { useAppDispatch, useAppSelector } from "../store/store";
import { addFavourites, removeFavourite } from "../store/favouriteSlice";


export const useFavouritesProducts = (): [
  FavouriteProduct[],
  (product: FavouriteProduct) => void,
  (productId: number) => void
]  => {
  const dispatch = useAppDispatch();
  const { favouritesProducts } = useAppSelector(state => state.favourites);

  const addToFavourites = (product: FavouriteProduct) => {
    dispatch(addFavourites(product));
  };

  const removeFromFavourites = (productId?: number) => {
    if (productId !== undefined) {
      dispatch(removeFavourite(productId));
    }
  };

  return [favouritesProducts, addToFavourites, removeFromFavourites];
}


