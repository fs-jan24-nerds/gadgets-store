import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { About } from '../../pages/About';
import { BackButton } from '../BackButton/BackButton';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { Grid } from '../Grid/Grid';
import { GridItem } from '../Grid/GridItem';
import { SelectedProductFilter } from '../SelectedProductFilter/SelectedProductFilter';
import { SliderModels } from '../SliderModels/SliderModels';
import { SubTitle } from '../SubTitle/SubTitle';

import { getProductById } from '../../api/api';
import { RootState, useAppSelector } from '../../store/store';
import { Item, Product } from '../../types/Product';
import { generateAnimation } from '../../utils/animations';
import PhotosLoader from './SkeletonPhotos';
import PhotoLoader from './SkeletonPhoto';
import SkeletonName from './SkeletonName';

export const ProductDetails = () => {
  const { isLoaded } = useAppSelector((state: RootState) => state.products);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  console.log({ isLoaded });

  const { category, id } = useParams();
  const [product, setProduct] = useState<Item | undefined>();

  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    console.log({ isLoaded });
    if (isLoaded && id && category) {
      const product = getProductById(id, category);
      if (!product) {
        navigate('/not-found');
        return;
      }
      console.log({ isLoaded });
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
      setProduct(product);
    }
  }, [id, product, isLoaded, category, navigate]);

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
    'items-center w-20 h-20 p-2 border border-elements cursor-pointer hover:border-primary transition-colors duration-500 ease-out';

  return (
    <div className="max-w-max-width mx-auto box-content px-4">
      {product && (
        <div className="mb-8">
          <Grid>
            <GridItem>
              <Breadcrumbs />
              <BackButton />
            </GridItem>

            <GridItem>{isLoading ? <SkeletonName /> : <SubTitle title={product?.name} />}</GridItem>

            <GridItem className="mb-8 col-start-1 col-end-5 tablet:col-end-9 desktop:col-end-13">
              <motion.div
                initial="hidden"
                transition={{ delay: 0.6, duration: 0.6 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                variants={generateAnimation('x', -60)}
                className=""
              >
                <div className="flex flex-col-reverse tablet:flex-row items-center">
                  <div className="mt-4 gap-1 tablet:mt-0 flex tablet:flex-col">
                    {product.images.map((image, index) => {
                      return (
                        <div className={`${productStyles}`} key={index}>
                          {isLoading ? (
                            <PhotosLoader
                              className={'object-scale-down w-full h-full'}
                              onMouseOver={() => setCurrentImageIdx(index)}
                            />
                          ) : (
                            <img
                              src={`/gadgets-store/${image}`}
                              alt={`${product.name} ${index + 1}`}
                              className={'object-scale-down w-full h-full'}
                              onMouseOver={() => setCurrentImageIdx(index)}
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className="w-full tablet:w-[450px] flex justify-center items-center">
                    {isLoading ? (
                      <PhotoLoader />
                    ) : (
                      <img
                        src={`/gadgets-store/${product?.images[currentImageIdx]}`}
                        className="object-scale-down tablet:object-cover h-[400px]"
                      />
                    )}
                  </div>
                </div>
              </motion.div>
            </GridItem>

            <GridItem className="mb-8 col-start-1 col-end-5 tablet:col-start-9 tablet:col-end-13 desktop:col-start-17 desktop:col-end-25">
              <SelectedProductFilter product={product} />
            </GridItem>

            <About item={product} />
          </Grid>
        </div>
      )}

      <SliderModels sectionTitle="You may also like" filterFunction={filterForRecommendedModels} />
    </div>
  );
};
