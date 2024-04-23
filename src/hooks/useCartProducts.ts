import { Product } from '../types/Product';
import { useSelector } from 'react-redux';
import { addToCart, removeAllFromCart, removeOneFromCart } from '../store/cartSlice';
import { RootState } from '../store/store';
import { useDispatch } from 'react-redux';
import { CartItemType } from '../types/cart';

type HookType = {
  cart: CartItemType[];
  addProductToCart: (...productsToAdd: Product[]) => void;
  removeOneFromCartById: (...productIdsToRemove: Product['id'][]) => void;
  removeAllFromCartById: (...productIdsToRemove: Product['id'][]) => void;
};

export const useCartProducts = (): HookType => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: RootState) => state.cart);

  const addProductToCart = (productToAdd: Product) => {
    dispatch(addToCart(productToAdd));
  };

  const removeOneFromCartById = (productIdToRemove: number | string) => {
    dispatch(removeOneFromCart(productIdToRemove));
  };

  const removeAllFromCartById = (productIdToRemove: number | string) => {
    dispatch(removeAllFromCart(productIdToRemove));
  };

  return {
    cart,
    addProductToCart,
    removeOneFromCartById,
    removeAllFromCartById,
  };
};

