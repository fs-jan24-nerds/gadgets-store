import { useState } from 'react';
import like from '../../assets/icons/like.svg';
import dislike from '../../assets/icons/dislike.svg';
import classNames from 'classnames';
import { Item, Product } from '../../types/Product';
import { useCartProducts } from '../../hooks/useCartProducts';
import { useFavouritesProducts } from '../../hooks/useFavouriteProducts';
import { RootState, useAppSelector } from '../../store/store';
import { Link } from 'react-router-dom';
import createUniqueList from '../../utils/createUniqueList';

type Props = {
  product: Item;
};

export const SelectedProductFilter: React.FC<Props> = ({ product: phone }) => {
  const { isLoaded } = useAppSelector((state: RootState) => state.products);

  const [selectedSize] = useState<string>(phone.capacity);
  const [selectedColor] = useState<string>(phone.color);

  const { cart, addProductToCart, removeAllFromCartById } = useCartProducts();
  const [favouritesProducts, addToFavourites, removeFromFavourites] = useFavouritesProducts();
  const products = useAppSelector((state) => state.products.products);

  const filteredProductModel = products.filter((product) =>
    product.itemId.includes(phone.namespaceId),
  );

  const selectedProduct = products.find(
    (p) => p.color === selectedColor && p.capacity === selectedSize,
  );

  const isLike = favouritesProducts.some((likeProduct) => likeProduct.id === selectedProduct?.id);
  const isInCart = cart.some((cartProduct) => cartProduct.id === selectedProduct?.id);
  const isDiscountActive = selectedProduct?.fullPrice !== selectedProduct?.price;

  const selectedProductColor: string[] = createUniqueList(filteredProductModel, 'color');
  const selectedProductCapacity: string[] = createUniqueList(filteredProductModel, 'capacity');

  const itemPhone = phone as Item;

  const colorMenu = (color: string) => {
    const changeColorClasses: string = classNames(
      'flex',
      'justify-center',
      'items-center',
      'w-[30px]',
      'h-[30px]',
      'bg-white',
      'rounded-full',
      'border-[2px] border-icons',
      'hover:scale-110',
      'transition duration-300',
      {
        'border-[2px] border-primary': selectedColor === color,
      },
    );
    return changeColorClasses;
  };

  const sizeMenu = (size: string) => {
    const changeSizeClasses: string = classNames(
      'border border-icons',
      'p-[7px]',
      'text-primary',
      'text-[14px]',
      'transition duration-300',
      'hover:border-primary',
      {
        'bg-primary text-white': selectedSize === size,
      },
    );
    return changeSizeClasses;
  };
  if (!isLoaded) return 'loading';

  return (
    <article className="w-full lg:w-[520px]">
      <div className="flex justify-between text-xs font-medium leading-4 font-mont text-secondary mb-[8px]">
        <h3>Available colors</h3>
        <span className="text-icons">ID: 802390</span>
      </div>
      <div className="w-full md:w-[320px]">
        <div className="flex mb-[25px] gap-2">
          {selectedProductColor.map((color) => (
            <Link
              to={`/${phone.category}/${phone.namespaceId}-${phone.capacity.toLowerCase()}-${color.replace(' ', '-')}`}
              key={color}
              className={colorMenu(color)}
            >
              <span
                className="w-[20px] h-[20px] rounded-full"
                style={{ backgroundColor: color }}
              ></span>
            </Link>
          ))}
        </div>
        <div className="w-full h-[1px] bg-elements mb-[24px]"></div>
        <h3 className="text-xs font-medium leading-4  font-mont text-secondary mb-[8px]">
          Select capacity
        </h3>
        <div className="font-mont-semiBold flex gap-1 mb-[24px] flex-wrap">
          {selectedProductCapacity.map((size) => (
            <Link
              to={`/${phone.category}/${phone.namespaceId}-${size.toLowerCase()}-${phone.color.replace(' ', '-')}`}
              className={sizeMenu(size)}
              key={size}
            >
              {size}
            </Link>
          ))}
        </div>
        <div className="flex mb-[16px] items-center">
          {isDiscountActive ? (
            <>
              <p className="font-mont-bold mr-2 font-extrabold text-[32px] text-primary">
                ${itemPhone.priceDiscount}
              </p>
              <p className="font-mont-semiBold line-through  text-[22px] text-secondary">
                ${itemPhone.priceRegular}
              </p>
            </>
          ) : (
            <p className="font-mont-bold text-primary text-[32px]">${itemPhone.priceRegular}</p>
          )}
        </div>

        <div className="w-full  h-[1px] bg-elements mb-[24px]"></div>
        <div className="flex justify-start gap-x-1 items-start mb-[32px]">
          {isInCart ? (
            <button
              className="w-full h-[48px] font-bold text-sm bg-white border border-1 border-elements text-green"
              onClick={() => removeAllFromCartById((selectedProduct as Product)?.id)}
            >
              Added to cart
            </button>
          ) : (
            <button
              className="w-full h-[48px] font-bold text-sm bg-primary text-white"
              onClick={() => addProductToCart(selectedProduct as Product)}
            >
              Add to cart
            </button>
          )}
          {isLike ? (
            <button
              className="flex items-center justify-center text-sm w-[40px] h-[48px] border border-1 border-elements"
              onClick={() => removeFromFavourites((selectedProduct as Product)?.id)}
            >
              <img src={dislike} alt="dislike" />
            </button>
          ) : (
            <button
              className="flex items-center justify-center text-sm w-[40px] h-[48px] border border-1 border-elements"
              onClick={() => {
                addToFavourites(selectedProduct as Product);
              }}
            >
              <img src={like} alt="like" />
            </button>
          )}
        </div>

        <div className="flex justify-between items-start font-mont-semiBold text-[12px] leading-4 ">
          <div className="flex flex-col gap-[6px] text-secondary">
            <p>Screen: </p>
            <p>Resolution:</p>
            <p>Processor: </p>
            <p>RAM:</p>
          </div>
          <div className="flex flex-col gap-[6px] text-primary text-right">
            <p>{itemPhone.screen}</p>
            <p>{itemPhone.resolution}</p>
            <p>{itemPhone.processor}</p>
            <p>{itemPhone.ram}</p>
          </div>
        </div>
      </div>
    </article>
  );
};
