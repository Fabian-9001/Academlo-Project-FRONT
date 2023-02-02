import Searcher from './Searcher';

const Footer = () => {
  return (
    <div className="w-full h-[490px] bg-[url(/images/footerImg.png)] bg-center bg-cover bg-no-repeat px-[25px] pt-[300px]">
      <div className="mx-auto flex justify-center">
        <Searcher />
      </div>
    </div>
  );
};

export default Footer;
