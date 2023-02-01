import Searcher from './Searcher';

const Footer = () => {
  return (
    <div className="container mx-auto h-[488px] w-[1280px]  bg-[url('/images/footerImg.png')] bg-no-repeat bg-cover bg-center">
      <div className=" flex  w-full justify-center  pt-[302px]">
        <Searcher />
      </div>
    </div>
  );
};

export default Footer;
