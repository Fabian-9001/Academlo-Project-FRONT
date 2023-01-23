import Image from 'next/image';
import Searcher from './Searcher';

const Header = () => {
  return (
    <section className="container flex flex-col justify-center items-center mx-auto  h-[488px] w-full max-w-[1280px] bg-[url('/images/headerImg.png')] bg-cover bg-no-repeat bg-center bg">
      <div className="mb-10">
        <Image
          width={214}
          height={190}
          src="/images/imgHeader.png"
          alt="header img"
        />
      </div>
      <div className="">
        <Searcher />
      </div>
      <div className="flex gap-3 text-[#A7A6A7] text-[13px] font-normal mt-4 ">
        <button className="bg-white px-5 py-1 rounded-[23px]">
          Marcas y tiendas
        </button>
        <button className="bg-white px-5 py-1 rounded-[23px]">
          Artistas y conciertos
        </button>
        <button className="bg-white px-5 py-1 rounded-[23px]">Torneos</button>
      </div>
    </section>
  );
};

export default Header;
