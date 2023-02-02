import Image from 'next/image';
import CategoryButton from './CategoryButton';
import Searcher from './Searcher';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  return (
    <section className="w-full h-[490px] bg-[url('/images/headerImg.png')] bg-center bg-cover bg-no-repeat pt-[70px] pb-[95px] flex flex-col items-center">
      <Image
        width={215}
        height={190}
        src="/images/imgHeader.png"
        alt="header img"
      />
      <div className="w-full mx-auto flex justify-center px-[20px] mt-[60px]">
        <Searcher />
      </div>
      <div className="w-full flex justify-center gap-[10px] p-[20px]">
        <div
          className="hover:scale-[1.05] duration-[0.3s]"
          onClick={() => router.push('/brands')}
        >
          <CategoryButton style={30} text="Marcas y tiendas" />
        </div>
        <div
          className="hover:scale-[1.05] duration-[0.3s]"
          onClick={() => router.push('/artists')}
        >
          <CategoryButton style={30} text="Artistas y conciertos" />
        </div>
        <div
          className="hover:scale-[1.05] duration-[0.3s]"
          onClick={() => router.push('/tournaments')}
        >
          <CategoryButton style={30} text="Torneos" />
        </div>
      </div>
    </section>
  );
};
export default Header;
