import Footer from '../components/Footer';
import NavProfile from '../components/NavProfile';
import Searcher from '../components/Searcher';
import SliderCards from '../components/SliderCards';
import SuggestedList from '../components/SuggestedList';

export default function Artists() {
  return (
    <div>
      <NavProfile />
      <div className="  justify-center   sm:grid-cols-1  mx-auto h-[204px] w-full  max-w-[1280px]   bg-no-repeat bg-cover bg-[url('/images/desktop/artists.png')] bg-center">
        <div className="pt-6 mx-auto px-3">
          <p className="text-base font-roboto font-medium">Home / Marcas</p>
          <p className="text-[48px] font-Roboto font-bold text-[#F3F243]">
            Artistas y Conciertos
          </p>
          <p className="text-base font-roboto font-medium">
            Descrubre las marcas y tiendas que la gente quiere cerca
          </p>
        </div>
      </div>
      <div className="mx-auto  gapx-20 px-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
        <div className="flex justify-end gap-3 xs:mx-auto text-[#A7A6A7] text-[13px] font-normal mt-4 ">
          <button className="w-[141px] h-[45px] rounded-[25px] bg-white py-[15px] px-[20px] flex items-center justify-center border-[1px] border-[#A7A6A7]">
            <p className="font-roboto  font-[500] text-[13px] leading-[15px] text-[#A7A6A7] ">
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
        <div className="pt-4 xs:mx-auto">
          <Searcher />
        </div>
      </div>

      <main className="bg-white pt-[85px]">
        <div className="flex flex-col gap-[35px] pb-[50px] pl-[20px] max-w-[1000px] mx-auto">
          <div className="flex flex-col gap-[10px]">
            <h2 className="font-roboto font-title-2 text-title-2 leading-title-2 text-primary-blackLight">
              Populares en Querétaro
            </h2>
            <p className="font-roboto font-subtitle-2 text-subtitle-2 leading-subtitle-2 text-primary-grayDark">
              Lo que las personas piden más
            </p>
          </div>
          <SliderCards />
        </div>
        <div className="flex flex-col gap-[35px] pb-[50px] pl-[20px] max-w-[1000px] mx-auto">
          <div className="flex flex-col gap-[10px]">
            <h2 className="font-roboto font-title-2 text-title-2 leading-title-2 text-primary-blackLight">
              Sugerencias para ti
            </h2>
            <p className="font-roboto font-subtitle-2 text-subtitle-2 leading-subtitle-2 text-primary-grayDark">
              Publicaciones que podrías colaborar
            </p>
          </div>
          <SliderCards />
        </div>
        <SuggestedList />
        <div className="flex flex-col gap-[35px] pb-[95px] pl-[20px] pt-[25px] sm:pb-[115px] sm:pt-[35px] max-w-[1000px] mx-auto">
          <div className="flex flex-col gap-[10px]">
            <h2 className="font-roboto font-title-2 text-title-2 leading-title-2 text-primary-blackLight">
              Recientes
            </h2>
            <p className="font-roboto font-subtitle-2 text-subtitle-2 leading-subtitle-2 text-primary-grayDark">
              Las personas últimanete están hablando de esto
            </p>
          </div>
          <SliderCards />
        </div>
      </main>

      <Footer />
    </div>
  );
}
