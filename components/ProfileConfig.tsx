import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProfileConfig = ({ isActive }: { isActive: boolean }) => {
  const closeSession = () => {
    Cookies.remove('token');
    window.location.href = '/';
  };
  return (
    <div
      className={`w-[250px] h-[220px] rounded-[25px] bg-white shadow-[-5px_8px_31px_-8px_rgba(0,0,0,0.25)] p-[30px] absolute top-[46px] sm:right-[-7%] duration-[0.3s] z-10 ${
        isActive ? '' : 'hidden'
      }`}
    >
      <div className="flex gap-[20px] pb-[25px] relative">
        <Image
          className="hover:rotate-[180deg] duration-[0.8s] cursor-pointer"
          width={18}
          height={18}
          src={'/svg/config.svg'}
          alt="Icono de figuras geométricas de cuadrados y rectangulos"
        />
        <p className="font-inter font-[400] text-[18px] text-black">
          Configuración
        </p>
      </div>
      <div className="flex gap-[20px] pb-[35px] relative">
        <Image
          className="hover:rotate-[360deg] duration-[0.8s] cursor-pointer"
          onClick={closeSession}
          width={18}
          height={18}
          src={'/svg/session.svg'}
          alt="Icono de apagar"
        />
        <p className="font-inter font-[400] text-[18px] text-black">
          Cerrar sesión
        </p>
      </div>
      <hr className="bg-[#6E6A6C] h-[2px] mb-[20px]" />
      <Link
        href={''}
        className="font-inter font-[400] text-[18px] text-[#6E6A6C]"
      >
        Ayuda y soporte
      </Link>
    </div>
  );
};

export default ProfileConfig;
