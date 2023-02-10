import 'animate.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import style from '../styles/custom/header.module.css';
import CategoryButton from './CategoryButton';
import Searcher from './Searcher';

const Header = () => {
  const router = useRouter();
  return (
    <div className="w-full relative h-[480px]  sm:h-[490px]">
      <div
        className={`w-full h-full flex ${style.sliderHeader} absolute brightness-[0.8]`}
      >
        <div className="min-w-[100%] h-full relative">
          <img
            className="object-cover w-full h-full"
            src="/images/headerImg.png"
            alt=""
          />
        </div>
        <div className="min-w-[100%] h-full relative overflow-hidden ">
          <Image
            fill={true}
            style={{ objectFit: 'cover' }}
            alt=""
            src={'/images/header/slide1.png'}
          />
        </div>
        <div className="min-w-[100%] h-full relative">
          <Image
            fill={true}
            style={{ objectFit: 'cover' }}
            alt=""
            src={'/images/header/slide2.png'}
          />
        </div>
      </div>
      <div className="py-[70px] px-[20px]">
        <Image
          className={`mx-auto relative mb-[60px] animate__animated animate__tada`}
          width={215}
          height={190}
          src="/images/imgHeader.png"
          alt="Imagen de Palabra Para Cuando"
        />
        <div className="w-full relative mx-auto flex justify-center">
          <Searcher />
        </div>
        <div className="flex relative justify-center gap-[10px] text-[#A7A6A7] text-[13px] font-normal mt-[20px]">
          <div
            onClick={() => router.push('/artists')}
            className="hover:scale-[1.05] duration-[0.3s]"
          >
            <CategoryButton style={true} text="Artistas y conciertos" />
          </div>
          <div
            onClick={() => router.push('/tournaments')}
            className="hover:scale-[1.05] duration-[0.3s]"
          >
            <CategoryButton style={true} text="Torneos" />
          </div>
          <div
            onClick={() => router.push('/brands')}
            className="hover:scale-[1.05] duration-[0.3s]"
          >
            <CategoryButton style={true} text="Marcas y tiendas" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
