import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Banner from '../../assets/SliderPromo/Banner.png';

import LeftArrow from '../../assets/SliderPromo/icons/left-arrow.svg';
import RightArrow from '../../assets/SliderPromo/icons/right-arrow.svg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import styles from './SliderPromo.module.css';

const SliderPromo = () => {
  return (
    <div>
      <h1 className="text-5xl font-extrabold text-left">Welcome to Nice Gadgets store!</h1>

      <div className="flex flex-col items-center max-w-full mt-6 lg:mt-8 xl:mt-14 mb-14 lg:mb-16 xl:mb-20">
        <div className="flex gap-4 w-full mb-8">
          <button className={styles.leftArrow}>
            <img src={LeftArrow} alt="left arrow" className="mx-auto" />
          </button>

          <Swiper
            className="max-w-[1040px]"
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              prevEl: `.${styles.leftArrow}`,
              nextEl: `.${styles.rightArrow}`,
            }}
            pagination={{
              clickable: true,
              el: '.pagination',
              bulletClass: styles.bullet,
              bulletActiveClass: styles.bulletActive,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={1000}
            slidesPerView={1}
          >
            <SwiperSlide>
              <img src={Banner} className={styles.slide} alt="Slide 1" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={Banner} className={styles.slide} alt="Slide 2" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={Banner} className={styles.slide} alt="Slide 3" />
            </SwiperSlide>
          </Swiper>

          <button className={styles.rightArrow}>
            <img src={RightArrow} alt="right arrow" className="mx-auto" />
          </button>
        </div>
        <div className="pagination flex justify-center items-center gap-4"></div>
      </div>
    </div>
  );
};

export default SliderPromo;
