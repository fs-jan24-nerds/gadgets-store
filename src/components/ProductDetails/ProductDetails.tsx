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
          </GridItem>
            
          <GridItem>
            <BackButton />
          </GridItem>

          <GridItem>
            <h1 className="font-mont-bold leading-[41px] tracking-tighter text-primary text-left mb-6 md:text-4xl text-[22px]">
              {product?.name}
            </h1>          
          </GridItem>

          <GridItem className="col-span-4 tablet:col-span-6 desktop:col-span-12">
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

                <div className="w-full aspect-[1/1] flex justify-center items-center border border-black-1 border-1">
                  <img
                    src={`/gadgets-store/${product?.images[currentImageIdx]}`}
                    className="p-[11px] object-center object-scale-down h-[400px] tablet:h-[500px]" 
                  />
                </div>
              </div>
          </GridItem>

          <GridItem className='col-span-4 tablet:col-span-6 desktop:col-span-12'>
              <SelectedProductFilter product={product} />
          </GridItem>
          
          <GridItem>
            <About item={product} />
          </GridItem>
            
        </Grid>
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
