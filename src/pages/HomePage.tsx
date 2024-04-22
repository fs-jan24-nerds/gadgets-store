import { Category } from '../components/Category/Category';
import { SliderModels } from '../components/SliderModels/SliderModels';
import SliderPromo from '../components/SliderPromo/SliderPromo';
// import { SwiperComponent } from '../components/SwiperForModels/SwiperForModels';
import { Product } from '../types/Product';

export const HomePage = () => {
  const filterForNewModel = (products: Product[]) => {
    return products
      .filter(
        (product) => product.category === 'phones' && product.name.includes('Apple iPhone 14'),
      )
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

  return (
    <div className="">
      <section className="max-w-max-width mx-auto box-content px-0 sm:px-6 lg:px-8">
        <SliderPromo />
      </section>
      <section className="max-w-max-width mx-auto box-content px-4 sm:px-6 lg:px-8">
        <SliderModels sectionTitle="Brand new models" filterFunction={filterForNewModel} />
      </section>
      <section className="max-w-max-width mx-auto box-content px-4 sm:px-6 lg:px-8">
        <Category />
      </section>
      <section className="max-w-max-width mx-auto box-content px-4 sm:px-6 lg:px-8">
        <SliderModels sectionTitle="Hot prices" filterFunction={filterProductsByPriceDifference} />
      </section>
    </div>
  );
};
