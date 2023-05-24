import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="">
      <div className="bg-slate-700 h-64 bg-contain bg-fixed rounded-b-[40%] p-10">
        <h1 className="text-white text-center font-bold text-5xl mt-10 leading-tight">
          About Us
        </h1>
      </div>

      <div className="flex m-10">
        {/* <div className="w-full h-10"> */}
        <img
          width={430}
          height={450}
          src="/images/arifalvi.webp"
          alt="President Alvi"
        />
        {/* </div> */}
        <div className="bg-gray-400 p-10 my-10 -mx-10">
          <h1 className="border-l-blue-600 border-l-8 pl-4 font-bold font-serif text-3xl md:text-6xl line leading-tight">
            Dr. Arif Alvi
          </h1>
          <p className="my-5 text-justify text-lg">
            Dr. Arif Alvi was sworn in as the 13th President of Islamic Republic of Pakistan on 9th September 2018.
            <br /><br />
            Dr. Arif Alvi was born in 1949 and completed his early education in Karachi. He did his Bachelor of Dental Surgery (BDS) from De’ Montmorency College of Dentistry, Lahore where he was declared the “Best Graduate”. He completed his Masters of Science in the field of Prosthodontics from University of Michigan (1975) and in Orthodontics from University of Pacific, San Francisco (1982).
            <br />
            <br />
            President Dr. Arif Alvi has been a renowned professional and has held many important positions in the field of Dentistry. He remained Dean of Orthodontics, College of Physicians and Surgeons of Pakistan, President, Pakistan Dental Association (1997-2001). Pakistan Association of Orthodontists (2005), Asia Pacific Dental Federation (2006-07) and Councilor of the World Dental Federation (2007-2013).
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
