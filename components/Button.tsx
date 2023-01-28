import React from 'react';

const Button = ({ text }: { text: string }) => {
  return (
    <button className="w-full h-[45px] rounded-[30px] p-[20px] bg-[#1B4DB1] flex items-center justify-center">
      <p className="font-roboto font-[600] text-[16px] leading-[20px] text-white">
        {text}
      </p>
    </button>
  );
};

export default Button;
