import { useCartProducts } from '../../../hooks/useCartProducts';
import { CartItemType } from '../../../types/cart';
import { motion } from 'framer-motion';
import { generateAnimation } from '../../../utils/animations';
import classNames from 'classnames';
import { CloseIcon } from '../../Icons/CloseIcon';

type Props = {
  cartItem: CartItemType;
};

export const CartItem: React.FC<Props> = ({ cartItem }) => {
  const { count, id, product } = cartItem;
  const { image, name, price } = product;

  const { addProductToCart, removeOneFromCartById, removeAllFromCartById } = useCartProducts();

  const handleRemoveOne = () => {
    if (count > 1) {
      removeOneFromCartById(id);
    }
  };

  return (
    <motion.div
      initial="hidden"
      transition={{ delay: 0.4, duration: 0.5 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      variants={generateAnimation('x', -50)}
      className="sm:flex items-center bg-surface-1 justify-between gap-[24px] p-[24px] border border-interface-border mb-[16px]"
    >
      <div className="sm:mb-0 flex gap-[24px] items-center justify-start mb-7">
        <button onClick={() => removeAllFromCartById(id)}>
          <span className="text-secondary text-base">
            <CloseIcon />
          </span>
        </button>

        <div className="h-[100%] max-w-[70px] min-w-[70px]">
          <img src={image} alt="phone" />
        </div>
        <p className="font-Mont text-base font-semibold leading-6 text-primary">{name}</p>
      </div>
      <div className="flex gap-[24px] justify-between px-10 sm:px-0">
        <div className="flex items-center gap-2 font-Mont text-base font-semibold text-primary">
          <button
            className={classNames('border border-gray-300 bg-surface-2 px-3 py-1', {
              'opacity-50 cursor-default': count === 1,
            })}
            onClick={handleRemoveOne}
          >
            -
          </button>

          <span className="text-base text-primary">{count}</span>

          <button
            className="border border-gray-300 bg-surface-2 px-3 py-1"
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
