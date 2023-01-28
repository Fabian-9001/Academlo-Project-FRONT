import React from 'react';
import Image from 'next/image';

const LikeDisable = () => {
  return (
    <button>
      <Image
        src="/svg/likeDisable.svg"
        width={50}
        height={50}
        alt="Heart icon with background pink"
      />
    </button>
  );
};

export default LikeDisable;
