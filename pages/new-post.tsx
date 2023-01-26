import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function NewPost() {
  const [step, setStep] = useState(1);

  const { handleSubmit, register } = useForm();

  const router = useRouter();

  let nextStep = (data) => {
    if (step === 1) {
      console.log(data, 'Paso 1');
      setStep(step + 1);
    } else {
      console.log(data, 'Publicado');
    }
  };

  let prevStep = () => {
    if (step === 1) {
      router.push('/');
    } else {
      setStep(step - 1);
    }
  };

  return (
    <div className="min-w-[100vw] min-h-[100vh] md:flex">
      <div className="min-h-[415px] flex items-center justify-center flex-col gap-[30px] p-[20px] bg-primary-blue md:min-w-[255px] md:max-w-[255px] md:justify-start md:pt-[130px] md:gap-[100px] md:p-[25px] md:pb-[50px]">
        <header className="relative">
          <Image
            src={'/images/Multistep-Logo.png'}
            width={140}
            height={125}
            alt=""
          />
          <Image
            src={'/images/Multistep-Logo-2.png'}
            width={145}
            height={30}
            alt=""
          />
        </header>
        <div className="flex flex-col gap-[20px] md:h-full md:justify-between">
          <div className="flex flex-col gap-[20px]">
            <h3 className="font-roboto font-title-2 text-title-3 leading-title-3 text-primary-yellow md:w-[80%]">
              ¡Bienvenido, creador!
            </h3>
            <p className="font-roboto font-subtitle-2 text-subtitle-2 leading-subtitle-2 text-whit md:w-[95%]">
              A continuación puedes completar la info de la marca, artista o
              torneo que quieres cerca.
            </p>
          </div>
          <p className="font-roboto font-[300] text-subtitle-2 leading-subtitle-2 hidden md:inline-block">
            Ayuda
          </p>
        </div>
      </div>
      <div className="w-full min-h-[100vh] bg-white flex flex-col items-center">
        <header className="w-full max-w-[640px] p-[20px] flex flex-col  gap-[45px] bg-white md:pt-[65px] md:gap-[65px]">
          <p
            onClick={prevStep}
            className="font-inter font-subtitle-1 text-title-3 leading-subtitle-1 text-primary-blue cursor-pointer"
          >
            Back
          </p>
          <div className="w-full rounded-[25px] mx-auto bg-primary-grayLight flex items-center ">
            <div
              className={`${
                step === 1 ? 'w-[50%]' : 'w-[100%]'
              } h-[10px] bg-primary-blue  rounded-[25px] duration-[0.5s]`}
            ></div>
          </div>
        </header>
        <div className="w-full max-w-[640px] bg-white p-[20px] flex flex-col  gap-[45px] pb-[50px] sm:pb-[90px]">
          <header className="flex flex-col gap-[10px]">
            <p className="font-roboto font-title-2 text-title-2 leading-texto-2 text-primary-blackLight">
              {step === 1 ? 'Publicación' : 'Fotos'}
            </p>
            <p className="font-roboto font-subtitle-2 text-subtitle-2 leading-subtitle-2 text-primary-grayDark">
              {step === 1
                ? 'Información básica'
                : 'Selecciona  máximo tres fotos para crear una galería'}
            </p>
          </header>
          <form
            onSubmit={handleSubmit(nextStep)}
            className="flex flex-col gap-[25px]"
          >
            {step === 1 ? (
              <div className="flex flex-col gap-[25px]">
                <div className="relative">
                  <label
                    className="font-inter font-subtitle-2 text-subtitle-2 leading-title-3 text-[#7D7D7D] bg-white p-[5px] pt-[0px] absolute top-[-9px] left-[10px]"
                    htmlFor="titlePost"
                  >
                    Titulo de publicación
                  </label>
                  <input
                    {...register('titlePost')}
                    className="w-full max-w-[620px] h-[50px] border-[1px] border-[#7D7D7D] rounded-[10px] bg-transparent text-black p-[15px]"
                    type="text"
                    id="titlePost"
                  />
                </div>
                <div className="flex flex-col gap-[25px] sm:flex-row sm:gap-[20px]">
                  <div className="flex items-center relative sm:w-[300px]">
                    <input
                      {...register('type')}
                      className="w-full h-[50px] border-[1px] border-[#7D7D7D] rounded-[10px] bg-transparent text-black p-[15px]"
                      type="text"
                      id="type"
                      placeholder="Tipo"
                    />
                    <Image
                      className="absolute right-[25px]"
                      src={'svg/arrowDown.svg'}
                      width={20}
                      height={15}
                      alt=""
                    />
                  </div>
                  <div className="flex items-center relative sm:w-[300px]">
                    <input
                      {...register('category')}
                      className="w-full h-[50px] border-[1px] border-[#7D7D7D] rounded-[10px] bg-transparent text-black p-[15px]"
                      type="text"
                      id="category"
                      placeholder="Categoría"
                    />
                    <Image
                      className="absolute right-[25px]"
                      src={'svg/arrowDown.svg'}
                      width={20}
                      height={15}
                      alt=""
                    />
                  </div>
                </div>
                <div className="relative">
                  <label
                    className="font-inter font-subtitle-2 text-subtitle-2 leading-title-3 text-[#7D7D7D] bg-white p-[5px] pt-[0px] absolute top-[-9px] left-[10px]"
                    htmlFor="question"
                  >
                    ¿Por qué lo recomiendas?
                  </label>
                  <textarea
                    {...register('response')}
                    className="w-full h-[115px] max-w-[620px] border-[1px] border-[#7D7D7D] rounded-[10px] bg-transparent text-black p-[15px]"
                    id="question"
                  />
                </div>
                <div className="relative">
                  <label
                    className="font-inter font-subtitle-2 text-subtitle-2 leading-title-3 text-[#7D7D7D] bg-white p-[5px] pt-[0px] absolute top-[-9px] left-[10px]"
                    htmlFor="link"
                  >
                    Link de referencia
                  </label>
                  <input
                    {...register('link')}
                    className="w-full max-w-[620px] h-[50px] border-[1px] border-[#7D7D7D] rounded-[10px] bg-transparent text-black p-[15px]"
                    type="text"
                    id="link"
                  />
                </div>
              </div>
            ) : (
              <div className="flex gap-[20px] border-[1px] border-primary-grayDark rounded-[10px] p-[25px] mb-[80px]">
                <div className="w-[170px] h-[205px] bg-primary-grayLight bg-[url('/svg/addFile.svg')] bg-no-repeat bg-center">
                  <input
                    {...register('firstFile')}
                    className="w-[180px] h-[205px] opacity-0"
                    type="file"
                  />
                </div>
                <div className="w-[170px] h-[205px] bg-primary-grayLight bg-[url('/svg/addFile.svg')] bg-no-repeat bg-center">
                  <input
                    {...register('secondFile')}
                    className="w-[180px] h-[205px] opacity-0"
                    type="file"
                  />
                </div>
                <div className="w-[170px] h-[205px] bg-primary-grayLight bg-[url('/svg/addFile.svg')] bg-no-repeat bg-center">
                  <input
                    {...register('thirdFile')}
                    className="w-[180px] h-[205px] opacity-0"
                    type="file"
                  />
                </div>
              </div>
            )}
            <button className="w-[125px] h-[50px] rounded-[30px] p-[20px] bg-primary-blue flex items-center justify-center mx-auto mt-[15px]">
              <p className="font-inter font-title-3 text-subtitle-1 leading-subtitle-1 text-white">
                {step === 1 ? 'Siguiente' : 'Publicar'}
              </p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
