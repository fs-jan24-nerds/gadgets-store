import { Category } from '../components/Category/Category';
import SliderPromo from '../components/PromoSlider/SliderPromo';
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
    <>
      <h1 className="text-5xl font-extrabold">Welcome to Nice Gadgets store!</h1>
      <section>
        <SwiperComponent sectionTitle='Brand new models' filterFunction={filterForNewModel} />
        <Category />
        <SwiperComponent sectionTitle='Hot prices' filterFunction={filterProductsByPriceDifference} />
      </section>
    </>
  );
};
export const HomePage = () => (
  <>
    <h1 className="text-5xl font-extrabold">Welcome to Nice Gadgets store!</h1>
    <section>
      <SliderPromo />
      <Category />
    </section>
  </>
);
