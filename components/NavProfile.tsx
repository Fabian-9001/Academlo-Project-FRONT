import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavProfile = () => {
  const router = useRouter();
  return (
    <div>
      <nav className="h-[71px] bg-black relative mx-auto p-5  px-6 max-w-[1280px]">
        <div className=" justify-between text-[11px]  font-roboto font-[500] mx-auto  flex ">
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
            <div className="flex gap-1">
              <span>
                <Image
                  width={16}
                  height={16}
                  className="hidden md:block"
                  src="/svg/plus.svg"
                  alt="plus"
                />
              </span>
              <Link
                href="/new-post"
                className=" hidden md:inline  text-blue-800  text-[12px]"
              >
                Crear publicación
              </Link>
            </div>
            <div className="flex gap-1">
              <span>
                <Image
                  width={16}
                  height={16}
                  className="hidden md:block"
                  src="/svg/corazon.svg"
                  alt="plus"
                />
              </span>
              <a href="" className=" hidden md:inline text-white  text-[12px]">
                Mis votos
              </a>
            </div>

            <div onClick={() => router.push('/profile')}>
              <div className="w-[34px] h-[34px] border ml-4 border-white rounded-3xl">
                <button>
                  <Image
                    src="svg/profileIcon.svg"
                    width={15}
                    height={15}
                    alt="Person icon"
                    className="pt-1 ml-2"
                  />
                </button>
              </div>
            </div>
            <a href="#" className="">
              hcoder@gmail.com
            </a>
            <span className="mr-3 -ml-3">
              <Image
                src="svg/expandIcon.svg"
                width={10}
                height={10}
                alt="Person icon"
                className="pt-1 ml-2"
              />
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavProfile;
