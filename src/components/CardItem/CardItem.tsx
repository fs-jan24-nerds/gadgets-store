/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCartProducts } from '../../hooks/useCartProducts';
import { Product } from '../../types/Product';
import likeIcon from '../../assets/icons/LikeIcon.svg';
import disLikeIcon from '../../assets/icons/dislike.svg';
import { useFavouritesProducts } from '../../hooks/useFavouriteProducts';

type Props = {
  product: Product;
};

export const CardItem: React.FC<Props> = ({ product }) => {
  const { id, image, name, price, fullPrice, screen, ram, capacity } = product;
  const [cart, addToCart, removeFromCart] = useCartProducts();
  const [favouritesProducts, addToFavourites, removeFromFavourites] = useFavouritesProducts();
  const isDiscountActive = fullPrice !== price;
  const isInCart = cart.some((cartProduct) => cartProduct.id === id);
  const isLike = favouritesProducts.some((likeProduct) => likeProduct.id === id);
  const descriptionContent = {
    Screen: screen,
    RAM: ram,
    Capacity: capacity,
  };

  return (
    <article className="flex justify-between flex-col p-8 border border-1 border-elements w-[272px]">
      <div className="flex flex-col">
        <img className="w-full h-full object-cover" src={image} />
        <h3 className="mt-2 text-sm leading-5 font-semibold text-primary">{name}</h3>
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
      <div className="flex justify-between">
        {isInCart ? (
          <button
            className="w-[160px] h-[40px] font-bold text-sm bg-white border border-1 border-elements text-green"
            onClick={() => removeFromCart(id)}
          >
            Added to cart
          </button>
        ) : (
          <button
            className="w-[160px] h-[40px] font-bold text-sm bg-primary text-white"
            onClick={() => addToCart(product)}
          >
            Add to cart
          </button>
        )}
        {isLike ? (
          <button className="text-sm w-[40px] h-[40px]"  onClick={() => removeFromFavourites(id)}>
            <img src={likeIcon} alt="like" />
          </button>
        ) : (
          <button className="text-sm w-[40px] h-[40px]" onClick={() => addToFavourites(product)}>
            <img src={disLikeIcon} alt="dislike" />
          </button>
        )}
      </div>
    </article>
  );
};
