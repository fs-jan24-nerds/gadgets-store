import { motion } from 'framer-motion';
import { useState } from 'react';

import { MyModal } from '../Modal/MyModal';

import { useCartProducts } from '../../hooks/useCartProducts';
import { clearCart } from '../../store/cartSlice';
import { useAppDispatch } from '../../store/store';
import { generateAnimation } from '../../utils/animations';

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
      transition={{ delay: 0.4, duration: 0.5 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      variants={generateAnimation('x', 50)}
      className="flex flex-col items-center justify-center border border-elements p-[24px]"
    >
      <p className="font-Mont font-extrabold text-3xl leading-10 tracking-tighter text-primary">
        {`$${total}`}
      </p>

      <p className="font-Mont font-medium text-base leading-6 text-secondary mb-5">
        Total for {totalItems} items
      </p>

      <div className="bg-secondary w-full h-1 mb-[24px]"></div>

      <button
        className="w-full h-12 bg-accent hover:bg-accent-hover text-white font-Mont font-bold text-base leading-6 text-center"
        onClick={() => setIsModal(true)}
      >
        Checkout
      </button>
      <MyModal visible={isModal} changeVisible={setIsModal}>
        <div className="text-primary text-center">
          <h1 className="font-extrabold text-[25px] text-primary md:text-[30px] mb-[30px] desktop:mb-[50px]">
            Do you want to confirm the order?
          </h1>
          <div className="flex items-center justify-between gap-3">
            <button
              className="w-full h-[40px] bg-accent text-white font-Mont font-bold text-base leading-6 text-center tablet:w-[170px] transition-all duration-300 hover:shadow-3xl hover:bg-accent-hover"
              onClick={() => setIsModal(false)}
            >
              No
            </button>
            <button
              className="flex items-center justify-center w-full h-[40px] bg-accent text-white font-Mont font-bold text-base leading-6 transition-all duration-300 hover:shadow-3xl hover:bg-accent-hover  tablet:w-[170px]"
              onClick={orderСonfirmedAction}
            >
              Yes
            </button>
          </div>
        </div>
      </MyModal>
    </motion.div>
  );
};
