import EventCard from '../components/EventCard';
import Image from 'next/image';
import NavBar from '../components/NavBar';
import { useState } from 'react';
import { useVotes } from '../lib/services/votes.services';
import { useUser } from '../lib/services/user.services';
import { useMyPublications } from '../lib/services/publications.services';

export default function Profile() {
  const [isPublications, setIsPublications] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const { data } = useUser();
  const { data: votes } = useVotes(`${data ? data?.results.id : ''}`);
  const { data: publications } = useMyPublications(data?.results.id);

  return (
    <div className="bg-white">
      <NavBar />
      <div>
        <div className="grid relative  h-[129px] bg-[#1B4DB1] w-full font-roboto mx-auto grid-cols-1">
          <div className="max-w-[1280px] mx-auto flex justify-center relative">
            <div className="w-[117px] h-[117px] flex items-center justify-center rounded-[50%] mt-[65px] border cursor-pointer duration-[0.3s] hover:brightness-[0.5] relative">
              <Image
                src="/images/imgProfile.png"
                fill={true}
                alt="Person icon"
              />
              <input
                className="absolute ml-[7px] top-0  h-[100%] rounded-[50%] opacity-0"
                type="file"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-20  gap-[20px] w-full max-w-[1280px]  text-[#A7A6A7] text-[13px] font-normal mx-auto ">
        <button
          onClick={() => setIsPublications(false)}
          className="bg-white px-5 py-1   border-solid border-[#A7A6A7] border-[1px] cursor-pointer rounded-[23px]"
        >
          Mis votos
        </button>
        <button
          onClick={() => setIsPublications(true)}
          className="bg-white px-5 py-1   border-solid border-[#A7A6A7] border-[1px] cursor-pointer rounded-[23px]"
        >
          Mis publicaciones
        </button>
      </div>
      <div
        className={`mx-auto max-w-[980px] mt-[75px]  overflow-hidden
      ${isActive ? 'h-auto' : 'max-h-[990px]'} `}
      >
        {isPublications === false ? (
          <div className="w-full flex flex-wrap lg:grid lg:grid-cols-3 gap-y-[45px] gap-x-[10px] p-[10px]">
            {votes?.map((publication:any) => (
              <EventCard
                key={publication.publication_id}
                publication={publication.Publication}
              />
            ))}
          </div>
        ) : (
          <div className="w-full flex flex-wrap lg:grid lg:grid-cols-3 gap-y-[45px] gap-x-[10px] p-[10px]">
            {publications?.map((publication) => (
              <EventCard key={publication.id} publication={publication} />
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-center mt-[80px] mb-[65px]">
        <button
          onClick={() => setIsActive(!isActive)}
          className="w-[125px] h-[45px] rounded-[30px] p-[20px] bg-[#1B4DB1] flex items-center justify-center"
        >
          <p className="font-roboto font-[600] text-[16px] leading-[20px] text-white">
            {isActive ? 'Ver menos' : 'Ver mas'}
          </p>
        </button>
      </div>
      <div className="h-[185px] w-full bg-[url('/images/mobile/footerProfile.png')] bg-no-repeat bg-cover sm:bg-[url('/images/footerImg.png')] bg-center"></div>
    </div>
  );
}
