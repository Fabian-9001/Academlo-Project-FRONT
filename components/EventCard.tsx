import Image from 'next/image';
import Link from 'next/link';
import LikeDisable from './LikeDisable';
import LikeEnable from './LikeEnable';
import Person from './Person';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Publication } from '../lib/interfaces/publications.interface';

const EventCard = ({ publication }: { publication: Publication }) => {
  const [isEnable, setIsEnable] = useState(false);
  const router = useRouter();
  const navigate = () => {
    router.push(`/event/${publication.id}`);
  };
  return (
    <div className="xs:w-[300px] h-[455px] rounded-[20px] bg-white drop-shadow-shadow overflow-hidden sm-[5px] xs:mx-auto">
      <header className="w-full h-[240px]  relative  overflow-hidden">
        <Image
          className="hover:scale-[1.1] duration-[0.3s]"
          src={'/images/ExampleImg.png'}
          fill={true}
          alt={`Imagen de evento ${publication?.title}}`}
          quality={100}
        />
      </header>
      <div
        onClick={() => setIsEnable(!isEnable)}
        className="absolute top-[205px] right-[7%]"
      >
        {isEnable ? (
          <div className="hover:scale-[0.90] duration-[0.3s]">
            <LikeEnable />
          </div>
        ) : (
          <div className="hover:scale-[1.10] duration-[0.3s]">
            <LikeDisable />
          </div>
        )}
      </div>
      <div className="w-full h-[215px] font-roboto">
        <header>
          <h3
            onClick={navigate}
            className="font-[600] text-[20px] leading-[23px] text-primary-blackLight mt-[15px] ml-[23px] cursor-pointer"
          >
            {publication?.title}
          </h3>
        </header>
        <p className="min-h-[70px] max-h-[70px] overflow-y-auto font-[400] text-[15px] leading-[17px] text-[#6E6A6C] ml-[23px] mr-[21px] mt-[5px] mb-[15px] scroll">
          {publication?.description}
        </p>
        <footer>
          <Link
            className="font-[500] text-[14px] leading-[16px] text-[#1B4DB1] ml-[27px]"
            href="#"
          >
            ladygaga.com
          </Link>
          <div className="flex items-center gap-[10px] mt-[12px] ml-[30px]">
            <Person />
            <p className="font-[500] text-[14px] leading-[16px] text-primary-blackLight ">
              90,800,756 votos
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default EventCard;
