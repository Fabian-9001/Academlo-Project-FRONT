import React, { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { RecoverPassword } from '../../lib/interfaces/auth.interface';
import { recoveryPassword } from '../../lib/services/auth.services';
import { useRouter } from 'next/router';

const RecoveryPassword = () => {
  const { handleSubmit, register } = useForm<RecoverPassword>();
  const [step, setStep] = useState(1);
  const router = useRouter();
  const submit = (data: RecoverPassword) => {
    if (step === 1 && data) {
      recoveryPassword(data)
        .then(() => {
          setStep(step + 1);
        })
        .catch((err) => console.log(err));
    } else {
      if (data) {
        router.push(`/auth/change-password/${data.token}`);
      }
    }
  };

  return (
    <div>
      <div className="grid w-full min-h-[100vh] bg-white font-roboto mx-auto grid-cols-1 md:grid-cols-2 pb-[45px] md:pb-0">
        <div className=" hidden md:flex md:justify-center md:items-center bg-center bg-no-repeat bg-cover bg-[url('/images/headerimg.png')] ">
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
            <p className="font-bold text-[32px] text-inter">
              Recovery Password
            </p>
            <p className="text-#4D4D4D mt-1 leading-5 text-[16px] font-400 font-inter text-inter">
              Enter your email to recovery password
            </p>
          </div>
          <form
            onSubmit={handleSubmit(submit)}
            className="flex flex-col gap-[5px] w-full px-4 bg-white  "
          >
            {step === 1 ? (
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
            ) : (
              <div>
                <label className=" mt-2 text-#1D1C3F  mb-1 font-bold text-lg">
                  Token
                </label>
                <input
                  {...register('token')}
                  className="w-full pl-[25px] leading-[15px]  border-slate-500 outline-none bg-white border-2 rounded-md h-14"
                  type="text"
                />
              </div>
            )}

            <button className="text-white mt-2 h-12 rounded-md bg-blue-800">
              {step === 1
                ? 'Solicitar Codigo de Verificación'
                : 'Enviar Codigo de Verificación'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecoveryPassword;
