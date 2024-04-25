import { Product } from '../../types/Product';
import dislike from '../../assets/icons/dislike.svg';
import { useFavouritesProducts } from '../../hooks/useFavouriteProducts';
import { Link } from 'react-router-dom';
import { useCartProducts } from '../../hooks/useCartProducts';
import { motion } from 'framer-motion';
import { generateAnimation } from '../../utils/animations';



type Props = {
  product: Product;
};
export const FavouritesItem: React.FC<Props> = ({ product }) => {
  const { id, image, name, price, fullPrice, screen, ram, capacity, itemId } = product;

  const isDiscountActive = fullPrice !== price;
  const descriptionContent = {
    Screen: screen,
    RAM: ram,
    Capacity: capacity,
  };
  const [, , removeFromFavourites] = useFavouritesProducts();

  const { cart, addProductToCart, removeAllFromCartById } = useCartProducts();
  const isInCart = cart.some((cartProduct) => cartProduct.id === id);

  return (
    <motion.article
      initial="hidden"
      transition={{ delay: 0.4, duration: 0.8 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      variants={generateAnimation('y', -50)}
      className="flex justify-between flex-col p-8 border border-1 border-elements transition-shadow duration-300 hover:shadow-3xl"
    >
      <div className="flex flex-col">
        <div className="max-h-[240px] mb-[24px]">
          <Link to={`../phones/${itemId}`}>
            <img
              className="object-scale-down w-full max-h-full transition-scale duration-300 hover:scale-105"
              src={image}
            />
          </Link>
        </div>
        <Link to={`../phones/${itemId}`}>
          <h3 className="grow mt-2 text-sm leading-5 font-semibold text-primary">{name}</h3>
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

      <div className="block my-2 h-[1px] w-full bg-elements" />

      <div>
        {Object.entries(descriptionContent).map(([key, value]) => (
          <div className="mb-2 flex justify-between items-center" key={key}>
            <p className="font-bold text-xs text-secondary">{key}</p>
            <p className="text-xs">{value}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between gap-x-1 items-start">
        <div className="w-[100%]">
          {isInCart ? (
            <button
              className="w-[100%] h-[40px] font-bold text-sm bg-white border border-1 border-elements text-green"
              onClick={() => removeAllFromCartById(id)}
            >
              Added to cart
            </button>
          ) : (
            <button
              className="w-[100%] h-[40px] font-bold text-sm bg-primary text-white"
              onClick={() => addProductToCart(product)}
            >
              Add to cart
            </button>
          )}
        </div>
        <div>
          <button
            className="flex items-center justify-center text-sm w-[40px] h-[40px] border border-1 border-elements"
            onClick={() => removeFromFavourites(id)}
          >
            <img src={dislike} alt="like" />
          </button>
        </div>
      </div>
    </motion.article>
  );
};
