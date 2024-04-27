import like from '../../assets/icons/like.svg';
import dislike from '../../assets/icons/dislike.svg';
import classNames from 'classnames';
import { Item, Product } from '../../types/Product';
import { useCartProducts } from '../../hooks/useCartProducts';
import { useFavouritesProducts } from '../../hooks/useFavouriteProducts';
import { RootState, useAppSelector } from '../../store/store';
import { Link, NavLink, useParams } from 'react-router-dom';
import createUniqueList from '../../utils/createUniqueList';
import { motion } from 'framer-motion';
import { generateAnimation } from '../../utils/animations';
import { getProductById } from '../../api/api';
import { useColorTheme } from '../../hooks/useColorTheme';
import likeDark from '../../assets/icons/fav-dark.svg'

type Props = {
  product: Item;
};

export const SelectedProductFilter: React.FC<Props> = ({ product: phone }) => {
  const { isLoaded } = useAppSelector((state: RootState) => state.products);
  const { category = 'phones' } = useParams();

  const { cart, addProductToCart, removeAllFromCartById } = useCartProducts();
  const [favouritesProducts, addToFavourites, removeFromFavourites] = useFavouritesProducts();
  const products = useAppSelector((state) => state.products.products);

  const productsAll = products
    .filter((product) => product.itemId.startsWith(phone.namespaceId))
    .map((p) => {
      const product = getProductById(p.itemId, category);
      return { ...p, item: product };
    })
    .filter((p) => p?.item?.namespaceId === phone.namespaceId);

  const filteredProductModel =
    productsAll && productsAll.length
      ? productsAll.filter((p) => p?.capacity === phone.capacity)
      : [];
  const filteredProductModelCap =
    productsAll && productsAll.length ? productsAll.filter((p) => p?.color === phone.color) : [];

  const selectedProduct = products.find(
    (p) => p.color === phone.color && p.capacity === phone.capacity,
  );

  const isLike = favouritesProducts.some((likeProduct) => likeProduct.id === selectedProduct?.id);
  const isInCart = cart.some((cartProduct) => cartProduct.id === selectedProduct?.id);
  const isDiscountActive = selectedProduct?.fullPrice !== selectedProduct?.price;

  const selectedProductColor: string[] = createUniqueList(filteredProductModel, 'color');
  const selectedProductCapacity: string[] = createUniqueList(filteredProductModelCap, 'capacity');

  const itemPhone = phone as Item;

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
        'border-[3px] border-blackBg': phone.color === color,
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
        'bg-blackBg text-whiteActive': phone.capacity === size,
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
      className="w-full lg:w-[520px]"
    >
      <div className="flex justify-between text-xs font-medium leading-4 font-mont text-secondary mb-[8px]">
        <h3>Available colors</h3>
        <span className="text-icons">ID: 802390</span>
      </div>
      <div className="w-full md:max-w-[320px]">
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
            <NavLink
              to={`/${phone.category}/${phone.namespaceId}-${size.toLowerCase()}-${phone.color.replace(' ', '-')}`}
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
              className="w-[100%] h-[40px] font-bold text-sm bg-surface-2 border border-1 border-elements text-button-text-success"
              onClick={() => removeAllFromCartById((selectedProduct as Product)?.id)}
            >
              Added to cart
            </button>
          ) : (
            <button
              className="w-[100%] h-[40px] font-bold text-sm bg-accent hover:bg-accent-hover duration-300 text-white"
              onClick={() => addProductToCart(selectedProduct as Product)}
            >
              Add to cart
            </button>
          )}

          {isLike ? (
            <button
              // className="flex items-center justify-center text-sm w-[40px] h-[48px] border border-1 border-elements"
              className="flex items-center justify-center text-sm w-[40px] h-[40px] border border-1 bg-surface-2 border-elements"
              onClick={() => removeFromFavourites((selectedProduct as Product)?.id)}
            >
              <img src={dislike} alt="dislike" />
            </button>
          ) : (
            <button
              className="flex items-center justify-center text-sm w-[40px] h-[40px] border border-1 bg-surface-2 border-elements"
              onClick={() => {
                addToFavourites(selectedProduct as Product);
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
            <p>{itemPhone.screen}</p>
            <p>{itemPhone.resolution}</p>
            <p>{itemPhone.processor}</p>
            <p>{itemPhone.ram}</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
