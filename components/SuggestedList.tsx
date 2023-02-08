import CategoryButton from './CategoryButton';
import Link from 'next/link';
import { useTags } from '../lib/services/tags.services';
import { useState } from 'react';

const SuggestedList = () => {
  const { data: tags } = useTags();
  const [isActive, setIsActive] = useState(false);
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
      <div
        className={`flex gap-[20px] p-[5px] mt-[20px] mb-[40px] sm:mb-[20px]  ${
          isActive ? 'overflow-x-scroll scroll2' : 'overflow-x-hidden'
        }`}
      >
        {tags?.map((tag) => (
          <Link
            href={'/'}
            key={tag.id}
            className="hover:scale-[1.05] duration-[0.3s]"
          >
            <CategoryButton text={tag.name} />
          </Link>
        ))}
      </div>
      <footer>
        <p
          onClick={() => setIsActive(!isActive)}
          className="font-roboto font-subtitle-2 text-subtitle-2 leading-subtitle-2 text-primary-blue pb-[40px]"
        >
          Ver todos los intereses
        </p>
      </footer>
    </div>
  );
};

export default SuggestedList;
