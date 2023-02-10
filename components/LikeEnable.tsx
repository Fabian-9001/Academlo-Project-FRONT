import React from 'react';
import Image from 'next/image';

const LikeEnable = () => {
  return (
    <button className="border-[#e5e7eb] border-[1px] rounded-[50%]">
      <Image
        src="/svg/likeEnable.svg"
        width={50}
        height={50}
        alt="Icono de circulo con corazón"
      />
    </button>
  );
};

export default LikeEnable;
