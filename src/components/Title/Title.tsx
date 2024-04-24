type Props = {
  title: string ;
};

export const Title: React.FC<Props> = ({ title }) => {
  const titleStyles =
    'font-mont-Bold font-extrabold text-[32px] leading-[41px]  text-primary tracking-[-1%] text-left tablet:leading-[56px] tablet:text-[48px]';

  return <h1 className={`${titleStyles}`}>{title}</h1>;
};
