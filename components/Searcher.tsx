import Image from 'next/image';
import { FieldValues, useForm } from 'react-hook-form';
import styleGlobal from '../styles/custom/header.module.css';
const Searcher = ({ style }: { style?: boolean }) => {
  const { handleSubmit, register, reset } = useForm();
  let submit = (data: FieldValues) => {
    console.log(data);
    reset({ request: '' });
  };
  return (
    <form
      onSubmit={handleSubmit(submit)}
      className={`${style ? 'border-[1px] border-[#A7A6A7]' : ''} ${
        styleGlobal.searcher
      } w-full max-w-[465px] h-[45px] rounded-[25px] bg-white font-[400] flex justify-between active:scale-[0.95] duration-[0.3s]`}
    >
      <input
        {...register('request')}
        className={`font-roboto text-[#727272] text-[13px] pl-[25px] leading-[15px] w-[80%] bg-transparent outline-none`}
        type="text"
        placeholder="¿Qué quieres ver en tu ciudad?"
      />
      <button>
        <Image
          className={`mr-[20px] duration-[0.5s] hover:duration-[0.5s]`}
          src="/svg/searcher.svg"
          width={18}
          height={18}
          alt="Icono de lupa"
        />
      </button>
    </form>
  );
};

export default Searcher;
