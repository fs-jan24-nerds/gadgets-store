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
import { Grid } from '../Grid/Grid';
import { GridItem } from '../Grid/GridItem';

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
    <div className="max-w-max-width mx-auto box-content px-0 md:px-6 lg:px-8">
      {product && (
        <Grid>
          <GridItem>
            <Breadcrumbs />
            <BackButton />
          </GridItem>
          <GridItem>
            <SubTitle title={product?.name} />
          </GridItem>
          <GridItem className="block tablet:flex">
            <GridItem className="col-span-4 tablet:col-span-6 desktop:col-span-12">
              <motion.div
                initial="hidden"
                transition={{ delay: 0.7, duration: 0.6 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                variants={generateAnimation('x', -60)}
                className="flex md:flex-row md:w-[570px] md:h-[464px] mb-[80px] flex-col-reverse m-auto"
              >
                <div className="flex md:flex-row w-full flex-col-reverse m-auto">
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

                  <div className="aspect-[1/1] flex justify-center items-center">
                    <img
                      src={`/gadgets-store/${product?.images[currentImageIdx]}`}
                      className="p-[11px] object-center object-scale-down h-[400px] tablet:h-[500px]"
                    />
                  </div>
                </div>
              </motion.div>
            </GridItem>

            <GridItem className="col-span-4 tablet:col-span-12 desktop:col-span-12">
              <SelectedProductFilter product={product} />
            </GridItem>
          </GridItem>

          <GridItem>
            <About item={product} />
          </GridItem>
        </Grid>
      )}

      <SliderModels sectionTitle="You may also like" filterFunction={filterForRecommendedModels} />
    </div>
  );
};
