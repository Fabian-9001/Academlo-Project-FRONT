import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTags } from '../lib/services/tags.services';
import { useCategories } from '../lib/services/categories.services';
import { createPublication } from '../lib/services/publications.services';
import Swal from 'sweetalert2';

export default function NewPost() {
  const [step, setStep] = useState(1);
  const { handleSubmit, register, watch } = useForm();
  const { data: tags } = useTags();
  const { data: categories } = useCategories();
  const router = useRouter();

  const imageFile = watch('firstFile');

  const [imageUrl, setImageUrl] = useState<any>();

  useEffect(() => {
    if (imageFile) {
      setImageUrl(URL.createObjectURL(imageFile[0]));
    }
  }, [imageFile]);

  let nextStep = (data: any) => {
    if (step === 1) {
      setStep(step + 1);
    } else {
      createPublication(data)
        .then((res) => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'YourPublicacion creada!',
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(res.data);
          router.push('/profile');
        })
        .catch((err) => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Verifica completar todo los campos en el formulario',
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(err);
        });
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
                    {...register('title')}
                    className="w-full max-w-[620px] h-[50px] border-[1px] border-[#7D7D7D] rounded-[10px] bg-transparent text-black p-[15px]"
                    type="text"
                    id="titlePost"
                  />
                </div>
                <div className="flex flex-col gap-[25px] sm:flex-row sm:gap-[20px]">
                  <div className="">
                    <label>
                      <select
                        className="w-full min-h-[50px] h-auto flex flex-col gap-[15px] border-[1px] border-[#7D7D7D] rounded-[10px] relative bg-white text-black py-[15px] px-[20px]
                     font-inter font-[400] text-[16px] leading-[24px] sm:w-[300px]"
                        {...register('tags')}
                      >
                        {tags?.map((tag) => (
                          <option
                            className="font-roboto py-[50px]"
                            key={tag.id}
                            value={tag.id}
                          >
                            {tag.name}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                  <div className="">
                    <select
                      className="w-full min-h-[50px] h-auto flex flex-col gap-[15px] border-[1px] border-[#7D7D7D] rounded-[10px] relative bg-white text-black py-[15px] px-[20px]
                     font-inter font-[400] text-[16px] leading-[24px] sm:w-[300px]"
                      {...register('idPublicationType')}
                    >
                      {categories?.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
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
                    {...register('description')}
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
                    {...register('urlShare')}
                    className="w-full max-w-[620px] h-[50px] border-[1px] border-[#7D7D7D] rounded-[10px] bg-transparent text-black p-[15px]"
                    type="text"
                    id="link"
                  />
                </div>
              </div>
            ) : (
              <div className="flex flex-wrap gap-[20px] border-[1px] border-primary-grayDark rounded-[10px] p-[25px] mb-[80px] justify-center sm:flex-nowrap">
                <div
                  style={{
                    backgroundImage: `${
                      /* imageUrl ? `url(${imageUrl})` :*/ 'url(/svg/addFile.svg)'
                    } `,
                  }}
                  className={`w-[170px] h-[205px] bg-primary-grayLight bg-[url('/svg/addFile.svg')]  bg-no-repeat bg-center`}
                >
                  <input
                    id="test"
                    //  {...register('firstFile')}
                    className="w-[180px] h-[205px] opacity-0"
                    type="file"
                  />
                </div>
                <div className="w-[170px] h-[205px] bg-primary-grayLight bg-[url('/svg/addFile.svg')] bg-no-repeat bg-center">
                  <input
                    //    {...register('secondFile')}
                    className="w-[180px] h-[205px] opacity-0"
                    type="file"
                  />
                </div>
                <div className="w-[170px] h-[205px] bg-primary-grayLight bg-[url('/svg/addFile.svg')] bg-no-repeat bg-center">
                  <input
                    //   {...register('thirdFile')}
                    className="w-[180px] h-[205px] opacity-0 bg-[url()]"
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
