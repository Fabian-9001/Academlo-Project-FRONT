import Footer from '../components/Footer';
import SliderCards from '../components/SliderCards';
import SuggestedList from '../components/SuggestedList';
import NavBar from '../components/NavBar';
import SubNavbar from '../components/SubNavbar';
import Image from 'next/image';
import { usePublications } from '../lib/services/publications.services';
import style from '../styles/custom/header.module.css';

export default function Brands() {
  const { data } = usePublications();
  const publications = data?.filter(
    (publication) => publication.publication_type.name === 'Marcas y tiendas'
  );
  return (
    <div>
      <NavBar />
      <header className="w-full h-[205px] font-roboto bg-no-repeat bg-cover bg-center bg-[url('/images/desktop/brandDesktop.png')]">
        <div className="w-full relative h-[205px] font-roboto">
          <div
            className={`w-full h-full flex ${style.sliderHeader} absolute brightness-[0.8]`}
          >
            <div className="min-w-[100%] h-full relative">
              <Image
                className="object-cover"
                fill={true}
                alt=""
                src={'/images/desktop/brandDesktop.png'}
              />
            </div>
            <div className="min-w-[100%] h-full relative overflow-hidden ">
              <Image
                className="object-cover object-center"
                fill={true}
                alt=""
                src={'/images/topics/brands/slide1.jpg'}
              />
            </div>
            <div className="min-w-[100%] h-full relative">
              <Image
                className="object-cover object-center"
                fill={true}
                alt=""
                src={'/images/topics/brands/slide2.jpg'}
              />
            </div>
          </div>
          <div className="w-full relative h-full flex flex-col justify-evenly px-[20px] pt-[25px] pb-[40px] max-w-[980px] mx-auto lg:px-[0]">
            <p className="text-[16px] font-[500] leading-[19px] pb-[20px]">
              Home / Marcas
            </p>
            <p className="text-[48px] font-[900] leading-[50px] text-[#F3F243] pb-[5px]">
              Marcas y tiendas
            </p>
            <p className="text-[16px] font-[500] leading-[19px]">
              Descubre las marcas y tiendas que la gente quiere cerca
            </p>
          </div>
        </div>
      </header>
      <SubNavbar />
      <div className="bg-white pt-[85px] sm:pt-[75px] font-roboto">
        <div className="flex flex-col gap-[35px] pb-[50px] pl-[20px] max-w-[980px] mx-auto lg:pl-[0]">
          <header className="flex flex-col gap-[10px]">
            <h2 className=" font-[500] text-[24px] leading-[28px] text-primary-blackLight">
              Populares en Querétaro
            </h2>
            <p className="font-[400]] text-[16px] leading-[19px] text-primary-grayDark">
              Lo que las personas piden más
            </p>
          </header>
          <SliderCards publications={publications} />
        </div>
        <div className="flex flex-col gap-[35px] pb-[50px] pl-[20px] max-w-[980px] mx-auto lg:pl-[0] sm:pb-[40px]">
          <header className="flex flex-col gap-[10px]">
            <h2 className=" font-[500] text-[24px] leading-[28px] text-primary-blackLight">
              Sugerencias para ti
            </h2>
            <p className="font-[400]] text-[16px] leading-[19px] text-primary-grayDark">
              Publicaciones que podrías colaborar
            </p>
          </header>
          <SliderCards publications={publications} />
        </div>
        <SuggestedList />
        <div className="flex flex-col gap-[35px] pb-[95px] pl-[20px] max-w-[980px] mx-auto pt-[25px] lg:pl-[0] sm:pb-[115px] sm:pt-[35px]">
          <header className="flex flex-col gap-[10px]">
            <h2 className=" font-[500] text-[24px] leading-[28px] text-primary-blackLight">
              Recientes
            </h2>
            <p className="font-[400]] text-[16px] leading-[19px] text-primary-grayDark">
              Las personas últimanete están hablando de esto
            </p>
          </header>
          <SliderCards publications={publications} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
