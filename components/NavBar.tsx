import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar = () => {
  const router = useRouter();
  return (
    <nav className="w-full h-[71px] bg-black relative mx-auto p-5 px-6 ">
      <div className=" justify-between text-[11px]  font-roboto font-[500] mx-auto  flex max-w-[1280px] ">
        <div>
          <Image
            className="cursor-pointer"
            onClick={() => router.push('/')}
            width={62}
            height={30}
            src="/images/logoNav.png"
            alt="logonav"
          />
        </div>
        <div className="flex items-center gap-5">
          <Link href="/new-post" className="flex gap-1">
            <span>
              <Image width={16} height={16} src="/svg/plus.svg" alt="plus" />
            </span>
            <p className="text-blue-800 text-[12px] hover:brightness-[1.5] duration-[0.3s]">
              Crear publicación
            </p>
          </Link>
          <Link
            className="hover:text-[#Ebec5b] duration-[0.3s] text-[11px]"
            href={'/sign-in'}
          >
            Log In
          </Link>
          <Link
            className="hover:text-[#Ebec5b] duration-[0.3s] text-[11px]"
            href={'/sign-up'}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
