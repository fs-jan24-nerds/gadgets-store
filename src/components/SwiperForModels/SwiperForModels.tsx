import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { CardItem } from '../CardItem';
import { useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { setProducts } from '../../store/productsSlice';
import { getProducts } from '../../api/api';
import { Virtual } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { Product } from '../../types/Product';
import classNames from 'classnames';

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

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (isLoaded) return;
    dispatch(setProducts(getProducts()));
  }, [isLoaded, dispatch]);

  const windowWidth = window.innerWidth;

  let prevViewSliders: number;

  if (windowWidth < 1200) {
    prevViewSliders = 3;
  } else if (windowWidth < 768) {
    prevViewSliders = 1;
  } else if (windowWidth < 640) {
    prevViewSliders = 1;
  } else {
    prevViewSliders = 4;
  }

  const handleNext = () => {
    if (currentSlide < products.length - prevViewSliders) {
      setCurrentSlide(currentSlide + 1);
    }
    return sliderRef.current?.swiper.slideNext();
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }

    return sliderRef.current?.swiper.slidePrev();
  };

  return (
    <div className=" relative">
      <div className="flex justify-between mb-6">
        <h1 className="text-4xl font-extrabold">{sectionTitle}</h1>
        <div className="flex space-x-4">
          <button
            className={classNames(
              'border border-elements w-8 h-8 flex justify-center items-center',
              {
                'border-icons hover:border-primary': currentSlide !== 0,
              },
            )}
            onClick={handlePrevious}
          >
            <div
              className={classNames(
                'inline-flex w-3 h-3 border-solid border-elements border-l-[3px] border-t-[3px] rounded-sm -rotate-45',
                {
                  'border-primary': currentSlide !== 0,
                },
              )}
            ></div>
          </button>

          <button
            className={classNames(
              'border border-elements w-8 h-8 flex justify-center items-center',
              {
                'border-icons hover:border-primary':
                  currentSlide >= 0 && currentSlide !== products.length - prevViewSliders,
              },
            )}
            onClick={handleNext}
          >
            <div
              className={classNames(
                'inline-flex w-3 h-3 border-solid border-elements border-r-[3px] border-t-[3px] rounded-sm rotate-45',
                {
                  'border-primary':
                    currentSlide >= 0 && currentSlide !== products.length - prevViewSliders,
                },
              )}
            ></div>
          </button>
        </div>
      </div>

      <Swiper
        modules={[Virtual]}
        breakpoints={{
          320: {
            width: 320,
            spaceBetween: 0,
            slidesPerView: 1,
          },
          640: {
            width: 640,
            spaceBetween: 0,
            slidesPerView: 2,
          },
          768: {
            width: 768,
            spaceBetween: 0,
            slidesPerView: 3,
          },
          1136: {
            width: 1136,
            spaceBetween: 15,
            slidesPerView: 4,
          },
        }}
        virtual
        slidesPerView={prevViewSliders}
        wrapperTag="div"
        className=" absolute"
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
