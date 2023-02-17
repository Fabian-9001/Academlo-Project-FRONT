import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Swal from 'sweetalert2';
import Button from '../../components/Button';
import CategoryButton from '../../components/CategoryButton';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import Person from '../../components/Person';
import Searcher from '../../components/Searcher';
import SliderCards from '../../components/SliderCards';
import SuggestedList from '../../components/SuggestedList';
import {
  usePublication,
  usePublications,
} from '../../lib/services/publications.services';
import { useUser } from '../../lib/services/user.services';
import { votePublication } from '../../lib/services/votes.services';

export default function Details() {
  const [isVoted, setIsVoted] = useState(false);
  const router = useRouter();
  const id: any = router.query.id;
  const { mutate, data } = usePublication(id);
  const { data: dataMain } = usePublications();
  const { data: user } = useUser();
  let publications = dataMain?.filter(
    (element) => element.tags[0].name === data?.tags[0].name
  );
  const vote = () => {
    if (data && user) {
      setIsVoted(!isVoted);
      votePublication(data.id)
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

  return (
    <div className="bg-white min-h-[100vh]">
      <NavBar />
      <div className="w-full min-h-[115px] h-auto bg-white shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]">
        <div className="max-w-[980px] h-full pt-[25px] px-[20px] flex  gap-[20px] justify-between items-center mx-auto md:flex-row md:px-[20px] md:gap-[80px] lg:gap-[165px] lg:px-0">
          <div className="hidden gap-[10px] justify-center md:flex md:w-full md:justify-start ">
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
          <button className="min-w-[46px] h-[45px] flex items-center justify-center relative rounded-[23px] bg-white border-[#A7A6A7] border-[1px] md:hidden">
            <Image width={18} height={12} src={'/svg/list.svg'} alt="" />
          </button>
          <div className="w-[100%] sm:min-w-[380px] flex justify-center md:justify-end sm:w-[465px] ">
            <Searcher style={true} />
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 pt-[60px] pb-[80px] max-w-[980px] sm:mx-auto sm:grid-cols-2 sm:pt-[100px]">
          <header className="font-roboto p-[20px] sm:max-h-[315px]">
            <p className="font-[500] text-[16px] leading-[19px] text-primary-black pb-[5px]">
              {data?.publication_type.name} / {data?.tags[0].name}
            </p>
            <h3 className="font-[900] text-[36px] leading-[42px] text-primary-black pb-[20px] md:pb-[25px] md:text-[48px] md:w-[90%]">
              {data?.title}
            </h3>
            <p className="font-[400] text-[15px] leading-[17px] text-primary-grayDark pb-[30px] md:pb-[45px] md:w-[82%] sm:pr-[20px]">
              {data?.description}
            </p>
            <Link
              className="font-[500] text-[14px] leading-[16px] text-primary-blue"
              href={''}
            >
              {data?.content}
            </Link>
            <div className="flex items-center gap-[10px] pt-[15px] ">
              <Person />
              <p className="font-[500] text-[14px] leading-[16px] text-primary-blackLight">
                {data?.votes_count} votos
              </p>
            </div>
          </header>
          <div className="min-w-[375px]  mx-auto min-h-[250px] md:min-h-[380px] max-w-[540px] max-h-[380px] mb-[30px] p-[20px] relative row-span-2 sm:mb-[0] sm:w-full">
            <Image
              src={
                data?.picture
                  ? data?.picture
                  : '/images/topics/tournaments/slide1.jpg'
              }
              fill={true}
              alt=""
            />
          </div>
          <footer
            onClick={vote}
            className="w-full px-[10px] sm:pr-[20px] sm:px-[20px]"
          >
            <Button text={isVoted ? 'Quitar Voto' : 'Votar'} />
          </footer>
        </div>
        <div className="pb-[25px] md:pb-[80px]">
          <SuggestedList />
        </div>
        <div className="font-roboto flex flex-col gap-[35px] pb-[95px] pl-[20px] max-w-[980px] mx-auto lg:pl-[0] sm:pb-[115px]">
          <div className="flex flex-col gap-[10px]">
            <h2 className="font-[500] text-[24px] leading-[28px] text-primary-blackLight">
              Recientes
            </h2>
            <p className="font-[400]] text-[16px] leading-[19px] text-primary-grayDark">
              Las personas últimanete están hablando de esto
            </p>
          </div>
          <SliderCards publications={publications} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
