import Image from "next/image";
import React from "react";

const FacultyMembers = () => {
  type TypeOfFaculty = {
    id: number,
    name: string,
    image: string,
    jobType: string,
    desc: string
  }

  const facultyMembers: TypeOfFaculty[] = [
    {
      id: 0,
      name: 'Zia Khan',
      image: '/images/ZiaKhan.webp',
      jobType: 'CEO Panacloud',
      desc: 'Web 3, DeFi, Cloud and Metaverse Architect | Tokenomist and Metanomist | Volunteer COO PIAIC and Computing',
    },
    {
      id: 1,
      name: 'Daniyal Nagori',
      image: '/images/Daniyal.webp',
      jobType: 'Software Development Lead',
      desc: 'Full-stack developer and DevOps Architect with certification in most cutting edge technologies of development',
    },
    {
      id: 2,
      name: 'Adil Altaf',
      image: '/images/adil.webp',
      jobType: 'Full Stack Cloud Developer',
      desc: 'Internet-Scale Multi-Cloud Global App Architect | Full Stack Cloud Developer | Continuous Innovation Leader.',
    },
    {
      id: 3,
      name: 'Hira Khan',
      image: '/images/HiraKhan.webp',
      jobType: 'Director at the Women Empowerment.',
      desc: 'Director of the Women Empowerment of the Presidential Initiative for Artificial Intelligence & Computing.',
    }
  ]

  return (
    <div className='text-center my-20'>
      <h1 className='text-4xl md:text-6xl font-serif font-bold mb-5'>Faculty Members</h1>
      <div className='flex justify-center m-10'>
        {facultyMembers.map((item : TypeOfFaculty, index: number) => (
          <div key={item.id} className='w-full mt-5 mx-5 sm:mt-0 sm:w-1/2 md:w-1/4'>
            <div>
              <Image className='rounded-full border-2 mx-auto text-center' src={item.image} width={150} height={150} alt='Zia' />
              <div>
                <h1 className='font-bold text-xl my-3 text-black'>{item.name}</h1>
                <h2 className='font-bold text-lg my-3 text-gray-700'>{item.jobType}</h2>
                <p className='text-justify text-base px-3 text-gray-500 mb-3'>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
        {/* <div className='w-full mt-5 sm:mt-0 sm:w-1/2 md:w-1/4'>
              <div>
                <Image className='rounded-full border-2 mx-auto text-center' src={"/images/ZiaKhan.webp"} width={150} height={150} alt='Zia' />
                <div>
                  <h1 className='font-bold text-xl my-3 text-black'>Zia Khan</h1>
                  <h2 className='font-bold text-lg my-3 text-gray-700'>CEO Panacloud</h2>
                  <p className='text-base px-3 text-gray-500 mb-3'>
                    Web 3, DeFi, Cloud and Metaverse Architect | Tokenomist and Metanomist | Volunteer COO PIAIC and Computing
                  </p>
                </div>
              </div>
            </div>

            <div className='w-full mt-5 sm:mt-0 sm:w-1/2 md:w-1/4'>
              <div>
                <Image className='rounded-full border-2 mx-auto text-center' src={"/images/Daniyal.webp"} width={150} height={150} alt='Zia' />
                <div>
                  <h1 className='font-bold text-xl my-3 text-black'>Daniyal Nagori</h1>
                  <h2 className='font-bold text-lg my-3 text-gray-700'>Software Development Lead</h2>
                  <p className='text-base px-3 text-gray-500 mb-3'>
                    Full-stack developer and DevOps Architect with certification in most cutting edge technologies of development
                  </p>
                </div>
              </div>
            </div>

            <div className='w-full mt-5 sm:mt-0 sm:w-1/2 md:w-1/4'>
              <div>
                <Image className='rounded-full border-2 mx-auto text-center' src={"/images/adil.webp"} width={150} height={150} alt='Zia' />
                <div>
                  <h1 className='font-bold text-xl my-3 text-black'>Adil Altaf</h1>
                  <h2 className='font-bold text-lg my-3 text-gray-700'>Full Stack Cloud Developer</h2>
                  <p className='text-base px-3 text-gray-500 mb-3'>
                    Internet-Scale Multi-Cloud Global App Architect | Full Stack Cloud Developer | Continuous Innovation Leader.
                  </p>
                </div>
              </div>
            </div>

            <div className='w-full mt-5 sm:mt-0 sm:w-1/2 md:w-1/4'>
              <div>
                <Image className='rounded-full border-2 mx-auto text-center' src={"/images/HiraKhan.webp"} width={150} height={150} alt='Zia' />
                <div>
                  <h1 className='font-bold text-xl my-3 text-black'>Hira Khan</h1>
                  <h2 className='font-bold text-lg my-3 text-gray-700'>Director at the Women Empowerment.</h2>
                  <p className='text-base px-3 text-gray-500 mb-3'>
                    Director of the Women Empowerment of the Presidential Initiative for Artificial Intelligence & Computing.
                  </p>
                </div>
              </div>
            </div> */}
      </div>
    </div>
  );
};

export default FacultyMembers;
