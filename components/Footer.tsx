import Searcher from "./Searcher";

const Footer = () => {
  return (
    <section className="container mx-auto h-[488px] w-[1280px]  bg-[url('/images/footerImg.png')] bg-no-repeat bg-cover bg-center">
      <div className=" flex  w-full justify-center  pt-[302px]">
      <Searcher />
      </div>
    </section>
  );
};

export default Footer;
