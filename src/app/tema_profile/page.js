import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import Card from "@/assets/laung-harmoni/Card.png";
import foto1 from "@/assets/laung-harmoni/tema1.png";
import foto2 from "@/assets/laung-harmoni/tema2.png";
import foto3 from "@/assets/laung-harmoni/tema3.png";
import Button_WA from "@/components/button-wa";
import "./style.css";


export default function tema() {
    return (
    <>
         {/* Header Page */}
            <main className="justify-center bg-cover h-[80%] w-screen flex bg-[url('/assets/laung-harmoni/Header_Portofolio.png')]">
                <div className="mt-[200px] mb-[146px] w-12/12 flex flex-row text-center">
                    <div className=" text-center justify-center">
                        <h1 className="font-medium text-[55px] leading-[77px]">Tema Desain Undangan</h1>
                        <p className="mt-[60px] font-regular font-lora text-[22px] leading-[37px]">
                        Berisi template yang telah kami buat dan dapat langsung diisi dengan informasi acaramu. Memakai template <br></br>akan menghemat banyak waktu karena proses pembuatan lebih cepat dibanding Desain Custom.</p>
                    </div>
                </div>
      
            </main>
            
         {/* Header Page End */}

         {/* Tema */}
        <main className="bg-undangan h-sreen w-screen flex items-center justify-center">
            <div className="">
                {/* card atas */}
                <div className="sm:grid grid-cols-1 md:grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-[34px] ">
                    <div className=" justify-center  ">
                        <div className="max-w-[340px] lg:max-w-[448px] w-[448px] h-[507px] flex-col overflow-hidden rounded-[35px] bg-white text-gray-700 shadow-md">
                            <div className="m-0 bg-transparent rounded-none shadow-none bg-clip-border">
                            <Image
                                className="w-[448px] h-[360px]"
                                src={foto1.src}
                                alt="Next.js Logo"
                                width={600}
                                height={200}
                                priority
                            />         
                            </div>
                            <div className="py-[34px] text-center">
                                        <h4 className=" block text-[17px] lg:text-[22px] font-bold antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                                        Coral Charm
                                        </h4>
                                        <p className="block mt-3 text-[9px] lg:text-[13px] antialiased font-regular leading-relaxed text-gray-700">
                                        KODE TEMA #2139
                                        </p>
                            </div>
                        </div> 
                        <div className="pl-[6.5rem] xl:pl-[9rem] lg:pl-[8rem] -translate-y-6 transform">
                            <button className="button font-mustard px-[25px] py-[13px] lg:px-[32px] lg:py-[18px] rounded-[50px] bg-gradient-to-r from-[#E3457B] to-[#EF90A0] hover:bg-pink-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-warna-600 focus:ring-offset-2">
                            <p className="text-[10px] lg:text-[15px] text-white font-regular text">Lihat Tema</p>
                            </button>
                        </div>
                    </div>
                    <div className=" justify-center  ">
                        <div className="max-w-[340px] lg:max-w-[448px] w-[448px] h-[507px] flex-col overflow-hidden rounded-[35px] bg-white text-gray-700 shadow-md">
                            <div className="m-0 bg-transparent rounded-none shadow-none bg-clip-border">
                            <Image
                                className="w-[448px] h-[360px]"
                                src={foto2.src}
                                alt="Next.js Logo"
                                width={600}
                                height={200}
                                priority
                            />         
                            </div>
                            <div className="py-[34px] text-center">
                                        <h4 className=" block text-[17px] lg:text-[22px] font-bold antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                                         Bnw
                                        </h4>
                                        <p className="block mt-3 text-[9px] lg:text-[13px] antialiased font-regular leading-relaxed text-gray-700">
                                        KODE TEMA #2130
                                        </p>
                            </div>
                        </div> 
                        <div className="pl-[6.5rem] xl:pl-[9rem] lg:pl-[8rem] -translate-y-6 transform">
                            <button className="button font-mustard px-[25px] py-[13px] lg:px-[32px] lg:py-[18px] rounded-[50px] bg-gradient-to-r from-[#E3457B] to-[#EF90A0] hover:bg-pink-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-warna-600 focus:ring-offset-2">
                            <p className="text-[10px] lg:text-[15px] text-white font-regular text">Lihat Tema</p>
                            </button>
                        </div>
                    </div>
                    <div className=" justify-center  ">
                        <div className="max-w-[340px] lg:max-w-[448px] w-[448px] h-[507px] flex-col overflow-hidden rounded-[35px] bg-white text-gray-700 shadow-md">
                            <div className="m-0 bg-transparent rounded-none shadow-none bg-clip-border">
                            <Image
                                className="w-[448px] h-[360px]"
                                src={foto3.src}
                                alt="Next.js Logo"
                                width={600}
                                height={200}
                                priority
                            />         
                            </div>
                            <div className="py-[34px] text-center">
                                        <h4 className=" block text-[17px] lg:text-[22px] font-bold antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                                        Golden Black
                                        </h4>
                                        <p className="block mt-3 text-[9px] lg:text-[13px] antialiased font-regular leading-relaxed text-gray-700">
                                        KODE TEMA #2131
                                        </p>
                            </div>
                        </div> 
                        <div className="pl-[6.5rem] xl:pl-[9rem] lg:pl-[8rem] -translate-y-6 transform">
                            <button className="button font-mustard px-[25px] py-[13px] lg:px-[32px] lg:py-[18px] rounded-[50px] bg-gradient-to-r from-[#E3457B] to-[#EF90A0] hover:bg-pink-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-warna-600 focus:ring-offset-2">
                            <p className="text-[10px] lg:text-[15px] text-white font-regular text">Lihat Tema</p>
                            </button>
                        </div>
                    </div>
                    <div className=" justify-center  ">
                        <div className="max-w-[340px] lg:max-w-[448px] w-[448px] h-[507px] flex-col overflow-hidden rounded-[35px] bg-white text-gray-700 shadow-md">
                            <div className="m-0 bg-transparent rounded-none shadow-none bg-clip-border">
                            <Image
                                className="object-cover w-[448px] h-[360px]"
                                src={Card.src}
                                alt="Next.js Logo"
                                width={600}
                                height={200}
                                priority
                            />         
                            </div>
                            <div className="py-[34px] text-center">
                                        <h4 className=" block text-[17px] lg:text-[22px] font-bold antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                                        Coral Charming
                                        </h4>
                                        <p className="block mt-3 text-[9px] lg:text-[13px] antialiased font-regular leading-relaxed text-gray-700">
                                        KODE TEMA #2139
                                        </p>
                            </div>
                        </div> 
                        <div className="pl-[6.5rem] xl:pl-[9rem] lg:pl-[8rem] -translate-y-6 transform">
                            <button className="button font-mustard px-[25px] py-[13px] lg:px-[32px] lg:py-[18px] rounded-[50px] bg-gradient-to-r from-[#E3457B] to-[#EF90A0] hover:bg-pink-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-warna-600 focus:ring-offset-2">
                            <p className="text-[10px] lg:text-[15px] text-white font-regular text">Lihat Tema</p>
                            </button>
                        </div>
                    </div>
                    <div className=" justify-center  ">
                        <div className="max-w-[340px] lg:max-w-[448px] w-[448px] h-[507px] flex-col overflow-hidden rounded-[35px] bg-white text-gray-700 shadow-md">
                            <div className="m-0 bg-transparent rounded-none shadow-none bg-clip-border">
                            <Image
                                className="object-cover w-[448px] h-[360px]"
                                src={Card.src}
                                alt="Next.js Logo"
                                width={600}
                                height={200}
                                priority
                            />         
                            </div>
                            <div className="py-[34px] text-center">
                                        <h4 className=" block text-[17px] lg:text-[22px] font-bold antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                                        Coral Charming
                                        </h4>
                                        <p className="block mt-3 text-[9px] lg:text-[13px] antialiased font-regular leading-relaxed text-gray-700">
                                        KODE TEMA #2139
                                        </p>
                            </div>
                        </div> 
                        <div className="pl-[6.5rem] xl:pl-[9rem] lg:pl-[8rem] -translate-y-6 transform">
                            <button className="button font-mustard px-[25px] py-[13px] lg:px-[32px] lg:py-[18px] rounded-[50px] bg-gradient-to-r from-[#E3457B] to-[#EF90A0] hover:bg-pink-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-warna-600 focus:ring-offset-2">
                            <p className="text-[10px] lg:text-[15px] text-white font-regular text">Lihat Tema</p>
                            </button>
                        </div>
                    </div>
                    <div className=" justify-center  ">
                        <div className="max-w-[340px] lg:max-w-[448px] w-[448px] h-[507px] flex-col overflow-hidden rounded-[35px] bg-white text-gray-700 shadow-md">
                            <div className="m-0 bg-transparent rounded-none shadow-none bg-clip-border">
                            <Image
                                className="object-cover w-[448px] h-[360px]"
                                src={Card.src}
                                alt="Next.js Logo"
                                width={600}
                                height={200}
                                priority
                            />         
                            </div>
                            <div className="py-[34px] text-center">
                                        <h4 className=" block text-[17px] lg:text-[22px] font-bold antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                                        Coral Charming
                                        </h4>
                                        <p className="block mt-3 text-[9px] lg:text-[13px] antialiased font-regular leading-relaxed text-gray-700">
                                        KODE TEMA #2139
                                        </p>
                            </div>
                        </div> 
                        <div className="pl-[6.5rem] xl:pl-[9rem] lg:pl-[8rem] -translate-y-6 transform">
                            <button className="button font-mustard px-[25px] py-[13px] lg:px-[32px] lg:py-[18px] rounded-[50px] bg-gradient-to-r from-[#E3457B] to-[#EF90A0] hover:bg-pink-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-warna-600 focus:ring-offset-2">
                            <p className="text-[10px] lg:text-[15px] text-white font-regular text">Lihat Tema</p>
                            </button>
                        </div>
                    </div>
               
                </div>
           </div>
        </main>
    </>
    );
}