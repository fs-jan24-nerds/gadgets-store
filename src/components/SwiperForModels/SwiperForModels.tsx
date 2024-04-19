import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { CardItem } from '../CardItem';
import { useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { setProducts } from '../../store/productsSlice';
import { getProducts } from '../../api/api';
import { Virtual } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { Product } from '../../types/Product';

interface SwiperComponentProps {
  filterFunction: (products: Product[]) => Product[];
  sectionTitle: string;
}

export const SwiperComponent: React.FC<SwiperComponentProps> = ({
  filterFunction,
  sectionTitle,
}) => {
  const { products, isLoaded } = useSelector((state: RootState) => ({
    products: filterFunction(state.products.products),
    isLoaded: state.products.isLoaded,
  }));
  const dispatch = useDispatch();
  const sliderRef = useRef<SwiperRef>(null);

  useEffect(() => {
    if (isLoaded) return;
    dispatch(setProducts(getProducts()));
  }, [isLoaded, dispatch]);

  const handleNext = () => {
    sliderRef.current?.swiper.slideNext();
  };

  const handlePrevious = () => {
    sliderRef.current?.swiper.slidePrev();
  };

  return (
    <div className="relative">
      <div className="flex justify-between mb-6">
        <h1 className="text-4xl font-extrabold">{sectionTitle}</h1>
        <div className="flex space-x-4">
          <button className="border border-grey w-8 h-8" onClick={handlePrevious}>
            <div className="inline-flex  w-3 h-3 border-solid border-grey border-l-[3px] border-t-[3px] -rotate-45"></div>
          </button>

          <button className="border border-grey w-8 h-8 " onClick={handleNext}>
            <div className="inline-flex w-3 h-3 border-solid border-gray border-r-[3px] border-t-[3px] rotate-45"></div>
          </button>
        </div>
      </div>

      <Swiper
        modules={[Virtual]}
        spaceBetween={42}
        slidesPerView={4}
        virtual
        wrapperTag="div"
        className=" absolute "
        ref={sliderRef}
      >
        {products.map((product, index) => (
          <SwiperSlide key={product.id} virtualIndex={index}>
            <CardItem product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
