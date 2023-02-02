import ArrowNext from './ArrowNext';
import EventCard from './EventCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const SliderCards = () => {
  return (
    <div className="w-full h-[100%] max-w-[1024px] m-auto flex items-center justify-center gap-[25px]">
      <div className="swiper-prev-slide scale-x-[-1] min-w-[50px]">
        <ArrowNext />
      </div>
      <div className=" flex items-center justify-center gap-[20px] w-full">
        <Swiper
          className="h-[460px]"
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-next-slide',
            prevEl: '.swiper-prev-slide',
          }}
          breakpoints={{
            415: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            467: {
              slidesPerView: 1.4,
              spaceBetween: 20,
            },
            519: {
              slidesPerView: 1.6,
              spaceBetween: 20,
            },
            571: {
              slidesPerView: 1.8,
              spaceBetween: 20,
            },
            624: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            676: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            728: {
              slidesPerView: 2.4,
              spaceBetween: 20,
            },
            781: {
              slidesPerView: 2.6,
              spaceBetween: 20,
            },
            833: {
              slidesPerView: 2.8,
              spaceBetween: 20,
            },
            940: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>{EventCard}</SwiperSlide>
          <SwiperSlide>{EventCard}</SwiperSlide>
          <SwiperSlide>{EventCard}</SwiperSlide>
          <SwiperSlide>{EventCard}</SwiperSlide>
        </Swiper>
      </div>
      <div className="swiper-next-slide min-w-[50px]">
        <ArrowNext />
      </div>
    </div>
  );
};

export default SliderCards;
