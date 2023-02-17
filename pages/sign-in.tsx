import Cookies from 'js-cookie';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { Login } from '../lib/interfaces/auth.interface';
import { login } from '../lib/services/auth.services';
import Link from 'next/link';
import Swal from 'sweetalert2';

export default function SignIn() {
  const { handleSubmit, register } = useForm<Login>();
  const submit = (data: Login) => {
    login(data)
      .then((res) => {
        Cookies.set('token', res.data.token[0].public);
        window.location.href = '/profile';
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Sesion iniciada!',
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Oops, verifica tus datos',
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div className="grid  bg-white w-full min-h-[100vh] font-roboto mx-auto grid-cols-1 md:grid-cols-2 pb-[85px] md:pb-0">
      <div className="hidden  md:flex md:justify-center md:items-center bg-center bg-no-repeat bg-cover bg-[url('/images/desktop/bgImgLogin.png')] ">
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
            src="/images/Frame-4.png"
            alt="img login"
          />
        </div>
        <div className="bg-white w-full px-[8px] mt-7 mx-2">
          <p className="font-bold text-[32px] text-inter">Login</p>
          <p className="text-#4D4D4D mt-1 leading-5 text-[16px] font-400 font-inter text-inter">
            Login with the data you entered during your registration.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(submit)}
          className="flex  flex-col w-full px-4 bg-white  "
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
            Log in
          </button>
        </form>
        <Link
          href={'/auth/recovery-password'}
          className="w-1/2 text-center text-#4D4D4D -mt-6 mx-auto leading-5 text-[16px] font-400 font-inter text-inter pt-[20px] "
        >
          Did you forget your password?
        </Link>
      </div>
    </div>
  );
}
