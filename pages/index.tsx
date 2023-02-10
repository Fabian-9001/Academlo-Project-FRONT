import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SliderCards from '../components/SliderCards';
import SuggestedList from '../components/SuggestedList';
import NavBar from '../components/NavBar';
import { usePublications } from '../lib/services/publications.services';
export default function Home() {
  const { data: publications } = usePublications();

  return (
    <div>
      <Head>
        <title>Para Cuando?</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Header />
      <main className="bg-white pt-[85px] sm:pt-[75px] font-roboto">
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
      </main>
      <Footer />
    </div>
  );
}
