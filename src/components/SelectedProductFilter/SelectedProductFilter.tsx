import like from '../../assets/icons/like.svg';
import dislike from '../../assets/icons/dislike.svg';
import classNames from 'classnames';
import { Item, Product } from '../../types/Product';
import { useCartProducts } from '../../hooks/useCartProducts';
import { useFavouritesProducts } from '../../hooks/useFavouriteProducts';
import { Link, NavLink } from 'react-router-dom';
import createUniqueList from '../../utils/createUniqueList';
import { motion } from 'framer-motion';
import { generateAnimation } from '../../utils/animations';
import { asyncGetAndSet, preparedSameModelGetter } from '../../api/api';
import { useColorTheme } from '../../hooks/useColorTheme';
import likeDark from '../../assets/icons/fav-dark.svg';
import { useEffect, useState } from 'react';

type Props = {
  product: Product;
  item: Item;
};

export const SelectedProductFilter: React.FC<Props> = ({ product, item }) => {
  const { cart, addProductToCart, removeAllFromCartById } = useCartProducts();
  const [favouritesProducts, addToFavourites, removeFromFavourites] = useFavouritesProducts();
  const [sameModels, setSameModels] = useState<Product[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const loadSameModels = (data: Product[]): void => {
    setIsLoaded(true);
    setSameModels(data);
  };

  useEffect(() => {
    if (!isLoaded) {
      asyncGetAndSet(preparedSameModelGetter, loadSameModels)({ namespaceId: item.namespaceId });
    }
  }, [isLoaded, item.namespaceId]);

  const filteredProductModel =
    sameModels && sameModels.length ? sameModels.filter((p) => p?.capacity === item.capacity) : [];
  const filteredProductModelCap =
    sameModels && sameModels.length ? sameModels.filter((p) => p?.color === item.color) : [];

  const isLike = favouritesProducts.some((likeProduct) => likeProduct.id === product?.id);
  const isInCart = cart.some((cartProduct) => cartProduct.id === product?.id);
  const isDiscountActive = product?.fullPrice !== product?.price;

  const selectedProductColor: string[] = createUniqueList(filteredProductModel, 'color');
  const selectedProductCapacity: string[] = createUniqueList(filteredProductModelCap, 'capacity');

  const [theme] = useColorTheme();

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
        'border-[3px] border-textMain': item.color === color,
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
        'bg-blackBg text-whiteActive': item.capacity === size,
      },
    );
    return changeSizeClasses;
  };
  if (!isLoaded) return 'loading';

  return (
    <motion.article
      initial="hidden"
      transition={{ delay: 0.7, duration: 0.6 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      variants={generateAnimation('x', 60)}
      className=""
    >
      <div className="flex justify-between text-xs font-medium leading-4 font-mont text-secondary mb-[8px]">
        <h3>Available colors</h3>
        <span className="text-icons">ID: 802390</span>
      </div>
      <div className="w-full md:max-w-[320px]">
        <div className="flex mb-[25px] gap-2">
          {selectedProductColor.map((color) => (
            <Link
              to={`/${item.category}/${item.namespaceId}-${item.capacity.toLowerCase()}-${color.replace(' ', '-')}`}
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
            <NavLink
              to={`/${item.category}/${item.namespaceId}-${size.toLowerCase()}-${item.color.replace(' ', '-')}`}
              className={sizeMenu(size)}
              // className={getCapacityClass}
              key={size}
            >
              {size}
            </NavLink>
          ))}
        </div>
        <div className="flex mb-[16px] items-center">
          {isDiscountActive ? (
            <>
              <p className="font-mont-bold mr-2 font-extrabold text-[32px] text-primary">
                ${item.priceDiscount}
              </p>
              <p className="font-mont-semiBold line-through  text-[22px] text-secondary">
                ${item.priceRegular}
              </p>
            </>
          ) : (
            <p className="font-mont-bold text-primary text-[32px]">${item.priceRegular}</p>
          )}
        </div>

        <div className="w-full  h-[1px] bg-elements mb-[24px]"></div>
        <div className="flex justify-start gap-x-1 items-start mb-[32px]">
          {isInCart ? (
            <button
              className="w-[100%] h-[40px] font-bold text-sm bg-surface-2 border border-1 border-elements text-button-text-success"
              onClick={() => removeAllFromCartById(product.id)}
            >
              Added to cart
            </button>
          ) : (
            <button
              className="w-[100%] h-[40px] font-bold text-sm bg-accent hover:bg-accent-hover duration-300 text-white"
              onClick={() => addProductToCart(product)}
            >
              Add to cart
            </button>
          )}

          {isLike ? (
            <button
              // className="flex items-center justify-center text-sm w-[40px] h-[48px] border border-1 border-elements"
              className="flex items-center justify-center text-sm w-[40px] h-[40px] border border-1 bg-surface-2 border-elements"
              onClick={() => removeFromFavourites(product.id)}
            >
              <img src={dislike} alt="dislike" />
            </button>
          ) : (
            <button
              className="flex items-center justify-center text-sm w-[40px] h-[40px] border border-1 bg-surface-2 border-elements"
              onClick={() => {
                addToFavourites(product);
              }}
            >
              {theme === 'light' ? (
                <img src={like} alt="favour" />
              ) : (
                <img src={likeDark} alt="favour" />
              )}
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
            <p>{item.screen}</p>
            <p>{item.resolution}</p>
            <p>{item.processor}</p>
            <p>{item.ram}</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
