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

import { motion } from 'framer-motion';

import { HomeTitle } from '../HomeTitle/HomeTitle';

interface Props {
  filterFunction: (products: Product[]) => Product[];
  sectionTitle: string;
  prevButtonClass?: string;
  nextButtonClass?: string;
}

export const SliderModels: React.FC<Props> = ({
  filterFunction,
  sectionTitle,
  prevButtonClass = 'slider1-prev',
  nextButtonClass = 'slider1-next',
}) => {
  const { products, isLoaded } = useSelector((state: RootState) => state.products);

  const filteredProducts = filterFunction(products);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoaded) {
      return;
    }
    dispatch(setProducts(getProducts()));
  }, [isLoaded, dispatch]);

  const [sliderPosition, setSliderPosition] = useState(0);

  const onSlideChange = (e: SwiperType) => {
    setSliderPosition(e.progress);
  };

  const sectiomAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  const titleAnimation = {
    hidden: {
      y: -120,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="mb-[56px] tablet:mb-[80px]">
      <div className="flex justify-between">
        <HomeTitle title={sectionTitle} />

        <motion.div
          initial="hidden"
          transition={{ delay: 0.3, duration: 0.6 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          variants={titleAnimation}
          className="flex space-x-4"
        >
          <button
            disabled={sliderPosition === 0}
            className={classNames(
              'border border-elements w-8 h-8 flex justify-center items-center',
              { 'border-icons hover:border-primary': sliderPosition > 0 },
              prevButtonClass,
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
              nextButtonClass,
            )}
          >
            <div
              className={classNames(
                'inline-flex w-3 h-3 border-solid border-elements border-r-[3px] border-t-[3px] rounded-sm rotate-45',
                { 'border-primary': sliderPosition < 1 },
              )}
            ></div>
          </button>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        transition={{ delay: 0.7, duration: 1 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        variants={sectiomAnimation}
      >
        <Swiper
          modules={[Navigation, Virtual]}
          navigation={{
            prevEl: `.${prevButtonClass}`,
            nextEl: `.${nextButtonClass}`,
          }}
          wrapperClass="swiper-wrapper"
          spaceBetween={16}
          breakpoints={{
            320: {
              width: 320,
              slidesPerView: 1,
              spaceBetween: 16,
            },
            640: {
              width: 640,
              slidesPerView: 2,
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
              <div
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  })
                }
              >
                <CardItem product={product} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};
