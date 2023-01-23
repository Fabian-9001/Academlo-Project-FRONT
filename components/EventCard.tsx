import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import LikeDisable from './LikeDisable';
import LikeEnable from './LikeEnable';
import Person from './Person';

const EventCard = () => {
  const [isEnable, setIsEnable] = useState(false);

  return (
    <div className="min-w-[300px] max-w-[375px] h-[455px] rounded-[20px] bg-white drop-shadow-shadow overflow-hidden">
      <div className="w-full h-[240px] bg-gray-300 relative ">
        <Image src={''} fill={true} alt="Image of the event" quality={100} />
      </div>

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

      <div className="w-full h-[215px]">
        <h3 className="font-roboto font-title-3 text-title-3 leading-title-3 text-primary-blackLight mt-[15px] ml-[23px]">
          Concierto de Lady Gaga
        </h3>

        <p className="font-roboto font-texto-1 text-texto-1 leading-texto-1 text-primary-grayDark ml-[23px] mr-[21px] mt-[5px]">
          El concierto con la temática de Lady gaga en Las Vegas. El concierto
          con la temática de Lady gaga en Las Vegas.El concierto con la
          temática.
        </p>

        <Link
          className="font-roboto font-texto-2 text-texto-2 leading-texto-2 text-primary-blue mt-[12px] ml-[27px]"
          href="#"
        >
          ladygaga.com
        </Link>

        <div className="flex items-center gap-[10px] mt-[12px] ml-[30px]">
          <Person />
          <p className="font-roboto font-texto-2 text-texto-2 leading-texto-2 text-primary-blackLight mt-[5px]">
            90’800’756 votos
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
