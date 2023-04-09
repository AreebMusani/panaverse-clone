import Image from "next/image";
import React from "react";

const SpecializedTracks = () => {
    return (
        <div className='text-center mt-20'>
            <h1 className='text-4xl md:text-6xl font-serif font-bold'>Specialized Tracks</h1>
            <p className='text-xl my-5 mx-10'>After completing the first two quarters the participants will select one or more specializations consisting of two courses each</p>
            <div className='flex justify-center items-stretch flex-wrap m-10 gap-5'>
                <div className='w-full sm:basis-1/2 md:basis-1/4 shadow-xl transition-all duration-300 hover:scale-105'>
                    {/* <div className='w-full h-20'> */}
                    <Image className='w-full bg-contain h-auto relative' width={150} height={350} src={"/images/web3_metaverse.webp"} alt={"Blockchain"} />

                    {/* </div> */}
                    <h2 className='font-bold text-lg my-3 text-gray-700'>Web 3.0 (Blockchain) and Metaverse Specialization</h2>
                    <p className='text-base px-3 text-gray-500 mb-3'>Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse</p>
                    <button className='self-end text-white text-lg font-bold shadow-lg mb-3 px-6 py-2 rounded-2xl bg-blue-600 hover:bg-blue-700'>Apply Now</button>
                </div>
                <div className='w-full sm:basis-1/2 md:basis-1/4 shadow-xl transition-all duration-300 hover:scale-105'>
                    <Image className='w-full bg-contain h-auto relative' width={150} height={350} src={"/images/ai.webp"} alt={"Artificial Intelligence"} />

                    <h2 className='font-bold text-lg my-3 text-gray-700'>Artificial Intelligence (AI)</h2>
                    <p className='text-base px-3 text-gray-500 mb-3'>The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models</p>
                    <button className='self-end text-white text-lg font-bold shadow-lg mb-3 px-6 py-2 rounded-2xl bg-blue-600 hover:bg-blue-700'>Apply Now</button>
                </div>
                <div className='w-full sm:basis-1/2 md:basis-1/4 shadow-xl transition-all duration-300 hover:scale-105'>
                    <Image className='w-full bg-contain h-auto relative' width={150} height={350} src={"/images/cnc.webp"} alt={"Cloud-Native Computing"} />

                    <h2 className='font-bold text-lg my-3 text-gray-700'>Cloud-Native Computing Specialization</h2>
                    <p className='text-base px-3 text-gray-500 mb-3'>The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.</p>
                    <button className='self-end text-white text-lg font-bold shadow-lg mb-3 px-6 py-2 rounded-2xl bg-blue-600 hover:bg-blue-700'>Apply Now</button>
                </div>
                <div className='w-full sm:basis-1/2 md:basis-1/4 shadow-xl transition-all duration-300 hover:scale-105'>
                    <Image className='w-full bg-contain h-auto relative' width={150} height={350} src={"/images/iot.webp"} alt={"IOT"} />

                    <h2 className='font-bold text-lg my-3 text-gray-700'>Ambient Computing and IoT Specialization</h2>
                    <p className='text-base px-3 text-gray-500 mb-3'>The Ambient Computing and IoT Specialization focuses on building Smart Homes, and Cities using Voice computing and Embedded Devices.</p>
                    <button className='self-end text-white text-lg font-bold shadow-lg mb-3 px-6 py-2 rounded-2xl bg-blue-600 hover:bg-blue-700'>Apply Now</button>
                </div>

            </div>
        </div>
    );
};

export default SpecializedTracks;
