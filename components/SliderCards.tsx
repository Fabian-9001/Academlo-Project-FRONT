import ArrowNext from './ArrowNext';
import EventCard from './EventCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { useSwiper } from 'swiper/react';

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
              slidesPerView: 1.3,
              spaceBetween: 20,
            },
            450: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            530: {
              slidesPerView: 1.7,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 1.9,
              spaceBetween: 20,
            },
            670: {
              slidesPerView: 2.1,
              spaceBetween: 20,
            },
            740: {
              slidesPerView: 2.3,
              spaceBetween: 20,
            },
            810: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            870: {
              slidesPerView: 2.7,
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
        <SlideNextButton />
      </div>

      <div className=" min-w-[50px]">
        <ArrowNext />
      </div>
    </div>
  );
};

export default SliderCards;

// some-inner-component.jsx
export function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button
      className="w-50px h-[50px] bg-black"
      onClick={() => swiper.slideNext()}
    >
      Slide to the next slide
    </button>
  );
}
