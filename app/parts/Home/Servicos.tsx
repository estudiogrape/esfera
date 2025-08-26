"use client";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import "@splidejs/react-splide/css";
import React from "react";
import { serviceList } from "@/app/parts/dados/contentSeguro";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import HeaderTitle from "../estrutura/headerTitle";

export default function Seguro() {
    return (
        <div className="bg-cyan-800  relative" id="seguro">
            <HeaderTitle title="Serviços" text="text-white" />
            <div className="container mx-auto  relative pb-8 lg:pb-16 " id="servicos">
                <div className="grid grid-col-1 gap-4 lg:gap-8 place-items-center w-full  ">
                    <div className="w-full  grid grid-cols-2 md:grid-cols-4  gap-y-2 sm:gap-y-0 gap-2 md:gap-4 px-4 ">
                        {serviceList.map((serviceSingle) => (
                            <div
                                key={serviceSingle.slug}
                                className="h-full md:h-full text-white break-words text-sm sm:text-xl md:text-2xl lg:text-4xl  rounded-xl  overflow-hidden "
                            >
                                <div className="flex justify-center items-center relative">
                                    <Image src={serviceSingle.img} alt="" className="md:w-full object-cover rounded-lg" />
                                    <div className="absolute flex flex-col justify-end h-full p-3 md:p-4 xl:p-6">
                                        <h4 className="flex text-[0.5rem] md:text-[0.8rem] lg:text-sm xl:text-lg font-semibold leading-tight">
                                            {serviceSingle.title}
                                        </h4>
                                        <h1 className="text-[0.5rem] md:text-[0.6rem] lg:text-sm xl:text-sm leading-tight">{serviceSingle.text}</h1>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-center md:justify-start  my-4">
                        <Link href="/contato">
                            <button
                                type="button"
                                className="flex flex-row gap-2 justify-center rounded-lg  py-2 px-8 md:px-6 lg:py-2 xl:py-4 lg:px-8  xl:px-12  bg-cyan-400  text-black items-center text-xs md:text-base lg:text-lg xl:text-xl uppercase font-medium"
                            >
                                <FontAwesomeIcon
                                    icon={faPhone}
                                    className=" h-3  w-3 lg:h-6 lg:w-6 mr-2"
                                />
                                <span>tenho interesse!</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
