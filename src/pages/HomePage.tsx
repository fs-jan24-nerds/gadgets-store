import { Category } from '../components/Category/Category';
import SliderPromo from '../components/SliderPromo/SliderPromo';
import { SwiperComponent } from '../components/SwiperForModels/SwiperForModels';
import { Product } from '../types/Product';

export const HomePage = () => {
  const filterForNewModel = (products: Product[]) => {
    return products.filter(
      (product) => product.category === 'phones' && product.name.includes('Apple iPhone 14'),
    );
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

    return sortedProducts.slice(0, 10);
  };

  return (
    <div className="">
      <section className="max-w-max-width mx-auto box-content px-0 md:px-6 lg:px-8">
        <SliderPromo />
      </section>
      <section className="max-w-max-width mx-auto box-content px-4 md:px-6 lg:px-8">
        <SwiperComponent sectionTitle="Brand new models" filterFunction={filterForNewModel} />
      </section>
      <section className="max-w-max-width mx-auto box-content px-4 md:px-6 lg:px-8">
        <Category />
      </section>
      <section className="max-w-max-width mx-auto box-content px-4 md:px-6 lg:px-8">
        <SwiperComponent
          sectionTitle="Hot prices"
          filterFunction={filterProductsByPriceDifference}
        />
      </section>
    </div>
  );
};
