import Image from 'next/image';

const NavBar = () => {
  return (
    <nav className="h-[71px] relative mx-auto p-5 px-6 max-w-[1280px]">
      <div className=" justify-between text-[11px]  font-roboto font-[500] mx-auto  flex ">
        <div>
          <Image
            width={62}
            height={30}
            src="/images/logoNav.png"
            alt="logonav"
          />
        </div>
        <div className="flex items-center gap-5">
          <div className="flex gap-1">
            <span>
              <Image width={16} height={16} src="/svg/plus.svg" alt="plus" />
            </span>
            <a href="" className="text-blue-800 text-[12px]">
              Crear publicación
            </a>
          </div>
          <a href="#">Log In</a>
          <a href="#">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
