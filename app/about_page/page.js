'use client'

import { useState } from "react";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { firestore } from "@/firebase";
import Image from "next/image";
import NavBar from "../components/NavBar";
import { Montserrat } from "next/font/google";
import { Prompt } from "next/font/google";
import { CheckBadgeIcon, EnvelopeIcon, PlayCircleIcon, PlayIcon, PlusIcon, RocketLaunchIcon, StarIcon, UserIcon } from "@heroicons/react/24/solid"

const monstserrat = Montserrat({ subsets: ['latin'] });
const prompt = Prompt({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});



const AboutPage = () => {

  return (
    /* Screen Container */
    <div className="flex flex-col min-h-screen bg-[#efe6f7]">
      {/* Background Noise */}
      <div className="absolute top-0 opacity-10 w-full h-full bg-noise-pattern"/>

      <NavBar/>

      {/* Contents Container: */}
      <div className="flex flex-col items-center justify-center mt-32 mx-10 md:mx-36 lg:mx-52">
        <div className={`${monstserrat.className} flex flex-col gap-4 items-center justify-center
                         font-extrabold text-6xl md:text-7xl lg:text-8xl`}>
          <p> COMING </p>
          
          <div className="flex relative hover:rotate-6 transition-transform duration-700 ease-in-out">
            {/* Box: */}
            <div className="bg-[#fede65] px-4 py-2 border-black border-2 -rotate-6
                            rounded-lg relative z-10">
              <p> SOON </p>
            </div>

            {/* Box shadow: */}
            <div className="absolute w-full h-full bg-black rounded-md -rotate-6
                            top-[6px] left-[6px]"
            >
            </div>
          </div>
        </div>

        <p className={`${prompt.className} text-center font-normal text-sm md:text-base lg:text-lg mt-12`}>
          This page is currently under construction 🚧
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
