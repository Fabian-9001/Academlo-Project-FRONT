import ArrowNext from './ArrowNext';
import EventCard from './EventCard';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Publication } from '../lib/interfaces/publications.interface';
import 'swiper/css';
import 'swiper/css/navigation';

const SliderCards = ({ publications }: { publications?: Publication[] }) => {
  return (
    <div className="w-full h-[100%] max-w-[1024px] m-auto">
      <div className="relative">
        <Swiper
          className="h-[460px]"
          grabCursor={true}
          slidesPerView={'auto'}
          breakpoints={{
            375: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            395: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            414: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            435: {
              slidesPerView: 1.3,
              spaceBetween: 20,
            },
            455: {
              slidesPerView: 1.35,
              spaceBetween: 20,
            },
            475: {
              slidesPerView: 1.4,
              spaceBetween: 20,
            },
            500: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            550: {
              slidesPerView: 1.6,
              spaceBetween: 20,
            },
            580: {
              slidesPerView: 1.7,
              spaceBetween: 20,
            },
            610: {
              slidesPerView: 1.8,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1.9,
              spaceBetween: 20,
            },
            660: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            700: {
              slidesPerView: 2.1,
              spaceBetween: 20,
            },
            715: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            740: {
              slidesPerView: 2.25,
              spaceBetween: 20,
            },
            780: {
              slidesPerView: 2.4,
              spaceBetween: 20,
            },
            820: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            860: {
              slidesPerView: 2.6,
              spaceBetween: 20,
            },
            910: {
              slidesPerView: 2.7,
              spaceBetween: 20,
            },
            940: {
              slidesPerView: 2.8,
              spaceBetween: 20,
            },
            980: {
              slidesPerView: 2.9,
              spaceBetween: 20,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          style={{ position: 'unset' }}
        >
          <div className="hidden sm:flex items-center absolute top-0 bottom-0 -left-20 cursor-pointer scale-x-[-1]">
            <ButtonPrev />
          </div>
          {publications?.map((publication) => (
            <SwiperSlide key={publication.id}>
              <EventCard publication={publication} />
            </SwiperSlide>
          ))}
          <div className="hidden sm:flex items-center absolute top-0 bottom-0 -right-20 cursor-pointer">
            <ButtonNext />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default SliderCards;

const ButtonNext = () => {
  const swiper = useSwiper();
  return (
    <div className="" onClick={() => swiper.slideNext()}>
      <ArrowNext />
    </div>
  );
};

const ButtonPrev = () => {
  const swiper = useSwiper();
  return (
    <div className="" onClick={() => swiper.slidePrev()}>
      <ArrowNext />
    </div>
  );
};
