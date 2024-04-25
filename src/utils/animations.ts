export const generateAnimation = (property: string, num: number) => {
  const animation = {
    hidden: {
      opacity: 0,
      [property]: num,
    },
    visible: {
      opacity: 1,
      [property]: 0,
    },
  };
  return animation;
};
