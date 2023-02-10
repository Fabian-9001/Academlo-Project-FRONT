import Image from 'next/image';
import Link from 'next/link';
import ProfileConfig from './ProfileConfig';
import { useRouter } from 'next/router';
import { useUser } from '../lib/services/user.services';
import { useState } from 'react';

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();
  const { data } = useUser();

  return (
    <nav className="w-full h-[71px] bg-black p-[25px]">
      <div className=" justify-between font-roboto font-[500] mx-auto flex max-w-[1280px]">
        <header>
          <Image
            className="cursor-pointer"
            onClick={() => router.push('/')}
            width={62}
            height={30}
            src="/images/logoNav.png"
            alt="Logo de sigla PC de palabra Para Cuando"
          />
        </header>
        <div className="flex items-center relative">
          {data ? (
            <div className="flex gap-[20px] md:gap-[40px] items-center">
              <div
                onClick={() => router.push('new-post')}
                className="flex gap-[10px] cursor-pointer"
              >
                <Image
                  width={16}
                  height={16}
                  src="/svg/plus.svg"
                  alt="Imagen de equis"
                />
                <p className="text-[#1B4DB1] text-[12px] hover:brightness-[1.5] duration-[0.3s]">
                  Crear publicación
                </p>
              </div>
              <div
                onClick={() => router.push('/profile')}
                className="hidden sm:flex gap-[10px] cursor-pointer"
              >
                <Image
                  className="hover:drop-shadow-[0px_0px_1px_pink] duration-[0.3s]"
                  width={17}
                  height={14}
                  src="/svg/corazon.svg"
                  alt="Imagen de corazón rosado"
                />
                <p className="text-[11px] font-[400] font-roboto">Mis votos</p>
              </div>
              <div className="flex items-center gap-[25px] cursor-pointer">
                <div
                  onClick={() => router.push('profile')}
                  className="flex items-center gap-[10px]"
                >
                  <Image
                    width={34}
                    height={34}
                    src={'/svg/userLogged.svg'}
                    alt="Imagen de circulo con silueta de persona adentro"
                  />
                  <p className="hidden sm:inline-block font-roboto font-[400] text-[11px] mt-[1px]">
                    {data.results.email}
                  </p>
                </div>
                <Image
                  onClick={() => setIsActive(!isActive)}
                  className="mt-[1px] cursor-pointer"
                  width={13}
                  height={13}
                  src={'/svg/arrowDown.svg'}
                  alt="Imagen de flecha apuntando hacia abajo"
                />
                <ProfileConfig isActive={isActive} />
              </div>
            </div>
          ) : (
            <div className="flex items-center">
              <Link
                className="text-white  hover:text-[#ff64bc] duration-[0.3s] text-[11px] mr-[20px]"
                href={'/auth/sign-in'}
              >
                Log In
              </Link>
              <Link
                className="text-white  hover:text-[#ff64bc] duration-[0.3s] text-[11px]"
                href={'/auth/sign-up'}
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
