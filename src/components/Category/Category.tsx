import phones from './img/phones.png';
import tablets from './img/tablets.png';
import accessories from './img/Accessories.png';
import { CategoryItem } from './CategoryItem';
import { HomeTitle } from '../HomeTitle/HomeTitle';
import { TitleAnimation } from '../../types/titleAnimation';
import { motion } from 'framer-motion';
interface Props {
  sectiomAnimation: TitleAnimation;
}

export const Category: React.FC<Props> = ({ sectiomAnimation }) => {
  return (
    <div className="mb-[56px] tablet:mb-[80px]">
      <HomeTitle title="Shop by category" />
      <motion.div
        className="grid sm:flex gap-4"
        initial="hidden"
        transition={{ delay: 0.7, duration: 1 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        variants={sectiomAnimation}
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
