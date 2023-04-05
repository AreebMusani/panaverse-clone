import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import banner from '@/images/banner.jpg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      {/* BANNER SECTION */}
      <div className="sm:flex sm:text-left text-center static justify-between items-center p-10 bg-[url('/bgbackground.png')] w-full bg-contain bg-fixed">
        <div className='sm:w-1/2 sm:mt-0 mt-10 text-white'>
          <h1 className='font-bold text-3xl md:text-6xl line leading-tight'>Build your next idea even faster</h1>
          <p className='text-lg my-4 text-justify md:mr-10'>One year Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0, Metaverse, Artificial intelligence (AI), Cloud, Edge and Ambient Computing / IoT Technoligies</p>
          <button className='text-lg font-bold px-6 py-2 rounded-2xl bg-blue-600 hover:bg-blue-700'>More Info {">"}</button>
        </div>
        <div className='sm:w-1/2 sm:mt-0 mt-20'>
          <Image src={"/banner.png"} width={600} height={600} alt='banner' />
        </div>
      </div>

      {/* SECTION */}
      <div className='md:flex static md:gap-5 justify-center items-center m-10'>
        <div className='md:w-1/2'>
          <Image className='mx-auto' src={"/illustraterimage.webp"} width={500} height={500} alt='web image' />
        </div>
        <div className='md:w-1/2'>
          <h1 className='border-l-blue-600 border-l-8 pl-4 font-bold font-serif text-3xl md:text-6xl line leading-tight'>Program Of Studies</h1>
          <p className='my-5 text-justify text-lg'>This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.</p>
          <button className='text-white text-lg font-bold px-6 py-2 rounded-2xl bg-blue-600 hover:bg-blue-700'>Read More</button>
        </div>
      </div>


      <div className='text-center mt-20'>
        <h1 className='text-4xl md:text-6xl font-serif font-bold'>Specialized Tracks</h1>
        <p className='text-xl my-5 mx-10'>After completing the first two quarters the participants will select one or more specializations consisting of two courses each</p>
        <div className='flex m-10 gap-x-5'>
          <div className='flex-1 shadow-xl transition-all duration-300 hover:scale-105'>
            {/* <div className='w-full h-20'> */}
              <Image className='w-full bg-contain h-auto relative' width={150} height={350} src={"/web3_metaverse.webp"} alt={"Blockchain"} />

            {/* </div> */}
            <h2 className='font-bold text-lg my-3 text-gray-700'>Web 3.0 (Blockchain) and Metaverse Specialization</h2>
            <p className='text-base px-3 text-gray-500 mb-3'>Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse</p>
            <button className='self-end text-white text-lg font-bold shadow-lg mb-3 px-6 py-2 rounded-2xl bg-blue-600 hover:bg-blue-700'>Apply Now</button>
          </div>
          <div className='flex-1 shadow-xl transition-all duration-300 hover:scale-105'>
            {/* <div className='w-full h-20'> */}
              <Image className='w-full bg-contain h-auto relative' width={150} height={350} src={"/ai.webp"} alt={"Artificial Intelligence"} />

            {/* </div> */}
            <h2 className='font-bold text-lg my-3 text-gray-700'>Artificial Intelligence (AI)</h2>
            <p className='text-base px-3 text-gray-500 mb-3'>The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models</p>
            <button className='self-end text-white text-lg font-bold shadow-lg mb-3 px-6 py-2 rounded-2xl bg-blue-600 hover:bg-blue-700'>Apply Now</button>
          </div>
          <div className='flex-1 shadow-xl transition-all duration-300 hover:scale-105'>
            {/* <div className='w-full h-20'> */}
              <Image className='w-full bg-contain h-auto relative' width={150} height={350} src={"/cnc.webp"} alt={"Cloud-Native Computing"} />

            {/* </div> */}
            <h2 className='font-bold text-lg my-3 text-gray-700'>Cloud-Native Computing Specialization</h2>
            <p className='text-base px-3 text-gray-500 mb-3'>The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.</p>
            <button className='self-end text-white text-lg font-bold shadow-lg mb-3 px-6 py-2 rounded-2xl bg-blue-600 hover:bg-blue-700'>Apply Now</button>
          </div>
          <div className='flex-1 shadow-xl transition-all duration-300 hover:scale-105'>
            {/* <div className='w-full h-20'> */}
              <Image className='w-full bg-contain h-auto relative' width={150} height={350} src={"/iot.webp"} alt={"IOT"} />

            {/* </div> */}
            <h2 className='font-bold text-lg my-3 text-gray-700'>Ambient Computing and IoT Specialization</h2>
            <p className='text-base px-3 text-gray-500 mb-3'>The Ambient Computing and IoT Specialization focuses on building Smart Homes, and Cities using Voice computing and Embedded Devices.</p>
            <button className='self-end text-white text-lg font-bold shadow-lg mb-3 px-6 py-2 rounded-2xl bg-blue-600 hover:bg-blue-700'>Apply Now</button>
          </div>

        </div>
        <div className='text-center my-20'>
          <h1 className='text-4xl md:text-6xl font-serif font-bold mb-5'>Faculty Members</h1>
          <div className='flex justify-center items-center flex-wrap w-[80%] mx-auto'>
            <div className='w-full mt-5 sm:mt-0 sm:w-1/2 md:w-1/4'>
              <div>
                <Image className='rounded-full border-2 mx-auto text-center' src={"/ZiaKhan.webp"} width={150} height={150} alt='Zia' />
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
                <Image className='rounded-full border-2 mx-auto text-center' src={"/Daniyal.webp"} width={150} height={150} alt='Zia' />
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
                <Image className='rounded-full border-2 mx-auto text-center' src={"/adil.webp"} width={150} height={150} alt='Zia' />
                <div>
                  <h1 className='font-bold text-xl my-3 text-black'>Adil Altaf</h1>
                  <h2 className='font-bold text-lg my-3 text-gray-700'>Adil Altaf</h2>
                  <p className='text-base px-3 text-gray-500 mb-3'>
                    Internet-Scale Multi-Cloud Global App Architect | Full Stack Cloud Developer | Continuous Innovation Leader.
                  </p>
                </div>
              </div>
            </div>

            <div className='w-full mt-5 sm:mt-0 sm:w-1/2 md:w-1/4'>
              <div>
                <Image className='rounded-full border-2 mx-auto text-center' src={"/HiraKhan.webp"} width={150} height={150} alt='Zia' />
                <div>
                  <h1 className='font-bold text-xl my-3 text-black'>Hira Khan</h1>
                  <h2 className='font-bold text-lg my-3 text-gray-700'>Director at the Women Empowerment.</h2>
                  <p className='text-base px-3 text-gray-500 mb-3'>
                    Director of the Women Empowerment of the Presidential Initiative for Artificial Intelligence & Computing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
