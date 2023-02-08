import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { changePassword } from '../../../lib/services/auth.services';

const Token = () => {
  const { handleSubmit, register } = useForm({
    defaultValues: { password: '' },
  });
  const router = useRouter();
  const submit = ({ password }: { password: string }) => {
    const token: any = router.query.token;
    changePassword({ token, password })
      .then(() => (window.location.href = '/profile'))
      .catch((err) => console.log(err));
  };
  return (
    <div className="grid  bg-white w-full min-h-[100vh] font-roboto mx-auto grid-cols-1 md:grid-cols-2 pb-[85px] md:pb-0">
      <div className="hidden  md:flex md:justify-center md:items-center bg-center bg-no-repeat bg-cover bg-[url('/images/headerimg.png')] ">
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
        <div className="bg-white w-full px-[8px] mt-7 mx-2">
          <p className="font-bold text-[32px] text-inter">Login</p>
          <p className="text-#4D4D4D mt-1 leading-5 text-[16px] font-400 font-inter text-inter">
            Change Password
          </p>
        </div>
        <form
          onSubmit={handleSubmit(submit)}
          className="flex  flex-col w-full px-4 bg-white  "
        >
          <div className="mt-4 mb-5">
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
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default Token;
