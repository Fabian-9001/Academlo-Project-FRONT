import React from 'react';
import Image from 'next/image';

const ArrowNext = () => {
  return (
    <button>
      <Image
        src="/svg/arrowNext.svg"
        width={50}
        height={50}
        alt="Arrow to right icon"
      />
    </button>
  );
};

export default ArrowNext;
