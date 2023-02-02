import Image from 'next/image';
import CategoryButton from './CategoryButton';
import Searcher from './Searcher';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  return (
    <section className="w-full h-[480px] py-[70px] px-[20px] bg-[url(/images/headerImg.png)] bg-center bg-cover bg-no-repeat">
      <Image
        className="mx-auto mb-[30px]"
        width={215}
        height={190}
        src="/images/imgHeader.png"
        alt="header img"
      />
      <div className="w-full mx-auto flex justify-center">
        <Searcher />
      </div>
      <div className="flex justify-center gap-[10px] text-[#A7A6A7] text-[13px] font-normal mt-[20px]">
        <div
          onClick={() => router.push('/artists')}
          className="hover:scale-[1.05] duration-[0.5s]"
        >
          <CategoryButton style={true} text="Artistas y conciertos" />
        </div>
        <div
          onClick={() => router.push('/tournaments')}
          className="hover:scale-[1.05] duration-[0.5s]"
        >
          <CategoryButton style={true} text="Torneos" />
        </div>
        <div
          onClick={() => router.push('/brands')}
          className="hover:scale-[1.05] duration-[0.5s]"
        >
          <CategoryButton style={true} text="Marcas y tiendas" />
        </div>
      </div>
    </section>
  );
};
export default Header;
