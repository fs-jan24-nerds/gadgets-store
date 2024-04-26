import { useState } from 'react';
import { useCartProducts } from '../../../hooks/useCartProducts';
import { useAppDispatch } from '../../../store/store';
import { clearCart } from '../../../store/cartSlice';
import { MyModal } from '../../Modal/MyModal';
import { motion } from 'framer-motion';
import { generateAnimation } from '../../../utils/animations';

type Props = {
  onComfirmed: (_: boolean) => void;
};

export const Checkout: React.FC<Props> = ({ onComfirmed }) => {
  const { cart } = useCartProducts();
  const total = cart.reduce((acc, cartItem) => acc + cartItem.product.price * cartItem.count, 0);
  const totalItems = cart.reduce((acc, cartItem) => acc + cartItem.count, 0);
  const [isModal, setIsModal] = useState(false);
  const dispatch = useAppDispatch();

  const orderСonfirmedAction = () => {
    setIsModal(false);
    dispatch(clearCart());
    onComfirmed(true);
  };

  return (
    <motion.div
      initial="hidden"
      transition={{ delay: 0.6, duration: 0.8 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      variants={generateAnimation('x', 50)}
      className="flex flex-col items-center justify-center border border-gray-300 p-[24px]"
    >
      <p className="font-Mont font-extrabold text-3xl leading-10 tracking-tighter text-primary">
        {`$${total}`}
      </p>

      <p className="font-Mont font-medium text-base leading-6 text-secondary mb-5">
        Total for {totalItems} items
      </p>

      <div className="bg-secondary w-full h-1 mb-[24px]"></div>

      <button
        className="w-full h-12 bg-primary text-white font-Mont font-bold text-base leading-6 text-center"
        onClick={() => setIsModal(true)}
      >
        Checkout
      </button>
      <MyModal visible={isModal} changeVisible={setIsModal}>
        <div className="text-primary text-center">
          <h1 className="font-extrabold text-[25px] md:text-[30px] mb-[35px]">
            Do you want to confirm the order?
          </h1>
          <div className="flex items-center justify-between gap-3">
            <button
              className="flex items-center justify-center w-full h-[40px] bg-primary text-white font-Mont font-bold text-base leading-6"
              onClick={orderСonfirmedAction}
            >
              Yes
            </button>
            <button
              className="w-full h-[40px] bg-primary text-white font-Mont font-bold text-base leading-6 text-center"
              onClick={() => setIsModal(false)}
            >
              No
            </button>
          </div>
        </div>
      </MyModal>
    </motion.div>
  );
};
