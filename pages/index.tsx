import Head from 'next/head';

import Footer from '../components/Footer';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import SliderCards from '../components/SliderCards';
import SuggestedList from '../components/SuggestedList';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Header />
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
    </>
  );
}
