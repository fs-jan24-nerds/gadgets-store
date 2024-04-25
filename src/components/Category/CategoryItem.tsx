import { Link } from 'react-router-dom';

type Props = {
  image: string;
  bgColor: string;
  description: string;
  title: string;
  subtitle: string;
};

export const CategoryItem: React.FC<Props> = ({ image, bgColor, description, title, subtitle }) => {
  return (
    <>
      <div className="w-full h-full">
        <Link
          to={description}
          style={{ backgroundColor: bgColor }}
          className="mb-4 flex justify-end md:mb-6"
        >
          <img
            src={image}
            alt={description}
            className="object-cover w-full h-full max-w-[368px] max-h-[368px] transition-scale duration-300 hover:scale-105 hover:translate-x-[-2.5%] hover:translate-y-[-2.5%]"
          />
        </Link>
        <Link
          to={description}
          className="font-Mont font-semibold text-base leading-[25.56px] text-left text-[#313237] mb-1 block"
        >
          {title}
        </Link>
        <Link
          to={description}
          className="font-Mont font-semibold text-sm leading-[21px] text-left text-[#89939A] mb-6 block"
        >
          {subtitle}
        </Link>
      </div>
    </>
  );
};
