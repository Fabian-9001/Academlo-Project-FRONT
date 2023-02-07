import React from 'react';
import Searcher from './Searcher';
import CategoryButton from './CategoryButton';
import { useRouter } from 'next/router';

const SubNavbar = () => {
  const router = useRouter();
  return (
    <div className="w-full h-[115px] bg-white">
      <div className="max-w-[980px] h-full pt-[25px] flex flex-col-reverse gap-[20px] justify-center items-center mx-auto md:flex-row md:px-[20px] md:gap-[80px] lg:gap-[165px] lg:px-0">
        <div className="flex gap-[10px] justify-center md:w-full md:justify-start ">
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
        <div className="min-w-[380px] flex justify-center md:justify-end sm:w-[465px] ">
          <Searcher style={true} />
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;
