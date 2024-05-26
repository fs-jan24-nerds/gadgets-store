import { motion } from 'framer-motion';

import { generateAnimation } from '../../utils/animations';

type Props = {
  title: string;
};

export const SubTitle: React.FC<Props> = ({ title }) => {
  return (
    <motion.h2
      initial="hidden"
      transition={{ delay: 0.3, duration: 0.5 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      variants={generateAnimation('y', -50)}
      className="font-mont-Bold text-[22px] text-primary xs:text-[32px]   mb-6"
    >
      {title}
    </motion.h2>
  );
};
