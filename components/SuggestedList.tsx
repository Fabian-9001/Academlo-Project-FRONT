import React from 'react';
import CategoryButton from './CategoryButton';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SuggestedList = () => {
  const router = useRouter();
  return (
    <div className="min-w-[420px] h-[280px] duration-[0.5s] bg-primary-grayLighter p-[25px] sm:h-[250px] sm:pl-[60px] max-w-[980px] mx-auto">
      <header className="flex flex-col gap-[10px] ">
        <h2 className="font-roboto font-title-2 text-title-2 leading-title-2 text-[#6E6A6C]">
          ¡Hagámoslo más personal!
        </h2>
        <p className="w-[90%] font-roboto font-subtitle-2 text-subtitle-2 leading-subtitle-2 text-[#6E6A6C]">
          Selecciona tus interes para brindarte sugerencia de acuerdo a tus
          gustos
        </p>
      </header>
      <div className="flex gap-[10px] p-[5px] mt-[20px] mb-[20px] sm:mb-[20px] overflow-x-scroll scroll">
        <div
          onClick={() => router.push('/artists')}
          className="hover:scale-[1.05] duration-[0.3s]"
        >
          <CategoryButton text="Artistas mexicanos" />
        </div>
        <div
          onClick={() => router.push('/artists')}
          className="hover:scale-[1.05] duration-[0.3s]"
        >
          <CategoryButton text="Tiendas de ropa" />
        </div>
        <div
          onClick={() => router.push('/artists')}
          className="hover:scale-[1.05] duration-[0.3s]"
        >
          <CategoryButton text="Rock" />
        </div>
        <div
          onClick={() => router.push('/artists')}
          className="hover:scale-[1.05] duration-[0.3s]"
        >
          <CategoryButton text="Restaurantes" />
        </div>
      </div>
      <footer>
        <Link
          className="font-roboto font-subtitle-2 text-subtitle-2 leading-subtitle-2 text-primary-blue pb-[40px]"
          href="#"
        >
          Ver todos los intereses
        </Link>
      </footer>
    </div>
  );
};

export default SuggestedList;
