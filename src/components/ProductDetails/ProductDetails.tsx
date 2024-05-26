import { useParams } from 'react-router-dom';
import { asyncGetAndSet, getItemAndProductById, getProducts } from '../../api/api';
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
import { GridItem } from '../Grid/GridItem';
import { Grid } from '../Grid/Grid';

const getter = async () => {
  return (await getProducts({})).products;
};

export const ProductDetails = () => {
  const { id } = useParams();
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const [pageProduct, setPageProduct] = useState<{
    isLoaded: boolean;
    item?: Item;
    product?: Product;
  }>({ isLoaded: false });

  const { product, item, isLoaded } = pageProduct;

  const loadPageProduct = ([loadedItem, loadedProduct]: [Item, Product]) => {
    setPageProduct({
      isLoaded: true,
      product: loadedProduct,
      item: loadedItem,
    });
  };

  useEffect(() => {
    if (id) {
      asyncGetAndSet(getItemAndProductById, loadPageProduct)({ itemId: id, productId: id });
    }
  }, [id, item?.id, product?.itemId]);

  const productStyles =
    'items-center w-20 h-20 p-2 border border-elements cursor-pointer hover:border-primary transition-colors duration-500 ease-out';

  if (isLoaded) {
    const { name, images } = item as Item;

    return (
      <div className="max-w-max-width mx-auto box-content px-4">
        <div className="mb-[56px] tablet:mb-[64px] laptop:mb-[80px]">
          <Grid>
            <GridItem>
              <Breadcrumbs />
              <BackButton />
            </GridItem>

            <GridItem>
              <SubTitle title={name} />
            </GridItem>

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
                    {images.map((image, index) => {
                      return (
                        <div className={`${productStyles}`} key={image}>
                          <img
                            src={`/gadgets-store/${image}`}
                            alt={`${name} ${index + 1}`}
                            className={'object-scale-down w-full h-full'}
                            onMouseOver={() => setCurrentImageIdx(index)}
                          />
                        </div>
                      );
                    })}
                  </div>

                  <div className="w-full tablet:w-[450px] flex justify-center items-center">
                    <img
                      src={`/gadgets-store/${item?.images[currentImageIdx]}`}
                      className="object-scale-down tablet:object-cover h-[400px]"
                    />
                  </div>
                </div>
              </motion.div>
            </GridItem>

            <GridItem className="mb-8 col-start-1 col-end-5 tablet:col-start-9 tablet:col-end-13 desktop:col-start-17 desktop:col-end-25">
              <SelectedProductFilter product={product as Product} item={item as Item} />
            </GridItem>

            <About item={item as Item} />
          </Grid>

          <SliderModels sectionTitle="You may also like" getter={getter} />
        </div>
      </div>
    );
  }
};
