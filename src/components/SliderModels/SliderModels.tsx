import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation, Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { getProducts } from '../../api/api';
import { setProducts } from '../../store/productsSlice';
import { RootState } from '../../store/store';
import { Product } from '../../types/Product';
import { CardItem } from '../CardItem';

import 'swiper/css';
import 'swiper/css/navigation';

interface Props {
  filterFunction: (products: Product[]) => Product[];
  sectionTitle: string;
}

export const SliderModels: React.FC<Props> = ({ filterFunction, sectionTitle }) => {
  const { products, isLoaded } = useSelector((state: RootState) => state.products);

  const filteredProducts = filterFunction(products);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoaded) return;
    dispatch(setProducts(getProducts()));
  }, [isLoaded, dispatch]);

  const [sliderPosition, setSliderPosition] = useState(0);

  const onSlideChange = (e: SwiperType) => {
    setSliderPosition(e.progress);
  };

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-4xl">{sectionTitle}</h2>
        <div className="flex space-x-4">
          <button
            disabled={sliderPosition === 0}
            className={classNames(
              'border border-elements w-8 h-8 flex justify-center items-center',
              { 'border-icons hover:border-primary': sliderPosition > 0 },
              'product-slider-button-prev',
            )}
          >
            <div
              className={classNames(
                'inline-flex w-3 h-3 border-solid border-elements border-l-[3px] border-t-[3px] rounded-sm -rotate-45',
                { 'border-primary': sliderPosition > 0 },
              )}
            ></div>
          </button>

          <button
            disabled={sliderPosition === 1}
            className={classNames(
              'border border-elements w-8 h-8 flex justify-center items-center',
              { 'border-icons hover:border-primary': sliderPosition < 1 },
              'product-slider-button-next',
            )}
          >
            <div
              className={classNames(
                'inline-flex w-3 h-3 border-solid border-elements border-r-[3px] border-t-[3px] rounded-sm rotate-45',
                { 'border-primary': sliderPosition < 1 },
              )}
            ></div>
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Virtual]}
        navigation={{
          prevEl: '.product-slider-button-prev',
          nextEl: '.product-slider-button-next',
        }}
        wrapperClass="swiper-wrapper"
        spaceBetween={16}
        breakpoints={{
          320: {
            width: 560,
            slidesPerView: 2,
            spaceBetween: 16,
          },
          640: {
            width: 850,
            slidesPerView: 3,
            spaceBetween: 16,
          },
          1136: {
            width: 1136,
            slidesPerView: 4,
            spaceBetween: 16,
          },
        }}
        slidesPerView={4}
        virtual
        onSlideChange={onSlideChange}
      >
        {filteredProducts.map((product, index) => (
          <SwiperSlide key={product.id} virtualIndex={index} className="swiper-slide">
            <CardItem product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
