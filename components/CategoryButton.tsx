import React from 'react';

const StoreAndBrands = ({ text }: { text: string }) => {
  return (
    <button className="w-auto h-[45px] rounded-[25px] bg-white py-[15px] px-[20px] flex items-center justify-center border-[1px] border-[#A7A6A7]">
      <p className="whitespace-nowrap font-roboto font-[500] text-[13px] leading-[15px] text-[#A7A6A7] ">
        {text}
      </p>
    </button>
  );
};

export default StoreAndBrands;
