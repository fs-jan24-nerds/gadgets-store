import phones from './img/phones.png';
import tablets from './img/tablets.png';
import accessories from './img/Accessories.png';
import { CategoryItem } from './CategoryItem';

export const Category = () => {
  return (
    <>
      <h1 className="font-mont font-bold leading-[41px] tracking-tighter text-gray-900 text-left mb-6 md:text-[32px] sm:text-[22px]">
        Shop by category
      </h1>
      <div className="block sm:space-y-8 md:flex gap-4 md:space-y-0">
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
      </div>
    </>
  );
};
