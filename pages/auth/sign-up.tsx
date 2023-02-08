import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { signUp } from '../../lib/services/auth.services';
import { Sign_Up } from '../../lib/interfaces/auth.interface';

export default function SignUp() {
  const { handleSubmit, register } = useForm<Sign_Up>();
  const submit = (data: Sign_Up) => {
    signUp(data)
      .then(() => (window.location.href = '/profile'))
      .catch((err) => console.log(err));
  };
  return (
    <div className="grid w-full min-h-[100vh] bg-white font-roboto mx-auto grid-cols-1 md:grid-cols-2 pb-[45px] md:pb-0">
      <div className=" hidden md:flex md:justify-center md:items-center bg-center bg-no-repeat bg-cover bg-[url('/images/desktop/imgSignUp.png')] ">
        <div className="flex items-center mt-[150px]  justify-center">
          <div>
            <Image
              width={245}
              height={54}
              src="/images/desktop/textLogin1.png"
              alt="img login"
            />
          </div>
          <div>
            <Image
              width={129}
              height={28}
              src="/images/desktop/textLogin2.png"
              alt="img login"
            />
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] grid grid-cols-1 md:px-10 items-center  text-black m-auto h-[736px]">
        <div className="mt-16 flex justify-center">
          <Image
            width={187}
            height={168}
            src="/images/FrameLogo.png"
            alt="img login"
          />
        </div>
        <div className="bg-white w-full px-[17px] pb-[10px] mt-7">
          <p className="font-bold text-[32px] text-inter">Sign up</p>
          <p className="text-#4D4D4D mt-1 leading-5 text-[16px] font-400 font-inter text-inter">
            Enter your data to create an account
          </p>
        </div>
        <form
          onSubmit={handleSubmit(submit)}
          className="flex flex-col gap-[5px] w-full px-4 bg-white  "
        >
          <div>
            <label className=" mt-2 text-#1D1C3F  mb-1 font-bold text-lg">
              Email
            </label>
            <input
              {...register('email')}
              className="w-full pl-[25px] leading-[15px]  border-slate-500 outline-none bg-white border-2 rounded-md h-14"
              type="email"
            />
          </div>
          <div className="flex gap-3 items-center">
            <div>
              <label className=" mt-2 text-#1D1C3F  mb-1 font-bold text-lg">
                Nombre
              </label>
              <input
                {...register('firstName')}
                className="w-full pl-[25px] leading-[15px]  border-slate-500 outline-none bg-white border-2 rounded-md h-14"
                type="text"
              />
            </div>
            <div>
              <label className="text-#1D1C3F font-bold mb-1 text-lg">
                Apellido
              </label>
              <input
                {...register('lastName')}
                className="w-full pl-[25px] leading-[15px] border-slate-500 outline-none bg-white border-2 rounded-md h-14"
                type="text"
              />
            </div>
          </div>
          <div className=" mb-5">
            <label className="text-#1D1C3F font-bold mb-1 text-lg">
              Password
            </label>
            <input
              {...register('password')}
              className="w-full pl-[25px] leading-[15px] border-slate-500 outline-none bg-white border-2 rounded-md h-14"
              type="password"
            />
          </div>
          <button className="text-white mt-2 h-12 rounded-md bg-blue-800">
            Crear cuenta
          </button>
        </form>
        <Link
          href={'/auth/sign-in'}
          className="w-1/2 text-center text-#4D4D4D mt-4 mx-auto leading-5 text-[16px] font-400 font-inter text-inter pt-[20px]"
        >
          or Login
        </Link>
      </div>
    </div>
  );
}
