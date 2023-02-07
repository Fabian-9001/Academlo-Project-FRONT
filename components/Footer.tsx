import Searcher from './Searcher';

const Footer = () => {
  return (
    <footer className="min-h-[485px] bg-[url(/images/footerImg.png)] bg-center bg-cover bg-no-repeat px-[25px] pt-[300px]">
      <div className="flex justify-center mx-auto">
        <Searcher />
      </div>
    </footer>
  );
};
export default Footer;
