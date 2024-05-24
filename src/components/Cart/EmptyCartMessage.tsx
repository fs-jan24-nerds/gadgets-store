import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { generateAnimation } from '../../utils/animations';

import emptyCart from '../../assets/emptyCart.png';

export const EmptyCartMessage = () => (
  <div>
    <motion.div
      initial="hidden"
      transition={{ delay: 0.4, duration: 0.5 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      variants={generateAnimation('y', -50)}
      className="flex flex-col items-center justify-center text-secondary text-[25px] tablet:text-[32px] mt-[-30px] font-mont-semi-Bold "
    >
      <h1>Your basket is empty :(</h1>
      <p className="text-[15px] tablet:text-[20px]">But it is never too late to fix it :)</p>
      <img className="w-[350px]" src={emptyCart} alt="emptyCart" />
      <Link
        to={'../'}
        className="flex items-center justify-center w-full tablet:w-[30%] h-[40px] font-bold text-sm bg-accent  text-white  rounded-[10px]  transition-all duration-300 hover:shadow-3xl hover:bg-accent-hover"
      >
        Continue shopping
      </Link>
    </motion.div>
  </div>
);
