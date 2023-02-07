import ArrowNext from './ArrowNext';
import EventCard from './EventCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Publication } from '../lib/interfaces/publications.interface';

const SliderCards = ({ publications }: { publications?: Publication[] }) => {
  return (
    <div className="w-full h-[100%] max-w-[1024px] m-auto flex items-center justify-center gap-[25px]">
      <div className="hidden lg:inline-block swiper-prev-slide scale-x-[-1] min-w-[50px]">
        <ArrowNext />
      </div>
      <div className=" flex items-center justify-center gap-[20px] w-full">
        <Swiper
          className="h-[460px] "
          modules={[Navigation]}
          grabCursor={true}
          navigation={{
            nextEl: '.swiper-next-slide',
            prevEl: '.swiper-prev-slide',
            disabledClass: 'opacity-none',
          }}
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
            700: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            940: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {publications?.map((publication) => (
            <SwiperSlide key={publication.id}>
              <EventCard publication={publication} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden lg:inline-block swiper-next-slide min-w-[50px]">
        <ArrowNext />
      </div>
    </div>
  );
};

export default SliderCards;
