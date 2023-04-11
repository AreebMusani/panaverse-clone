import Image from "next/image";
import React from "react";

const SpecializedTracks = () => {
    type TypeOfCourses = {
        id: Number,
        img: String,
        title: String,
        desc: String,
    }
    const courses: TypeOfCourses[] = [
        {
            id: 0,
            img: '/images/web3_metaverse.webp',
            title: 'Web 3.0 (Blockchain) and Metaverse Specialization',
            desc: 'Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse',
        },
        {
            id: 1,
            img: '/images/ai.webp',
            title: 'Artificial Intelligence (AI)',
            desc: 'The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models',
        },
        {
            id: 2,
            img: '/images/cnc.webp',
            title: 'Cloud-Native Computing Specialization',
            desc: 'The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.',
        },
        {
            id: 3,
            img: '/images/iot.webp',
            title: 'Ambient Computing and IoT Specialization',
            desc: 'The Ambient Computing and IoT Specialization focuses on building Smart Homes, and Cities using Voice computing and Embedded Devices.',
        }
    ]
    return (
        <div className='text-center mt-20  box-border'>
            <h1 className='text-4xl md:text-6xl font-serif font-bold'>Specialized Tracks</h1>
            <p className='text-xl my-5 mx-10'>After completing the first two quarters the participants will select one or more specializations consisting of two courses each</p>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 m-10 gap-5'>
                {courses.map((item: TypeOfCourses) => {
                    return (
                        <div key={item.id.toString()} className='flex flex-col shadow-xl transition-all duration-300 hover:scale-105'>
                            <Image className='w-full bg-contain h-auto relative' width={150} height={350} src={"/images/ai.webp"} alt={"Artificial Intelligence"} />

                            <h2 className='font-bold text-lg my-3 text-gray-700'>Artificial Intelligence (AI)</h2>
                            <p className='flex-grow text-justify h-fr text-base px-3 text-gray-500 mb-3'>The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models</p>
                            <button className='self-center text-white text-lg font-bold shadow-lg mb-3 px-6 py-2 rounded-2xl bg-blue-600 hover:bg-blue-700'>Apply Now</button>

                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default SpecializedTracks;
