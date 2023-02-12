import Image from 'next/image';
import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { useForm } from 'react-hook-form';
const ProfileInfo = () => {
  const [imageUrl, setImageUrl] = useState<any>();
  const { handleSubmit, register, watch } = useForm();
  return (
    <div className="bg-white">
      <NavBar />
      <div>
        <div className="grid relative items-center pl-16 h-[129px] bg-[#1B4DB1] w-full font-roboto mx-auto grid-cols-1">
          <h1 className="font-roboto font-bold text-[48px]">Perfil</h1>
        </div>
        <div className="flex flex-col  mx-auto w-full max-w-[940px]  mt-10 ">
          <h2 className=" pb-5 text-[#1A1E2E] font-roboto font-500 text-[24px]">
            Información de contacto
          </h2>
          <div className="flex ">
            <div className="">
              <div
                style={{ backgroundImage: `url(${imageUrl})` }}
                className="w-[220px] h-[206px] bg-primary-grayLight bg-[url('/svg/addFile.svg')] bg-no-repeat rounded-[15px] bg-center"
              >
                <input
                  id="test"
                  // {...register('firstFile')}
                  className="w-[62px] h-[38px] opacity-0"
                  type="file"
                />
              </div>
              <p className=" pt-3  text-gray-600 text-[16px] font-roboto font-400">
                Agrega una foto para tu perfil
              </p>
            </div>
            <div className="flex flex-col pl-20 justify-center gap-12 w-full">
              <div className="relative">
                <label
                  className="font-inter font-subtitle-2 text-subtitle-2 leading-title-3 text-[#7D7D7D] bg-white p-[5px] pt-[0px] absolute top-[-9px] left-[10px]"
                  htmlFor="titlePost"
                >
                  First Name
                </label>
                <input
                  // {...register('title')}
                  className="w-full max-w-[640px] h-[50px] border-[1px] border-[#7D7D7D] rounded-[10px] bg-transparent text-black p-[15px]"
                  type="text"
                  id="titlePost"
                />
              </div>
              <div className="relative">
                <label
                  className="font-inter font-subtitle-2 text-subtitle-2 leading-title-3 text-[#7D7D7D] bg-white p-[5px] pt-[0px] absolute top-[-9px] left-[10px]"
                  htmlFor="titlePost"
                >
                  Last Name
                </label>
                <input
                  // {...register('title')}
                  className="w-full max-w-[640px] h-[50px] border-[1px] border-[#7D7D7D] rounded-[10px] bg-transparent text-black p-[15px]"
                  type="text"
                  id="titlePost"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-[940px] mx-auto">
          <h2 className=" mt-10   text-[#1A1E2E] font-roboto font-500 text-[24px]">
            Mis intereses
          </h2>
          <div className="flex flex-wrap gap-[20px] p-[25px] mb-[50px] justify-center sm:flex-nowrap">
            <div
              style={{ backgroundImage: `url(${imageUrl})` }}
              className="w-[300px] h-[152px] rounded-[15px] bg-primary-grayLight bg-[url('/svg/addFile.svg')] bg-no-repeat bg-center"
            >
              <input
                id="test"
                // {...register('firstFile')}
                className="w-[300px] h-[152px] opacity-0"
                type="file"
              />
              <p className=" pt-3 text-gray-600 text-[16px] text-center font-roboto font-400">
                Añade una categoria
              </p>
            </div>
            <div className="w-[300px] h-[152px] rounded-[15px] bg-primary-grayLight bg-[url('/svg/addFile.svg')] bg-no-repeat bg-center">
              <input
                // {...register('secondFile')}
                className="w-[300px] h-[152px] opacity-0"
                type="file"
              />
              <p className=" pt-3 text-gray-600 text-[16px] text-center font-roboto font-400">
                Añade una categoria
              </p>
            </div>
            <div className="w-[300px] h-[152px] rounded-[15px] bg-primary-grayLight bg-[url('/svg/addFile.svg')] bg-no-repeat bg-center">
              <input
                // {...register('thirdFile')}
                className="w-[300px] h-[152px] opacity-0 bg-[url()]"
                type="file"
              />
              <p className=" pt-3 text-gray-600 text-[16px] text-center font-roboto font-400">
                Añade una categoria
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" mb-[80px]">
        <button className="w-[183px] h-[50px] rounded-[30px] p-[20px] bg-primary-blue flex items-center justify-center mx-auto ">
          <p className="font-inter font-title-3 text-subtitle-1 leading-subtitle-1 text-white">
            {/* {step === 1 ? 'Siguiente' : 'Publicar'} */}Guardar cambios
          </p>
        </button>
      </div>
      <div className="h-[185px] w-full bg-[url('/images/mobile/footerProfile.png')] bg-no-repeat bg-cover sm:bg-[url('/images/footerImg.png')] bg-center"></div>
    </div>
  );
};
export default ProfileInfo;
