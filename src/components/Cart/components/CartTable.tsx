import { useCartProducts } from '../../../hooks/useCartProducts';
import { CartItem } from './CartItem';

export const CartTable: React.FC = () => {
  const { cart } = useCartProducts();

  return (
    <div className="mb-[32px]">
      {cart.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
  );
};
