import Image from "next/image";
import ImgSobre from "@/public/img/img-sobre.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function QuemSomos() {
    return (
        <div className="bg-white  py-[2rem] md:py-[4rem] xl:mb-[2.3rem] relative ">
            <div className="container mx-auto px-4 " id="quemsomos">
                <div className="grid grid-cols-1 gap-y-8 md:gap-y-0 md:grid-cols-2 justify-center p-2 md:p-0 ">
                    <div className=" ">
                        <div className="text-cyan-800 pb-6 lg:pb-8  xl:py-10 text-base md:text-xl lg:text-2xl  font-semibold text-center lg:text-start">A ESFERA - ASSESSORIA & GESTÃO</div>
                        <div className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl   text-black font-light flex flex-col space-y-6 lg:space-y-10 xl:space-y-12">
                            <p className=""> Oferecemos soluções integradas e humanas para o setor da saúde, com foco em clínicas, hospitais e laboratórios. </p>
                            <p className="">Atuamos com excelência em serviços como recepção, enfermagem, limpeza e apoio administrativo, garantindo ambientes seguros, organizados e acolhedores.</p>
                            <p className="">Mais que uma prestadora, somos parceiros estratégicos, cuidando de cada detalhe para que nossos clientes cuidem do que realmente importa: vidas.</p>
                            
                            <div className=" pt-0 flex items-center justify-center md:justify-start ">
                                <Link href="/contato">
                                    <button type="button" className="flex flex-row gap-2 justify-center rounded-lg  py-2 px-8 md:px-6 lg:py-2 xl:py-3 lg:px-12  bg-cyan-400  text-black items-center text-xs md:text-base lg:text-lg uppercase font-medium">
                                        <FontAwesomeIcon icon={faPhone} className=" h-4  w-4 lg:h-6 lg:w-6 mr-2" />
                                        <span>TENHO INTERESSE!</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center xl:items-start justify-center h-full relative">
                        <Image src={ImgSobre} alt="" className="relative justify-center" />
                    </div>
                </div>
            </div>
        </div>
    );
}
