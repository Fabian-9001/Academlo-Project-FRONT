import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { usePublications } from '../lib/services/publications.services';
import { useUser } from '../lib/services/user.services';
import { votePublication } from '../lib/services/votes.services';
import LikeDisable from './LikeDisable';
import LikeEnable from './LikeEnable';
import Person from './Person';

const EventCard = ({ publication }: { publication?: any }) => {
  const [isVoted, setIsVoted] = useState(false);
  const router = useRouter();
  const { data: user } = useUser();
  const { mutate } = usePublications();
  const vote = () => {
    if (publication && user) {
      setIsVoted(!isVoted);
      votePublication(publication.id)
        .then(() => {
          if (isVoted === true) {
            Swal.fire('voto', 'Eliminado!', 'success');
          } else {
            Swal.fire('Voto Registrado!');
          }
          mutate();
        })
        .catch((err) => console.log(err));
    } else {
      router.push('/sign-in');
    }
  };
  const navigate = () => {
    router.push(`/event/${publication?.id}`);
  };

  return (
    <div className="w-[300px] h-[455px] rounded-[20px] bg-white drop-shadow-shadow overflow-hidden sm-[5px] xs:mx-auto">
      <header className="w-full h-[240px] relative overflow-hidden">
        <Image
          className="hover:scale-[1.1] duration-[0.3s] w-auto h-auto"
          src={
            '/images/topics/tournaments/slide1.jpg'
            /*publication?.picture ? publication?.picture :*/
            //
          }
          fill={true}
          alt={`Imagen de evento ${publication?.title}`}
          quality={100}
        />
      </header>
      <div onClick={vote} className="absolute top-[205px] right-[7%]">
        {isVoted ? (
          <div className="hover:scale-[0.90] duration-[0.3s] p-[1px] rounded-[50%] bg-[#ffffff] flex items-center justify-center">
            <LikeEnable />
          </div>
        ) : (
          <div className="hover:scale-[1.10] duration-[0.3s] p-[1px] rounded-[50%] bg-[#ffffff] flex items-center justify-center">
            <LikeDisable />
          </div>
        )}
      </div>
      <div className="w-full h-[215px] pt-[15px] px-[23px] pb-[40px] font-roboto">
        <header>
          <h3
            onClick={navigate}
            className="max-h-[23px] font-[600] text-[20px] leading-[23px] text-primary-blackLight cursor-pointer mb-[5px] overflow-y-hidden truncate hover:underline duration-[0.3s]"
          >
            {publication?.title}
          </h3>
        </header>
        <p className="min-h-[70px] max-h-[70px] overflow-y-auto font-[400] mb-[10px] text-[15px] leading-[17px] text-[#6E6A6C] scroll">
          {publication?.description}
        </p>
        <div className="w-[85%] h-[50px] absolute top-[310px] bg-gradient-to-t from-white"></div>
        <footer>
          <Link
            className="inline-block max-h-[16px] w-[85%] overflow-x-hidden whitespace-nowrap font-[500] text-[14px] leading-[16px] text-[#1B4DB1] mb-[3px] mx-[2px] truncate"
            href="https://www.academlo.com"
            target="_blank"
          >
            {publication?.content}
          </Link>
          <div className="flex items-center gap-[10px] mx-[10px]">
            <Person />
            <p className="font-[500] text-[14px] leading-[16px] text-primary-blackLight">
              {publication?.votes_count} votos
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default EventCard;
