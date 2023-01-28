import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';

const Searcher = () => {
  const { handleSubmit, register, reset } = useForm();
  let submit = (data: any) => {
    console.log(data);
    reset({ request: '' });
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="w-[465px] h-[45px] rounded-[25px] bg-white font-[400] flex justify-between "
    >
      <input
        {...register('request')}
        className="font-roboto text-[#A7A6A7] text-[13px] pl-[25px] leading-[15px] w-[80%] bg-transparent outline-none"
        type="text"
        placeholder="¿Qué quieres ver en tu ciudad?"
      />
      <button>
        <Image
          className="mr-[20px]"
          src="/svg/searcher.svg"
          width={18}
          height={18}
          alt="Magnifying glass icon"
        />
      </button>
    </form>
  );
};

export default Searcher;
