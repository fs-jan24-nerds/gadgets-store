import { FavouriteProduct } from '../../types/Product';
import unLike from '../../assets/Unlike.svg'
import likeIcon from '../../assets/LikeIcon.svg'

type Props = {
  product: FavouriteProduct;
  // isInCart?: boolean;
  // isFavourite?: boolean;
};
export const FavouritesItem: React.FC<Props> = ({ product }) => {
  const { image, name, price, fullPrice, screen, ram, capacity } = product;
  const isDiscountActive = fullPrice !== price;
  const descriptionContent = {
    Screen: screen,
    RAM: ram,
    Capacity: capacity,
  };

  const isFavourite = false;
  const isInCart = false;

  return (
    <>
      <article className="flex justify-between flex-col p-8 border border-1 border-elements h-[506px] w-[272px]">
        <div className="flex flex-col h-[15.875rem] mb-[50px]">
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
            <button className="w-[160px] h-[40px] font-bold text-sm bg-white border border-1 border-elements text-green ">
              Added to cart
            </button>
          ) : (
            <button className="w-[160px] h-[40px] font-bold text-sm bg-primary text-white">
              Add to cart
            </button>
          )}
          {isFavourite ? (
            <button className="border text-sm w-[40px] h-[40px]"><img src={unLike} alt="unfavorite" /></button>
          ) : (
            <button className="border text-sm w-[40px] h-[40px]"><img src={likeIcon} alt="like"/></button>
          )}
        </div>
      </article>
    </>
  );
};
