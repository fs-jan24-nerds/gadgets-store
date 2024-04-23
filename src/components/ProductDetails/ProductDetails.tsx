import { useParams } from 'react-router-dom';
import { RootState, useAppSelector } from '../../store/store';
import { getProductById } from '../../api/api';
import { useEffect, useState } from 'react';
import { Item } from '../../types/Product';
import { SelectedProductFilter } from '../SelectedProductFilter/SelectedProductFilter';
import { About } from '../About';
import { BackButton } from '../BackButton/BackButton';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';

export const ProductDetails = () => {
  const { isLoaded } = useAppSelector((state: RootState) => state.products);
  const { category } = useParams();
  const { id } = useParams();

  const [product, setProduct] = useState<Item | undefined>();
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  useEffect(() => {
    if (isLoaded) {
      if (id && category) {
        const product = getProductById(id, category);
        setProduct(product);
      }
    }
  }, [id, product, isLoaded]);

  const productStyles =
    'items-center w-20 h-20 p-2 border border-#C4C4C4 cursor-pointer hover:border-primary transition-colors duration-500 ease-out';
  return (
    <div className="max-w-max-width mx-auto box-content px-6 lg:px-8">
      {product && (
        <div className="mx-auto max-w-screen-xl px-6">
          <div className="mb-6">
            <Breadcrumbs />

            <BackButton />

            <h1 className="font-mont-bold leading-[41px] tracking-tighter text-primary text-left mb-6 md:text-4xl text-[22px]">
              {product?.name}
            </h1>
          </div>
          <div className="flex flex-col md:flex-row md:items-start">
            <div className="flex md:flex-row md:w-[570px] md:h-[464px] mb-[80px] flex-col-reverse m-auto">
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
            </div>
            <SelectedProductFilter product={product} />
          </div>

          <About item={product} />
        </div>
      )}
    </div>
  );
};
