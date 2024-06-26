import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { CardItem } from '../CardItem';
import { Title } from '../Title/Title';
import { EmptyFavourites } from './EmptyFavourites';

import { useAppSelector } from '../../store/store';

export const FavouritesPage = () => {
  const { favouritesProducts } = useAppSelector((state) => state.favourites);

  return (
    <div className="max-w-max-width mx-auto box-content px-6 lg:px-8">
      <Breadcrumbs />

      <Title title="Favourites" />

      <p className="font-Mont text-secondary mb-[20px]  tablet:mb-[30px] text-[14px]">
        {favouritesProducts.length} items
      </p>

      {favouritesProducts.length > 0 ? (
        <div className="grid grid-cols-1  gap-x-[16px] gap-y-[40px] sm:grid-cols-2 bd  md:grid-cols-3  lg:grid-cols-4">
          {favouritesProducts.map((product) => (
            <CardItem key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div>
          <EmptyFavourites />
        </div>
      )}
    </div>
  );
};
