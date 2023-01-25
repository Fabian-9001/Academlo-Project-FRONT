import React from 'react'
import CategoryButton from './CategoryButton'
import Link from 'next/link';

const SuggestedList = () => {
    return (
        <div className="min-w-[420px] h-[280px] duration-[0.5s] bg-primary-grayLighter p-[25px] sm:h-[250px] sm:pl-[60px] max-w-[940px] mx-auto">
            <div className="flex flex-col gap-[10px] ">
                <h2 className="font-roboto font-title-2 text-title-2 leading-title-2 text-primary-blackLight">
                    ¡Hagámoslo más personal!
                </h2>
                <p className="w-[90%] font-roboto font-subtitle-2 text-subtitle-2 leading-subtitle-2 text-primary-grayDark">
                    Selecciona tus interes para brindarte sugerencia de acuerdo a tus
                    gustos
                </p>
            </div>
            <div className="flex gap-[10px] mt-[20px] mb-[50px] sm:mb-[25px]">
                <CategoryButton text="Artistas mexicanos" />
                <CategoryButton text="Tiendas de ropa" />
                <CategoryButton text="Rock" />
                <CategoryButton text="Restaurantes" />
            </div>
            <Link
                className="font-roboto font-subtitle-2 text-subtitle-2 leading-subtitle-2 text-primary-blue pb-[40px]"
                href="#"
            >
                Ver todos los intereses
            </Link>
        </div>
    )
}

export default SuggestedList