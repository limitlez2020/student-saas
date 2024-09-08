"use client"

import Image from "next/image";
import NavBar from "../components/NavBar";
import ChatBot from "../components/ChatBot";
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
  
  /* Track which tool is clicked: */
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = (tool) => {
    setIsClicked(tool);
  }

  return (
    /* Screen Container */
    <div className="flex flex-col relative min-h-screen bg-[#efe6f7]">
      {/* Background Noise */}
      <div className="absolute top-0 left-0 opacity-10 w-full h-full bg-noise-pattern"/>

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
        <div className="flex flex-col gap-20">
          {/* Tools NavBar */}
          <div className={`${prompt.className} flex flex-row justify-between items-center
                          w-full gap-2 font-normal text-sm bg-[#9854e5]/30 px-1 py-1
                          rounded-lg z-10 shadow-inner border-black/15 border-2 mb-10`}>
            {/* Chatbot */}
            <button className={`px-4 py-2 rounded-md ${isClicked === "Chatbot" ? "bg-white" : ""}`}
                    onClick={() => handleClick("Chatbot")}>
              <p> Chatbot </p>
            </button>
            {/* Todo */}
            <button className={`px-4 py-2 rounded-md ${isClicked === "Todo" ? "bg-white" : ""}`}
                    onClick={() => handleClick("Todo")}>
              <p> Todo </p>
            </button>
            {/* Flashcards */}
            <button className={`px-4 py-2 rounded-md ${isClicked === "Flashcards" ? "bg-white" : ""}`}
                    onClick={() => handleClick("Flashcards")}>
              <p> Flashcards </p>
            </button>
          </div>
        </div>

        {/* Tool */}
        {isClicked === "Chatbot" && (
          <div className="flex flex-col items-center gap-4 z-10 mb-20">
            <ChatBot/>
          </div>
        )}
      </div>
      
    </div>
  );
}

export default DemoPage;
