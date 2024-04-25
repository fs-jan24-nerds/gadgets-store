import { useParams } from 'react-router-dom';
import { RootState, useAppSelector } from '../../store/store';
import { getProductById } from '../../api/api';
import { useEffect, useState } from 'react';
import { Item, Product } from '../../types/Product';
import { SelectedProductFilter } from '../SelectedProductFilter/SelectedProductFilter';
import { About } from '../About';
import { BackButton } from '../BackButton/BackButton';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { SliderModels } from '../SliderModels/SliderModels';
import { SubTitle } from '../SubTitle/SubTitle';
import { motion } from 'framer-motion';
import { generateAnimation } from '../../utils/animations';

export const ProductDetails = () => {
  const { isLoaded } = useAppSelector((state: RootState) => state.products);
  const { category, id } = useParams();
  const [product, setProduct] = useState<Item | undefined>();

  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  useEffect(() => {
    if (isLoaded && id && category) {
      const product = getProductById(id, category);
      setProduct(product);
    }
  }, [id, product, isLoaded, category]);

  const getPriceDifference = (product: Product) => {
    return product.fullPrice - product.price;
  };

  const filterForRecommendedModels = (products: Product[]) => {
    return products
      .filter((product) => product.category === category)
      .map((product) => ({
        ...product,
        priceDifference: getPriceDifference(product),
      }))
      .sort((a, b) => b.priceDifference - a.priceDifference)
      .slice(0, 9);
  };

  const productStyles =
    'items-center w-20 h-20 p-2 border border-#C4C4C4 cursor-pointer hover:border-primary transition-colors duration-500 ease-out';

  return (
    <div className="max-w-max-width mx-auto box-content px-6 lg:px-8">
      {product && (
        <div className="mx-auto max-w-screen-xl px-6">
          <motion.div
            initial="hidden"
            transition={{ delay: 0.3, duration: 0.6 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            variants={generateAnimation('y', -50)}
            className="mb-6"
          >
            <Breadcrumbs />

            <BackButton />
            <SubTitle title={product?.name} />
          </motion.div>
          <div className="flex flex-col md:flex-row md:items-start">
            <motion.div
              initial="hidden"
              transition={{ delay: 0.7, duration: 0.6 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              variants={generateAnimation('x', -60)}
              className="flex md:flex-row md:w-[570px] md:h-[464px] mb-[80px] flex-col-reverse m-auto"
            >
              <div className="flex md:flex-col gap-2 md:gap-4 items-center">
                {product.images.map((image, index) => {
                  return (
                    <div className={`${productStyles}`} key={image}>
                      <img
                        src={`/gadgets-store/${image}`}
                        alt={`${product.name} ${index + 1}`}
                        className={'max-h-full w-auto object-contain m-auto'}
                        onMouseOver={() => setCurrentImageIdx(index)}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="md:w-[442px]">
                <img
                  src={`/gadgets-store/${product?.images[currentImageIdx]}`}
                  className="p-[11px] max-h-full m-auto"
                />
              </div>
            </motion.div>
            <SelectedProductFilter product={product} />
          </div>

          <About item={product} />
        </div>
      )}

      <section className="max-w-max-width mx-auto mt-20 box-content px-4 sm:px-6 lg:px-8">
        <SliderModels
          sectionTitle="You may also like"
          filterFunction={filterForRecommendedModels}
        />
      </section>
    </div>
  );
};
