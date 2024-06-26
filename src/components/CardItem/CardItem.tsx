import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { useCartProducts } from '../../hooks/useCartProducts';
import { useColorTheme } from '../../hooks/useColorTheme';
import { useFavouritesProducts } from '../../hooks/useFavouriteProducts';
import { Product } from '../../types/Product';
import { generateAnimation } from '../../utils/animations';

import unfav from '../../assets/icons/dislike.svg';
import favDark from '../../assets/icons/fav-dark.svg';
import fav from '../../assets/icons/like.svg';

type Props = {
  product: Product;
};

export const CardItem: React.FC<Props> = ({ product }) => {
  const { id, image, name, price, fullPrice, screen, ram, capacity, itemId, category } = product;
  const { cart, addProductToCart, removeAllFromCartById } = useCartProducts();
  const [theme] = useColorTheme();
  const [favouritesProducts, addToFavourites, removeFromFavourites] = useFavouritesProducts();

  const isDiscountActive = fullPrice !== price;
  const isInCart = cart.some((cartProduct) => cartProduct.id === id);
  const isFavourite = favouritesProducts.some((favouriteProduct) => favouriteProduct.id === id);

  const descriptionContent = {
    Screen: screen,
    RAM: ram,
    Capacity: capacity,
  };

  return (
    <motion.article
      initial="hidden"
      transition={{ delay: 0.2, duration: 0.5 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      variants={generateAnimation('y', -50)}
      className="flex justify-between flex-col p-8 bg-surface-1 border border-1 border-elements transition-shadow duration-300 hover:shadow-3xl"
    >
      <div
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        }
      >
        <div className="flex flex-col">
          <div className="h-[196px] mb-[24px]">
            <Link to={`/${category}/${itemId}`}>
              <img
                className="object-scale-down w-full max-h-full transition-scale duration-300 hover:scale-105"
                src={image}
              />
            </Link>
          </div>
          <Link to={`/${category}/${itemId}`}>
            <h3 className="grow mt-2 text-sm leading-5 h-[2.5rem] overflow-hidden font-semibold text-primary">
              {name}
            </h3>
          </Link>
        </div>
        <div className="flex text-2xl">
          {isDiscountActive ? (
            <>
              <p className="mr-2 font-extrabold text-primary">{`${price}$`}</p>
              <p className="line-through font-semibold text-secondary">{`${fullPrice}$`}</p>
            </>
          ) : (
            <p className="font-extrabold text-primary">{`${fullPrice}$`}</p>
          )}
        </div>
      </div>
      <div className="block my-2 h-[1px] w-full bg-elements" />

      <div>
        {Object.entries(descriptionContent).map(([key, value]) => (
          <div className="mb-2 flex justify-between items-center" key={key}>
            <p className="font-bold text-xs text-secondary">{key}</p>
            <p className="text-xs text-primary">{value}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-between gap-x-1 items-start">
        <div className="w-[100%]">
          {isInCart ? (
            <button
              className="w-[100%] h-[40px] font-bold text-sm bg-surface-2 border border-1 border-elements text-button-text-success"
              onClick={() => removeAllFromCartById(id)}
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
        </div>
        <div>
          {isFavourite ? (
            <button
              className="flex items-center justify-center text-sm w-[40px] h-[40px] border border-1 bg-surface-2 border-elements"
              onClick={() => removeFromFavourites(id)}
            >
              <img src={unfav} alt="unfavour" />
            </button>
          ) : (
            <button
              className="flex items-center justify-center text-sm w-[40px] h-[40px] border border-1 bg-surface-2 border-elements"
              onClick={() => addToFavourites(product)}
            >
              {theme === 'light' ? (
                <img src={fav} alt="favour" />
              ) : (
                <img src={favDark} alt="favour" />
              )}
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
};
