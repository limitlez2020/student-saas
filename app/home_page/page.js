"use client"

import Image from "next/image";
import NavBar from "../components/NavBar";
import { Montserrat } from "next/font/google";
import { Prompt } from "next/font/google";
import { PlayCircleIcon, PlayIcon, PlusIcon, StarIcon, UserGroupIcon, UserIcon, UsersIcon } from "@heroicons/react/24/solid"
import { Player } from 'react-lottie-player'; /* Lottie Player */
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "@/firebase";

const monstserrat = Montserrat({ subsets: ['latin'] });
const prompt = Prompt({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});




const HomePage = () => {
  const [waitlistTotal, setWaitlistTotal] = useState(0);
  
  /* Get # of people on waitlist: */
  const getWaitlistTotal = async () => {
    try {
      /* Get the size of documents in the "waitlist" collection: */
      const snapshot = await getDocs(collection(firestore, "waitlist"));
      setWaitlistTotal(snapshot.size);
      console.log("the size of the document is:" + snapshot.size)
    } catch (error) {
      console.error("Error getting waitlist total: ", error);
    }
  }
  
  /* Get # of people on waitlist everytime the page loads: */
  useEffect (() => {
    getWaitlistTotal();
  }, []);


  return (
    <div className="flex flex-col relative min-h-screen">
      {/* Background Noise */}
      <div className="absolute top-0 opacity-10 w-full h-full bg-noise-pattern"/>

      <NavBar/>

      {/* Hero Section: */}
      <div className="flex flex-col items-center justify-center mt-24 mx-10 md:mx-36 lg:mx-52">
        {/* Hero Text: */}
        <div className="flex flex-col items-center justify-center mb-20">
          <p className={`${monstserrat.className} text-5xl font-extrabold text-center md:text-6xl lg:text-6xl`}>
            LEARN SMART, <br /> ACHIEVE MORE
          </p>
          <p className={`${prompt.className} text-base font-normal text-center md:text-lg lg:text-lg`}>
            Your ultimate study companion, designed to support you <br/>through every challenge, 
            keep you organized, <br/> and help you excel in your academic journey
            <br/> one smart step at a time
          </p>
        </div>


        {/*********  HERO BOXES  ***********/}
        <div>
          <div className="flex flex-wrap justify-center gap-20 mb-32">

            {/*******  PURPLE BOX:  ********/}
            <div className={`${prompt.className} relative flex justify-center items-center`}>
              {/* Background Noise */}
              <img 
                className="absolute opacity-5 z-10 rounded-xl" 
                src="/noise.png" 
                alt="placeholder"
              />
              <div className="bg-[#d3aefe] w-60 h-60 rounded-xl shadow-md relative">
                <p className="flex justify-center items-center text-sm bg-black rounded-full
                              w-10 h-10 text-white absolute left-1/2 -top-4 transform -translate-x-1/2">
                  #1
                </p>
                <p className="text-base font-normal text-center pt-12">
                  All-in-one <br /> Learning Platform
                </p>
                <p className="text-base font-medium text-center">
                  For Students!
                </p>
              </div>
            </div>


            {/*******  YELLOW BOX:  ********/}
            <div className="flex flex-col items-center justify-center bg-[#fede65]
                            w-80 h-80 gap-6 rounded-3xl shadow-md mx-auto z-10 relative"
            >
              {/* Background Noise */}
              <img 
                className="absolute opacity-5" 
                src="/noise.png" 
                alt="placeholder"
              />
              {/* Lottie animation: */}
              {/* <Image src="/lottie/learning.json" width={200} height={200} /> */}
              <div className="w-36 h-36 flex items-center justify-center
                            border-black border-dashed border-2 mb-2"
              >
                <p>placeholder</p>
              </div>

              {/* Button */}
              <Link href="/waitlist_page">
                <div className="relative transition-transform duration-300 ease-in-out hover:scale-105">
                  <button 
                    className={`${monstserrat.className} bg-white w-44 h-11 text-lg font-extrabold
                    mt-2 border-black border-2 rounded-xl rotate-3 relative z-10`}
                  >
                    Join Waitlist
                  </button>
                  {/* Button Shadow */}
                  <div className="w-40 h-11 bg-[#E5C13A] rounded-xl rotate-6 absolute top-4 left-[6px]"></div>
                </div>
              </Link>
            </div>


            {/*******  WHITE BOX:  ********/}
            <div className={`${prompt.className} relative flex justify-center items-center pt-4`}>
              {/* Background Noise */}
              <img 
                className="absolute opacity-5 z-10 rounded-xl" 
                src="/noise.png" 
                alt="placeholder"
              />
              <div className="bg-white w-60 h-60 rounded-xl shadow-md relative">
                <div className="flex justify-center items-center text-sm bg-black rounded-full
                              w-10 h-10 text-white absolute left-1/2 -top-4 transform -translate-x-1/2">
                  <StarIcon className="size-4 text-yellow-200"/>
                </div>
                <p className="text-3xl font-semibold text-center pt-12 pb-3">
                  4.9
                </p>
                <p className="text-base font-normal text-center">
                  #satisfied <span className="font-medium"> users <br/> worldwide </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*********  END OF BOXES  ***********/}




        {/*********  FOOTER:  **********/}
        <div className="flex flex-wrap border-2 border-black max-w-[1200px] w-full
                        h-auto py-5 px-5 mb-16 rounded-3xl gap-24"
        >
          {/* Left Section: */}
          <div className={`${monstserrat.className} relative`}>
            <p className="text-3xl font-extrabold">
              Study Faster <br/>
              Learn More. <br/>
              Quick
            </p>
            <div className="relative transition-transform duration-500 ease-in-out hover:scale-105">
              {/****  BUTTON CONTAINER  ****/}
              <div className="absolute bottom-2 right-4">
                {/* Button shadow: */}
                <div className="absolute top-2 left-2 w-20 h-8 bg-[#c5c1ea] -rotate-3 rounded-md"></div>
                {/* Button: */}
                <Link href="/demo_page">
                  <button className="flex flex-row items-center
                                  border-black border-2 bg-white rounded-md px-2
                                  py-1 font-bold -rotate-6"
                  >
                    <PlayCircleIcon className="size-4 mr-1 text-black"/>
                    Demo
                  </button>
                </Link>
              </div>
            </div>
          </div>


          {/* MIddle Section: */}
          <div className="border-black border-2 border-dashed w-96 flex items-center justify-center">
            placeholder
          </div>


          {/* Right Section: */}
          <div className="flex flex-col px-10 border-2 border-black rounded-lg">
            <div className="flex justify-between items-center space-x-10">
              {/* Profiles: */}
              <div className="py-5 flex flex-row items-center -space-x-2">
                <div className="flex justify-center items-center w-10 h-10 bg-[#c0cbed] border-black border-2 rounded-lg">
                  <UserIcon className="size-4"/>
                </div>
                <div className="flex justify-center items-center w-10 h-10 bg-[#c0cbed] border-black border-2 rounded-lg">
                  <UsersIcon className="size-4"/>
                </div>
                <div className="flex justify-center items-center w-10 h-10 bg-[#c0cbed] border-black border-2 rounded-lg">
                  <UserGroupIcon className="size-4"/>
                </div>
                {/* Add button: */}
                <Link className="z-10" href="/waitlist_page">
                  <button className="w-5 h-5 flex justify-center items-center
                                    bg-yellow-200 border-black border-2 rounded-full
                                    hover:rotate-90 transition-transform duration-700 ease-in-out"
                                    // Onclick go to waitlistpage using Link
                  >
                    <PlusIcon className="size-3"/>
                  </button>
                </Link>
              </div>
              {/* Number of People on Waitlist: */}
              <p className="font-medium text-3xl"> {waitlistTotal} </p>
            </div>

            {/* Text: */}
            <p className={`${prompt.className} text-base font-medium`}>
              # OF PEOPLE ON THE <br/> THE WAITLIST
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default HomePage;
