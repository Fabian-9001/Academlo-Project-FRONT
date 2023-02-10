import Image from 'next/image';
import NavBar from '../components/NavBar';
import { useRouter } from 'next/router';

const Settings = () => {
  const router = useRouter();
  return (
    <div className="pb-[60px] w-full min-h-[100vh] bg-white flex flex-col  r">
      <NavBar />
      <div className="w-full h-[129px] bg-[#1B4DB1]">
        <div className="max-w-[1280px] mx-auto flex justify-start items-end ">
          <p
            onClick={() => router.push('/profile')}
            className="cursor-pointer font-roboto font-[900] text-[48px] text-white leading-[56px] py-[35px] px-[20px]"
          >
            Perfil
          </p>
        </div>
      </div>
      <form className="w-full px-[20px] flex flex-wrap justify-center items-center gap-[40px] mx-auto mt-[80px]">
        <div className="flex justify-center flex-col items-center">
          <p className="mb-[35px] font-[500] font-roboto text-[24px] leading-[28px] text-black">
            Información de contacto
          </p>
          <div className="relative flex items-center justify-center">
            <input
              className="w-[220px]  flex items-center justify-center relative  h-[205px] rounded-[15px] bg-[#D9D9D9]"
              type="text"
            />
            <Image
              className=" absolute "
              width={16}
              height={16}
              src={'/images/addFile.png'}
              alt=""
            />
          </div>

          <p className="mt-[20px] font-roboto font-[400] text-[16px] leading-[19px] text-[#6E6A6C]">
            Agrega una foto para tu perfil
          </p>
        </div>
        <div className="flex flex-col gap-[50px]">
          <div className="">
            <label
              className="font-inter font-[400] text-[16px] leading-[16px]"
              htmlFor=""
            >
              First Name
            </label>
            <input
              className="w-full h-[50px] bg-white  pl-[30px] max-w-[640px] rounded-[10px] border-[1px] border-[#7D7D7D]"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div>
            <label
              className="font-inter font-[400] text-[16px] leading-[16px]"
              htmlFor=""
            >
              First Name
            </label>
            <input
              className="w-[100%] h-[50px] pl-[30px]  bg-white max-w-[640px] rounded-[10px] border-[1px] border-[#7D7D7D]"
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Settings;
