import { useRef } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import Banner from '../../assets/SliderPromo/Banner.png';
import LeftArrow from '../../assets/SliderPromo/icons/left-arrow.svg';
import RightArrow from '../../assets/SliderPromo/icons/right-arrow.svg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import styles from './SliderPromo.module.css';

const SliderPromo = () => {
  const swiperRef = useRef<SwiperRef>(null);

  const handlePrev = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.swiper.slideNext();
  };

  return (
    <div className="flex flex-col items-center max-w-full mt-6 lg:mt-8 xl:mt-14 mb-14 lg:mb-16 xl:mb-20">
      <div className="flex flex-shrink-1">
        <button className="border border-icons w-8 h-[400px] mr-4" onClick={handlePrev}>
          <img src={LeftArrow} alt="left arrow" className="mx-auto" />
        </button>

        <div className="w-full max-w-[1040px]">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: '.pagination',
              bulletClass: styles.bullet,
              bulletActiveClass: styles.bulletActive,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            speed={2000}
            loop={true}
            ref={swiperRef}
          >
            <SwiperSlide className="max-w-[1040px]">
              <img src={Banner} alt="Slide 1" />
            </SwiperSlide>

            <SwiperSlide className="max-w-[1040px]">
              <img src={Banner} alt="Slide 1" />
            </SwiperSlide>

            <SwiperSlide className="max-w-[1040px]">
              <img src={Banner} alt="Slide 1" />
            </SwiperSlide>
          </Swiper>
        </div>

        <button className="border border-icons w-8 h-[400px] ml-4" onClick={handleNext}>
          <img src={RightArrow} alt="right arrow" className="mx-auto" />
        </button>
      </div>
      <div className="pagination !w-20 mt-4 flex gap-4"></div>
    </div>
  );
};

export default SliderPromo;
