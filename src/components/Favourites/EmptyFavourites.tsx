import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { generateAnimation } from '../../utils/animations';

import emptyFav from '../../assets/emptyFav.png';

export const EmptyFavourites = () => {
  return (
    <motion.div
      initial="hidden"
      transition={{ delay: 0.4, duration: 0.5 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      variants={generateAnimation('y', -50)}
      className="flex flex-col items-center justify-center text-secondary text-[25px] tablet:text-[32px] font-mont-semi-Bold gap-y-[20px]"
    >
      <h1>You have no selected items</h1>
      <img className="mb-[20px] w-[250px] laptop:w-[350px]" src={emptyFav} alt="emptyFav" />
      <Link
        to={'../'}
        className="flex items-center justify-center w-full tablet:w-[30%] h-[40px] font-bold text-sm bg-accent  text-white  rounded-[10px]  transition-all duration-300 hover:shadow-3xl hover:bg-accent-hover"
      >
        Continue shopping
      </Link>
    </motion.div>
  );
};
