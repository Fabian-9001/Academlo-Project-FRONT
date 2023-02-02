import Image from 'next/image';

export default function SignIn() {
  return (
    <div className="grid max-w-[1280px] w-full font-roboto mx-auto grid-cols-1 md:grid-cols-2">
      <div className="h-[832px] hidden md:inline bg-center bg-no-repeat bg-auto bg-[url('/images/desktop/bgImgLogin.png')] ">
        <div className="flex  mt-[450px] justify-center">
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
      <div className="container grid grid-cols-1 md:px-10 items-center  text-black mx-auto h-[736px]">
        <div className="mt-16 flex justify-center">
          <Image
            width={187}
            height={168}
            src="/images/FrameLogo.png"
            alt="img login"
          />
        </div>
        <div className="bg-white w-full px-4 mt-7 mx-2">
          <p className="font-bold text-[32px] text-inter">Login</p>
          <p className="text-#4D4D4D mt-1 leading-5 text-[16px] font-400 font-inter text-inter">
            Login with the data you entered during your registration.
          </p>
        </div>
        <form className="flex  flex-col w-full px-4 bg-white  ">
          <div>
            <label className=" mt-2 text-#1D1C3F  mb-1 font-bold text-lg">
              Email
            </label>
            <input
              className="w-full pl-[25px] leading-[15px]  border-slate-500 outline-none bg-white border-2 rounded-md h-14"
              type="email"
            />
          </div>
          <div className="mt-4 mb-5">
            <label className="text-#1D1C3F font-bold mb-1 text-lg">
              Password
            </label>
            <input
              className="w-full pl-[25px] leading-[15px] border-slate-500 outline-none bg-white border-2 rounded-md h-14"
              type="password"
            />
          </div>

          <button className="text-white mt-2 h-12 rounded-md bg-blue-800">
            Log in
          </button>
        </form>
        <p className="w-1/2 text-center text-#4D4D4D -mt-6 mx-auto leading-5 text-[16px] font-400 font-inter text-inter ">
          Did you forget your password?
        </p>
      </div>
    </div>
  );
}
