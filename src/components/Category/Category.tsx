import { motion } from 'framer-motion';

import { SubTitle } from '../SubTitle/SubTitle';
import { CategoryItem } from './CategoryItem';

import { generateAnimation } from '../../utils/animations';

import accessories from '../../assets/Accessories.png';
import phones from '../../assets/phones.png';
import tablets from '../../assets/tablets.png';

export const Category = () => {
  return (
    <div className="mb-[56px] tablet:mb-[80px]">
      <SubTitle title="Shop by category" />
      <motion.div
        className="grid sm:flex gap-4"
        initial="hidden"
        transition={{ delay: 0.5, duration: 0.6 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        variants={generateAnimation('y', -50)}
      >
        <CategoryItem
          image={phones}
          bgColor="#6D6474"
          description="phones"
          title="Mobile phones"
          subtitle="95 models"
        />
        <CategoryItem
          image={tablets}
          bgColor="#8D8D92"
          description="tablets"
          title="Tablets"
          subtitle="24 models"
        />
        <CategoryItem
          image={accessories}
          bgColor="#D53C51"
          description="accessories"
          title="Accessories"
          subtitle="100 models"
        />
      </motion.div>
    </div>
  );
};
