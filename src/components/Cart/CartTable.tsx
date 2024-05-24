import { CartItem } from './CartItem';

import { useCartProducts } from '../../hooks/useCartProducts';

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
