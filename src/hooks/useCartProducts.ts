import { Product } from "../types/Product";
import { useSelector } from "react-redux";
import { setCart } from "../store/cartSlice";
import { RootState } from "../store/store";
import { useDispatch } from "react-redux";

export const useCartProducts = (): [Product[], (product: Product) => void, (productId: Product["id"]) => void] => {
  const dispatch = useDispatch();
  const { cart }= useSelector((state: RootState) => state.cart);

  const addToCart = (...productsToAdd: Product[]) => {
    dispatch(setCart([...cart, ...productsToAdd]));
  }

  const removeFromCartById = (...productIdsToRemove: Product["id"][]) => {
    //since cart can contain multiple of copies of the same product we need to filter out only first item with same id
    const cartCopy = [...cart];

    for (const productIdToRemove of productIdsToRemove) {
      const index = cartCopy.findIndex(product => product.id === productIdToRemove);
      if (index > -1) {
        cartCopy.splice(index, 1);
      }
    }

    dispatch(setCart(cartCopy));
  }

  return [cart, addToCart, removeFromCartById];
}