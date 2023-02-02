import React from 'react';

const StoreAndBrands = ({ text, style }: { text: string; style: number }) => {
  return (
    <button
      className={`w-auto ${
        style ? 'h-[30px]' : 'h-[45px]'
      } rounded-[25px] bg-white py-[15px] px-[20px] flex items-center justify-center border-[1px] border-[#A7A6A7] ${
        style ? 'sm:px-[30px]' : ''
      }`}
    >
      <p className="xs:whitespace-nowrap font-roboto font-[500] text-[13px] leading-[15px] text-[#A7A6A7] ">
        {text}
      </p>
    </button>
  );
};

export default StoreAndBrands;
