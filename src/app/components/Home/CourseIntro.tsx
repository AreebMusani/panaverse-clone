import Image from "next/image";
import React from "react";

const CourseIntro = () => {
    return (
        <div className='md:flex static md:gap-5 justify-center items-center m-10'>
            <div className='md:w-1/2'>
                <Image className='mx-auto' src={"/images/illustraterimage.webp"} width={500} height={500} alt='web image' />
            </div>
            <div className='md:w-1/2'>
                <h1 className='border-l-blue-600 border-l-8 pl-4 font-bold font-serif text-3xl md:text-6xl line leading-tight'>Program Of Studies</h1>
                <p className='my-5 text-justify text-lg'>This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.</p>
                <button className='text-white text-lg font-bold px-6 py-2 rounded-2xl bg-blue-600 hover:bg-blue-700'>Read More</button>
            </div>
        </div>

    );
};

export default CourseIntro;
