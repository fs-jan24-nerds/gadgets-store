import { motion } from 'framer-motion';
type Props = {
  title: string;
};

export const HomeTitle: React.FC<Props> = ({ title }) => {
  const titleAnimation = {
    hidden: {
      y: -120,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.h2
      initial="hidden"
      transition={{ delay: 0.3, duration: 0.6 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      variants={titleAnimation}
      className="font-mont-Bold text-[22px] text-primary xs:text-[32px]   mb-6"
    >
      {title}
    </motion.h2>
  );
};
