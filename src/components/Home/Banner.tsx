import Image from "next/image";
import React from "react";

const Banner = () => {
    return (
        <div className="sm:flex sm:text-left text-center static justify-between items-center p-10 bg-[url('/images/bgbackground.png')] w-full bg-contain bg-fixed">
            <div className='sm:w-1/2 sm:mt-0 mt-10 text-white'>
                <h1 className='font-bold text-3xl md:text-6xl line leading-tight'>Build your next idea even faster</h1>
                <p className='text-lg my-4 text-justify md:mr-10'>One year Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0, Metaverse, Artificial intelligence (AI), Cloud, Edge and Ambient Computing / IoT Technoligies</p>
                <button className='text-lg font-bold px-6 py-2 rounded-2xl bg-blue-600 hover:bg-blue-700'>More Info {">"}</button>
            </div>
            <div className='sm:w-1/2 sm:mt-0 mt-20'>
                <Image className="w-auto h-auto" src={"/images/banner.png"} width={600} height={600} alt='banner' />
            </div>
        </div>

    );
};

export default Banner;
