import EventCard from './EventCard';
import Footer from './Footer';
import NavProfile from './NavProfile';
import Searcher from './Searcher';

const BrandPage = () => {
  return (
    <div>
      <NavProfile />
      <div className="  justify-center sm:grid-cols-2 mx-auto h-[204px] w-full  max-w-[1280px]  bg-[url('/images/mobile/brandmobile.png')] bg-no-repeat bg-cover sm:bg-[url('/images/desktop/brandDesktop.png')] bg-center">
        <div className="pt-6 mx-auto px-3">
          <p className="text-base font-roboto font-medium">Home / Marcas</p>
          <p className="text-[48px] font-Roboto font-bold text-[#F3F243]">
            Marcas y tiendas
          </p>
          <p className="text-base font-roboto font-medium">
            Descrubre las marcas y tiendas que la gente quiere cerca
          </p>
        </div>
      </div>
      <div className="mx-auto justify-center px-3 grid grid-cols-1 sm:grid-cols-2">
        <div className="">
          <Searcher />
        </div>
        <div className="flex gap-3 text-[#A7A6A7] text-[13px] font-normal mt-4 ">
          <button className="w-[141px] h-[45px] rounded-[25px] bg-white py-[15px] px-[20px] flex items-center justify-center border-[1px] border-[#A7A6A7]">
            <p className="font-roboto font-[500] text-[13px] leading-[15px] text-[#A7A6A7] ">
              Marcas y tiendas
            </p>
          </button>
          <button className="w-[141px] h-[45px] rounded-[25px] bg-white py-[15px] px-[20px] flex items-center justify-center border-[1px] border-[#A7A6A7]">
            <p className="font-roboto font-[500] text-[13px] leading-[15px] text-[#A7A6A7] ">
              Artistas y conciertos
            </p>
          </button>
          <button className="w-[141px] h-[45px] rounded-[25px] bg-white py-[15px] px-[20px] flex items-center justify-center border-[1px] border-[#A7A6A7]">
            <p className="font-roboto font-[500] text-[13px] leading-[15px] text-[#A7A6A7] ">
              Torneos
            </p>
          </button>
        </div>
      </div>

      <div className="grid  mt-16  sm:grid-rows-2 grid-cols-1 ">
        <div className="grid gap-y-11  grid-cols-1 sm:grid-cols-3">
          <div className="flex justify-center ml-4 mr-4">
            <EventCard />
          </div>
          <div className="flex justify-center ml-4 mr-4">
            <EventCard />
          </div>
          <div className="flex justify-center ml-4 mr-4">
            <EventCard />
          </div>
        </div>
        <div className="grid gap-y-11  grid-cols-1 sm:grid-cols-3">
          <div className="flex justify-center ml-4 mr-4">
            <EventCard />
          </div>
          <div className="flex justify-center ml-4 mr-4">
            <EventCard />
          </div>
          <div className="flex justify-center ml-4 mr-4">
            <EventCard />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BrandPage;
