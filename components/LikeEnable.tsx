import React from 'react';
import Image from 'next/image';

const LikeEnable = () => {
  return (
    <button>
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
