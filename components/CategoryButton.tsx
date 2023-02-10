import React from 'react';

const CategoryButton = ({ text, style }: { text: string; style?: boolean }) => {
  return (
    <button
      className={`${
        style ? 'h-[30px]' : 'h-[45px]'
      } w-auto rounded-[25px] bg-white text-[#959595] duration-[0.3s] hover:text-[#5b5b5b] py-[15px] px-[20px] flex items-center justify-center border-[1px] border-[#A7A6A7]`}
    >
      <p
        className={`${
          style ? 'whitespace-normal' : 'whitespace-nowrap'
        } font-roboto font-[500] text-[13px] leading-[15px] `}
      >
        {text}
      </p>
    </button>
  );
};

export default CategoryButton;
