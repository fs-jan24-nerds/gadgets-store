import { motion } from 'framer-motion';
type Props = {
  title: string;
};

export const Title: React.FC<Props> = ({ title }) => {
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
  const titleStyles =
    'font-mont-Bold font-extrabold text-[32px] leading-[41px]  text-primary tracking-[-1%] text-left tablet:leading-[56px] tablet:text-[48px]';

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.1, duration: 0.6 }}
      variants={titleAnimation}
      className={`${titleStyles}`}
    >
      {title}
    </motion.h1>
  );
};
