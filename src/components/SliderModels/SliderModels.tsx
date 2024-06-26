import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { Navigation, Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { asyncGetAndSet, getter } from '../../api/api';

import { Product } from '../../types/Product';

import 'swiper/css';
import 'swiper/css/navigation';

import { motion } from 'framer-motion';

import { generateAnimation } from '../../utils/animations';
import { SubTitle } from '../SubTitle/SubTitle';
import { CardItem } from '../CardItem';

interface Props {
  getter: getter<Product[]>;
  sectionTitle: string;
  prevButtonClass?: string;
  nextButtonClass?: string;
}

export const SliderModels: React.FC<Props> = ({
  getter,
  sectionTitle,
  prevButtonClass = 'slider1-prev',
  nextButtonClass = 'slider1-next',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [productList, setProductList] = useState<Product[]>([]);

  const loadProductList = (data: Product[]): void => {
    setIsLoaded(true);
    setProductList(data);
  };

  useEffect(() => {
    if (!isLoaded) {
      asyncGetAndSet(getter, loadProductList)();
    }
  }, [getter, isLoaded]);

  const [sliderPosition, setSliderPosition] = useState(0);

  const onSlideChange = (e: SwiperType) => {
    setSliderPosition(e.progress);
  };

  if (!isLoaded) {
    return 'loading';
  }

  return (
    <div className="mb-[56px] tablet:mb-[80px]">
      <div className="flex justify-between">
        <SubTitle title={sectionTitle} />

        <motion.div
          initial="hidden"
          transition={{ delay: 0.3, duration: 0.5 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          variants={generateAnimation('y', -50)}
          className="flex space-x-4"
        >
          <button
            disabled={sliderPosition === 0}
            className={classNames(
              'border border-elements w-8 h-8 flex ',
              {
                'border-icons bg-surface-2 hover:border-surface-4 hover:bg-surface-5':
                  sliderPosition > 0,
              },
              prevButtonClass,
            )}
          >
            <div
              className={classNames(
                'inline-flex w-2 h-2 m-auto ml-3 border-solid border-elements border-l-[2px] border-t-[2px] rounded-sm -rotate-45',
                { 'border-primary': sliderPosition > 0 },
              )}
            ></div>
          </button>

          <button
            disabled={sliderPosition === 1}
            className={classNames(
              'border border-elements  w-8 h-8 flex ',
              {
                'border-icons bg-surface-2 hover:border-surface-4  hover:bg-surface-5':
                  sliderPosition < 1,
              },
              nextButtonClass,
            )}
          >
            <div
              className={classNames(
                'inline-flex m-auto mr-3 w-2 h-2 border-solid border-elements border-r-[2px] border-t-[2px] rounded-sm rotate-45',
                { 'border-primary': sliderPosition < 1 },
              )}
            ></div>
          </button>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        transition={{ delay: 0.5, duration: 0.6 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        variants={generateAnimation('y', -50)}
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
          {productList.map((product, index) => (
            <SwiperSlide key={product.id} virtualIndex={index} className="swiper-slide">
              <CardItem product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};
