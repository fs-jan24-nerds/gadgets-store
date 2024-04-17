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
        {/* <a href="#" style={{ backgroundColor: bgColor }} className="sm:w-full sm:h-full mb-4 block md:mb-6"> */}
        <a href="#" style={{ backgroundColor: bgColor }} className="mb-4 block md:mb-6">
          <img src={image} alt={description} className="sm:w-full sm:h-full" />
        </a>
        <a
          href="#"
          className="font-Mont font-semibold text-base leading-[25.56px] text-left text-[#313237] mb-1 block"
        >
          {title}
        </a>
        <a
          href="#"
          className="font-Mont font-semibold text-sm leading-[21px] text-left text-[#89939A] mb-6 block"
        >
          {subtitle}
        </a>
      </div>
    </>
  );
};
