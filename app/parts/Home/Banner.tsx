"use client";
import Link from "next/link";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContentLinks from "../dados/contentLinks";
import Image from "next/image";
import Logo from "@/public/img/img-banner.png";

export default function Banner() {
    return (
        <div className="bg-slide1 bg-cover bg-center bg-no-repeat w-full ">
            <div className="container mx-auto px-4 relative overflow-hidden">
                <div className="w-full items-center grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-10 justify-center pt-28 md:pt-32 -mb-0 md:-mb-[2rem] overflow-hidden">
                    <div className="-mt-[2rem] flex flex-col gap-4 lg:gap-10 items-center md:items-start text-center md:text-left w-full py-8">
                        <h2 className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-white font-bold !leading-snug">
                            {" "}
                            <span className="font-black">Cuidando</span> de quem{" "}
                            <span className="font-black">cuida</span> de você!
                        </h2>
                        <h2 className="text-xl lg:text-2xl xl:text-3xl text-white font-light !leading-tight">
                            Pensada para refletir o cuidado em todas as esferas na área de
                            saúde, a marca apresenta uma personalidade moderna, limpa e
                            conectada com o mercado.
                        </h2>
                        <div className="flex gap-2 mt-2">
                            <Link href={ContentLinks.whatsapp}>
                                <button className="flex flex-row gap-2  rounded-lg  py-2 px-8 md:px-6 lg:py-2 xl:py-4 lg:px-12  bg-cyan-400 text-black text-xs md:text-base lg:text-xl xl:text-2xl uppercase font-bold items-center">
                                    <FontAwesomeIcon
                                        icon={faInfo}
                                        className="w-4 h-4  lg:w-6 lg:h-6 "
                                    />
                                    QUERO SABER MAIS
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <Image src={Logo} width={168} height={112} alt="Logo - Esfera" className=" w-[40rem] ml-0 md:ml-[2rem] lg:ml-[3rem] xl:ml-[11rem] relative " />
                    </div>
                </div>
            </div>
        </div>
    );
}
