import { Category } from '../components/Category/Category';
import { SliderModels } from '../components/SliderModels/SliderModels';
import SliderPromo from '../components/SliderPromo/SliderPromo';
import { Product } from '../types/Product';

const sortByYear = (a: Product, b: Product): number => {
  const aYear = a.year ?? 0;
  const bYear = b.year ?? 0;

  return bYear - aYear;
};

export const HomePage = () => {
  const filterForNewModel = (products: Product[]) => {
    return products
      .filter((product) => product.category === 'phones')
      .sort(sortByYear)
      .slice(0, 15);
  };

  const getPriceDifference = (product: Product) => {
    return product.fullPrice - product.price;
  };

  const filterProductsByPriceDifference = (products: Product[]) => {
    const productsWithPriceDifference = products.map((product) => ({
      ...product,
      priceDifference: getPriceDifference(product),
    }));

    const sortedProducts = productsWithPriceDifference.sort(
      (a, b) => b.priceDifference - a.priceDifference,
    );

    return sortedProducts.slice(0, 15);
  };

  const sectiomAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <div className="mt-6 sm:mt-8 md:mt-14">
      <section className="max-w-max-width mx-auto box-content px-0 sm:px-6 lg:px-8">
        <SliderPromo sectiomAnimation={sectiomAnimation} />
      </section>
      <section className="max-w-max-width mx-auto box-content px-4 sm:px-6 lg:px-8">
        <SliderModels sectionTitle="Brand new models" filterFunction={filterForNewModel} />
      </section>
      <section className="max-w-max-width mx-auto box-content px-4 sm:px-6 lg:px-8">
        <Category sectiomAnimation={sectiomAnimation} />
      </section>
      <section className="max-w-max-width mx-auto box-content px-4 sm:px-6 lg:px-8">
        <SliderModels
          sectionTitle="Hot prices"
          filterFunction={filterProductsByPriceDifference}
          prevButtonClass="slider2-prev"
          nextButtonClass="slider2-next"
        />
      </section>
    </div>
  );
};
