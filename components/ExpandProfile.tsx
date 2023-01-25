import Image from 'next/image';

const ExpandProfile = () => {
  return (
    <div className="border-solid border-2 border-black rounded-[25px] flex flex-col  w-[250px] h-[218px]">
      <div className="flex items-center mt-6 font-[500] justify-center pr-6 cursor-pointer">
        <span>
          <Image
            className=""
            src="svg/expand1.svg"
            width={18}
            height={18}
            alt="expand1 img"
          />
        </span>
        <p className="bg-white text-lg text-black px-5 font-Inter  py-1  ">
          Configuracion
        </p>
      </div>

      <div className="flex -ml-2 mt-2 items-center justify-center pr-6 cursor-pointer font-[500]">
        <span>
          <Image
            className=""
            src="svg/expand2.svg"
            width={22}
            height={24}
            alt="expand1 img"
          />
        </span>
        <p className="bg-white text-lg  text-black px-5 font-Inter  py-1  ">
          Cerrar sesión
        </p>
      </div>
      <span className="">
        <Image
          className="mt-7 ml-6"
          src="svg/line.svg"
          width={180}
          height={0}
          alt="expand1 img"
        />
      </span>

      <p className="bg-white text-lg text-[#6E6A6C] px-5 font-Inter mt-4 font-[500] cursor-pointer  py-1  ">
        Ayuda y soporte
      </p>
    </div>
  );
};

export default ExpandProfile;
