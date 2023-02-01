import Link from 'next/link';
import Person from '../../components/Person';
import Image from 'next/image';
import Button from '../../components/Button';
import SuggestedList from '../../components/SuggestedList';
import SliderCards from '../../components/SliderCards';
import Footer from '../../components/Footer';

export default function Details() {
  return (
    <div className="bg-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 pt-[60px] pb-[80px] max-w-[1024px] sm:mx-auto sm:grid-cols-2 sm:pt-[100px]">
          <header className="font-roboto p-[20px] sm:max-h-[315px]">
            <p className="font-[500] text-[16px] leading-[19px] text-primary-black pb-[5px]">
              Artista / Pop / Rock
            </p>
            <h3 className="font-[900] text-[36px] leading-[42px] text-primary-black pb-[20px] md:pb-[25px] md:text-[48px] md:w-[90%]">
              Concierto de Lady Gaga
            </h3>
            <p className="font-[400] text-[15px] leading-[17px] text-primary-grayDark pb-[30px] md:pb-[45px] md:w-[82%] sm:pr-[20px]">
              El concierto con la temática de Lady gaga en Las Vegas. El
              concierto con la temática de Lady gaga en Las Vegas.El concierto
              con la temática.
            </p>
            <Link
              className="font-[500] text-[14px] leading-[16px] text-primary-blue"
              href={''}
            >
              ladygaga.com
            </Link>
            <div className="flex items-center gap-[10px] pb-[25px] pt-[15px]">
              <Person />
              <p className="font-[500] text-[14px] leading-[16px] text-primary-blackLight">
                90’800’756 votos
              </p>
            </div>
          </header>
          <div className="min-w-[375px] mx-auto min-h-[250px] max-w-[540px] max-h-[380px] mb-[30px] p-[20px] relative row-span-2 sm:mb-[0] sm:w-full">
            <Image src={'/images/ExampleImg2.png'} fill={true} alt="" />
          </div>
          <footer className="w-full sm:pr-[20px] p-[20px]">
            <Button text="Votar" />
          </footer>
        </div>
        <div className="pb-[25px] md:pb-[80px]">
          <SuggestedList />
        </div>
        <div className="flex flex-col gap-[35px] pb-[95px] max-w-[990px] md:mx-auto">
          <header className="font-roboto px-[20px]">
            <h2 className="font-[500] text-[24px] leading-[28px] text-primary-blackLight pb-[10px]">
              Recientes
            </h2>
            <p className="font-[400] text-[16px] leading-[19px] text-primary-grayDark">
              Las personas últimanete están hablando de esto
            </p>
          </header>
          <div className="pl-[10px]">
            <SliderCards />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
