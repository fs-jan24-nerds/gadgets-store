import { useCartProducts } from '../../../hooks/useCartProducts';
import { CartItemType } from '../../../types/cart';
import { motion } from 'framer-motion';
import { generateAnimation } from '../../../utils/animations';

type Props = {
  cartItem: CartItemType;
};

export const CartItem: React.FC<Props> = ({ cartItem }) => {
  const { count, id, product } = cartItem;

  const { image, name, price } = product;

  const { addProductToCart, removeOneFromCartById, removeAllFromCartById } = useCartProducts();

  return (
    <motion.div
      initial="hidden"
      transition={{ delay: 0.4, duration: 0.5 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      variants={generateAnimation('x', -50)}
      className="sm:flex items-center justify-between gap-[24px] p-[24px] border border-surface-3 mb-[16px] bg-surface-1"
    >
      <div className="sm:mb-0 flex gap-[24px] items-center justify-start mb-7">
        <button onClick={() => removeAllFromCartById(id)}>
          <span className="text-secondary text-base">X</span>
        </button>

        <div className="h-[100%] max-w-[70px] min-w-[70px]">
          <img src={image} alt="phone" />
        </div>
        <p className="font-Mont text-base font-semibold leading-6 text-primary">{name}</p>
      </div>
      <div className="flex gap-[24px] justify-center">
        <div className="flex items-center gap-2 font-Mont text-base font-semibold text-primary">
          <button
            className="border border-gray-500 px-3 py-1"
            onClick={() => removeOneFromCartById(id)}
          >
            -
          </button>

          <span className="text-base text-primary">{count}</span>

          <button
            className="border border-gray-500 px-3 py-1"
            onClick={() => addProductToCart(product)}
          >
            +
          </button>
        </div>

        <p className="font-Mont text-2xl font-bold leading-8 text-right text-primary">
          {`$${price}`}
        </p>
      </div>
    </motion.div>
  );
};
