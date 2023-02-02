import Image from 'next/image';
import EventCard from './EventCard';
import NavProfile from './NavProfile';

const Profile = () => {
  return (
    <div className="">
      <NavProfile />
      <div>
        <div className="grid relative max-w-[1280px] h-[129px] bg-[#1B4DB1] w-full font-roboto mx-auto grid-cols-1">
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%]">
            <Image
              src="/images/imgProfile.png"
              width={117}
              height={117}
              alt="Person icon"
              className="pt-1 ml-2"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-20 w-full max-w-[1280px] gap-3 text-[#A7A6A7] text-[13px] font-normal mx-auto ">
        <p className="bg-white px-5 py-1   border-solid border-[#A7A6A7] border-[1px] cursor-pointer rounded-[23px]">
          Mis votos
        </p>
        <p className="bg-white px-5 py-1   border-solid border-[#A7A6A7] border-[1px] cursor-pointer rounded-[23px]">
          Mis publicaciones
        </p>
      </div>
      <div className="grid  mt-16  sm:grid-rows-2 grid-cols-1 ">
        <div className="grid gap-y-11  grid-cols-1 sm:grid-cols-3">
          <div className="flex justify-center ml-4 mr-4">
            <EventCard />
          </div>
          <div className="flex justify-center ml-4 mr-4">
            <EventCard />
          </div>
          <div className="flex justify-center ml-4 mr-4">
            <EventCard />
          </div>
        </div>
        <div className="grid gap-y-11  grid-cols-1 sm:grid-cols-3">
          <div className="flex justify-center ml-4 mr-4">
            <EventCard />
          </div>
          <div className="flex justify-center ml-4 mr-4">
            <EventCard />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <button className="w-[125px] h-[45px] rounded-[30px] p-[20px] bg-[#1B4DB1] flex items-center justify-center">
          <p className="font-roboto font-[600] text-[16px] leading-[20px] text-white">
            Ver mas
          </p>
        </button>
      </div>
      <div className="container mt-20 mx-auto h-[182px] w-full  max-w-[1280px]  bg-[url('/images/mobile/footerProfile.png')] bg-no-repeat bg-cover sm:bg-[url('/images/footerImg.png')] bg-center"></div>
    </div>
  );
};

export default Profile;
