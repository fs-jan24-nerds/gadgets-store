import { FavouritesItem } from './FavouriteItem';
import { useAppSelector } from '../../store/store';
import vectorIcon from '../Cart/img/Vector.svg';
import homeIcon from '../../assets/Home.svg';
import { useNavigate } from 'react-router-dom';

export const FavouritesPage = () => {
  const { favouritesProducts: products } = useAppSelector((state) => state.favourites);
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => navigate('..')}
        className="flex items-center gap-2  font-Mont text-lg font-bold leading-4 tracking-tight text-secondary  mb-[40px]"
      >
        <img src={homeIcon} alt="home" />
        <img src={vectorIcon} alt="vector" />
        <span>Favourites</span>
      </button>
      <h1 className="font-Mont font-extrabold leading-14 tracking-tight  text-primary sm:text-5xl text-3xl mb-[8px]">
        Favourites
      </h1>
      <p className="font-Mont text-secondary mb-[40px] text-[14px]">{products.length} items</p>
      {products.length > 0 ? (
        <div className="flex gap-[16px] justify-center md:justify-start flex-wrap">
          {products.map((product) => (
            <FavouritesItem key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div>Not founded</div>
      )}
    </>
  );
};
