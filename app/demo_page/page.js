"use client"

import Image from "next/image";
import NavBar from "../components/NavBar";
import { Montserrat } from "next/font/google";
import { Prompt } from "next/font/google";
import { PlayCircleIcon, PlayIcon, PlusIcon, StarIcon } from "@heroicons/react/24/solid"
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




const DemoPage = () => {
  
  return (
    /* Screen Container */
    <div className="flex flex-col min-h-screen bg-[#efe6f7]">
      {/* Background Noise */}
      <div className="absolute top-0 opacity-10 w-full h-full bg-noise-pattern"/>

      <NavBar/>

      {/* Hero Section: */}
      <div className="flex flex-col items-center justify-center mt-24 mx-10 md:mx-36 lg:mx-52">
        {/* Hero Text: */}
        <div className="flex flex-col items-center justify-center mb-20">
          <p className={`${monstserrat.className} text-6xl font-extrabold text-center
                         md:text-7xl lg:text-8xl`}>
            WELCOME
          </p>
          <p className={`${prompt.className} text-base font-normal text-center
                        md:text-lg lg:text-lg`}>
            What tools would you like to use today?
          </p>
        </div>

        {/********  TOOLS  *********/}
        <div>
          {/* Tools NavBar */}
        </div>
      </div>
      
    </div>
  );
}

export default DemoPage;
