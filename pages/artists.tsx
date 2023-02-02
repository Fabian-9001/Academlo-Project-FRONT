import Footer from '../components/Footer';
import NavProfile from '../components/NavProfile';
import Searcher from '../components/Searcher';
import SliderCards from '../components/SliderCards';
import SuggestedList from '../components/SuggestedList';
import CategoryButton from '../components/CategoryButton';
import { useRouter } from 'next/router';

export default function Artists() {
  const router = useRouter();
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
      <div className="w-full bg-white h-[115px]  shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] ">
        <div className="max-w-[1280px] flex-wrap px-[20px] flex gap-[10px] justify-center items-center  pt-[40px] pb-[30px]  mx-auto  ">
          <div className="flex flex-wrap ">
            <div className="flex gap-[10px]">
              <div
                onClick={() => router.push('/artists')}
                className="hover:scale-[1.05] duration-[0.5s]"
              >
                <CategoryButton text="Artistas y conciertos" />
              </div>
              <div
                onClick={() => router.push('/tournaments')}
                className="hover:scale-[1.05] duration-[0.5s]"
              >
                <CategoryButton text="Torneos" />
              </div>
              <div
                onClick={() => router.push('/brands')}
                className="hover:scale-[1.05] duration-[0.5s]"
              >
                <CategoryButton text="Marcas y tiendas" />
              </div>
            </div>
          </div>
          <div className="w-[50%] justify-center mx-auto min-w-[315px] ">
            <Searcher style={true} />
          </div>
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
