import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import {
  useMyPublications,
  usePublications,
} from '../lib/services/publications.services';
import { useUser } from '../lib/services/user.services';
import { useVotes, votePublication } from '../lib/services/votes.services';
import LikeDisable from './LikeDisable';
import LikeEnable from './LikeEnable';
import Person from './Person';

const EventCard = ({ publication }: { publication?: any }) => {
  const [isVoted, setIsVoted] = useState(false);
  const router = useRouter();
  const navigate = () => {
    router.push(`/event/${publication?.id}`);
  };
  const { mutate } = usePublications();
  const vote = () => {
    if (publication && me) {
      votePublication(publication.id)
        .then(() => {
          if (isVoted === true) {
            Swal.fire('voto', 'Eliminado!', 'success');
            setIsVoted(false);
          } else {
            Swal.fire('Voto Registrado!');
            setIsVoted(true);
          }
          mutate();
        })
        .catch((err) => console.log(err));
    } else {
      Swal.fire({
        position: 'top-end',
        icon: 'info',
        title: 'Inicia Sesion para votar',
        showConfirmButton: false,
        timer: 1500,
      });
      router.push('/sign-in');
    }
  };

  const { data: me } = useUser();
  const { data } = useVotes(`${me ? me.results.id : ''}`);
  const verify = data?.find(
    (element) => element.publication_id === publication?.id
  );

  const { data: data2 } = useMyPublications(`${me ? me.results.id : ''}`);
  const verify2 = data2?.find((element) => element.id === publication?.id);

  useEffect(() => {
    if (verify || verify2) {
      setIsVoted(true);
      mutate();
    } else {
      setIsVoted(false);
    }
  }, [publication]);

  return (
    <div className="xs:w-[300px] h-[455px] rounded-[20px] bg-white drop-shadow-shadow overflow-hidden sm-[5px] xs:mx-auto">
      <header className="w-full h-[240px] relative overflow-hidden">
        <Image
          className="hover:scale-[1.1] duration-[0.3s]"
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
          <div className="hover:scale-[1.10] duration-[0.3s]">
            <LikeDisable />
          </div>
        )}
      </div>
      <div className="w-full h-[215px] font-roboto">
        <header>
          <h3
            onClick={navigate}
            className="font-[600] h-[25px] scroll text-[20px] leading-[23px] text-primary-blackLight mt-[15px] ml-[23px] cursor-pointer overflow-y-auto"
          >
            {publication?.title} Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Dolore odio totam labore praesentium quo
            architecto neque, at, dolorem accusantium sed iusto porro aspernatur
            aperiam magnam? Libero ducimus suscipit ut hic.
          </h3>
        </header>
        <p className="min-h-[70px] max-h-[70px] overflow-y-auto font-[400] text-[15px] leading-[17px] text-[#6E6A6C] ml-[23px] mr-[21px] mt-[5px] mb-[15px] scroll ">
          {publication?.description} Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Omnis, voluptas deleniti? Fuga maiores et molestiae
          veritatis recusandae dolorem unde, deleniti quas, laboriosam accusamus
          voluptatem magni! Aperiam cum quidem nihil ullam. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Temporibus at corporis
          delectus enim asperiores? Soluta non eaque, amet suscipit minus
          aperiam voluptate accusantium, hic, nihil eum quas voluptatum cumque.
          Excepturi?
        </p>
        <footer className="">
          <Link
            className="inline-block w-[80%] overflow-x-hidden whitespace-nowrap font-[500] text-[14px] leading-[16px] text-[#1B4DB1] mx-[27px]"
            href="https://www.academlo.com"
            target="_blank"
          >
            {publication?.content} Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quam cum ad nisi aut eum eius amet sit eaque
            debitis vel maxime dignissimos a dolorum, fugiat reprehenderit
            dolores nobis eveniet laboriosam?
          </Link>
          <div className="flex items-center gap-[10px] mt-[12px] ml-[30px]">
            <Person />
            <p className="font-[500] text-[14px] leading-[16px] text-primary-blackLight ">
              {publication?.votes_count} votos
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default EventCard;
