import { useNavigate, useParams } from 'react-router-dom';
import { RootState, useAppSelector } from '../../store/store';
import { getProductById } from '../../api/api';
import { useEffect, useState } from 'react';
import { Item } from '../../types/Product';

export const ProductDetails: React.FC = () => {
  const { isLoaded } = useAppSelector((state: RootState) => state.products);
  const { category } = useParams();
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState<Item | undefined>();
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  useEffect(() => {
    if (isLoaded) {
      if (id && category) {
        const product = getProductById(id, category);
        setProduct(product);
      }
    }
  }, [id, product]);

  const goBack = () => {
    navigate(-1);
  };

  const productStyles =
    'items-center w-20 h-20 border border-#C4C4C4 cursor-pointer hover:border-primary transition-colors duration-500 ease-out';
  return (
    <>
      {product && (
        <div className="mx-auto max-w-screen-xl">
          <div className="mb-6">
            <button onClick={goBack} className="flex text-secondary">
              <div className="w-4 h-4">
                <img
                  src="/gadgets-store/src/assets/icons/leftArrow.svg"
                  alt="Go back"
                  className="max-w-full"
                />
              </div>
              Back
            </button>

            <h1 className="font-mont-bold leading-[41px] tracking-tighter text-primary text-left mb-6 md:text-4xl text-[22px]">
              {product?.name}
            </h1>
          </div>
          <div className="flex flex-col md:flex-row md:items-center">
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

            <div className="flex flex-col">
              <div className="my-4">
                <label htmlFor="capacity" className="block mb-2">
                  Capacity:
                </label>
                <select name="capacity" id="capacity">
                  {product.capacityAvailable.map((capacity, index) => (
                    <option key={index} value={capacity}>
                      {capacity}
                    </option>
                  ))}
                </select>
              </div>
              <div className="my-4">
                <label htmlFor="color" className="block mb-2">
                  Color:
                </label>
                <select name="color" id="color">
                  {product.colorsAvailable?.map((color, index) => (
                    <option key={index} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </div>

              <div className="text-lg">
                <p>
                  {product?.screen}, {product?.resolution}
                </p>
                <p>Processor: {product?.processor}</p>
                <p>RAM: {product?.ram}</p>
                <p>Camera: {product?.camera}</p>
                <p>Zoom: {product?.zoom}</p>
                <p>Connectivity: {product?.cell.join(', ')}</p>
                <p className="font-bold">
                  Price:
                  {product?.priceDiscount < product?.priceRegular ? (
                    <span className="text-red-500">${product?.priceDiscount}</span>
                  ) : (
                    <span>${product?.priceRegular}</span>
                  )}
                </p>
              </div>
            </div>
          </div>

          {product.description?.map(({ title, text }, index) => (
            <div key={index}>
              <h2 className="text-xl font-semibold">{title}</h2>
              {text?.map((paragraph, pIndex) => <p key={pIndex}>{paragraph}</p>)}
            </div>
          ))}
        </div>
      )}
    </>
  );
};
