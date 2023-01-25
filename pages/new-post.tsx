import Image from 'next/image';

export default function NewPost() {
  return (
    <>
      <div className="flex items-center justify-center flex-col gap-[30px] p-[20px] bg-primary-blue">
        <header className="relative">
          <Image
            src={'/images/Multistep-Logo.png'}
            width={130}
            height={120}
            alt=""
          />
          <Image
            src={'/images/Multistep-Logo-2.png'}
            width={140}
            height={30}
            alt=""
          />
        </header>
        <div className="flex flex-col gap-[20px]">
          <h3 className="font-roboto font-title-2 text-title-3 leading-title-3 text-primary-yellow">
            ¡Bienvenido, creador!
          </h3>
          <p className="font-roboto font-subtitle-2 text-subtitle-2 leading-subtitle-2 text-white">
            A continuación puedes completar la info de la marca, artista o
            torneo que quieres cerca.
          </p>
        </div>
      </div>
      <div>
        <header className="p-[25px]">
          <p className="font-roboto font-subtitle-1 text-title-3 leading-subtitle-1 text-primary-blue">
            Back
          </p>
          <div className="w-full max-w-[600px] h-[5px] rounded-[25px] bg-primary-grayLight">
            <div className="w-[70%] h-[5px] rounded-[25px] bg-primary-blue"></div>
          </div>
          <div>
            <p>Publicación</p>
            <p>Información básica</p>
          </div>
        </header>
        <div className="w-full h-full bg-white p-[20px]">
          <form>
            <div>
              <label
                className="font-roboto font-subtitle-2 text-subtitle-2 leading-title-3 text-primary-grayDark bg-white"
                htmlFor="titlePost"
              >
                Titulo de publicación
              </label>
              <input
                className="w-full max-w-[520px] h-[50px] rounded-[10px] border-[1px] border-primary-gray bg-transparent"
                type="text"
                id="titlePost"
              />
            </div>
            <div>
              <div>
                <input type="text" placeholder="Tipo" />
                <button>{'>'}</button>
              </div>
              <div>
                <input type="text" placeholder="Categoría" />
                <button>{'>'}</button>
              </div>
            </div>
            <div>
              <label
                className="font-roboto font-subtitle-2 text-subtitle-2 leading-title-3 text-primary-grayDark bg-white"
                htmlFor="titlePost"
              >
                Titulo de publicación
              </label>
              <textarea
                className="w-full max-w-[520px] h-[50px] rounded-[10px] border-[1px] border-primary-gray bg-transparent"
                id="titlePost"
              />
            </div>
            <div>
              <label
                className="font-roboto font-subtitle-2 text-subtitle-2 leading-title-3 text-primary-grayDark bg-white"
                htmlFor="titlePost"
              >
                Link de referencia
              </label>
              <input
                className="w-full max-w-[520px] h-[50px] rounded-[10px] border-[1px] border-primary-gray bg-transparent"
                type="text"
                id="titlePost"
              />
            </div>
            <button>Siguiente</button>
          </form>
        </div>
      </div>
    </>
  );
}
