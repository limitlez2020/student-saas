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



const WaitlistPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);


  /* Handle Submission:
   * Create a document in Firestore
   * with the user's name and email.
  */
  const handleSubmit = async (e) => {
    /* Prevent page reload when submitting the form */
    e.preventDefault();

    /* Add document to waitlist collection: */
    try {
      await addDoc(collection(firestore, "waitlist"), {
        name: name,
        email: email,
      });

      /* Update submit state: */
      setSubmitted(true);
    } catch (error) {
      console.error("Error adding document i.e. user to waitlist: ", error);
    }

  }


  return (
    /* Screen Container */
    <div className="flex flex-col min-h-screen bg-[#efe6f7]">
      {/* Background Noise */}
      <div className="absolute top-0 opacity-10 w-full h-full bg-noise-pattern"/>


      <NavBar/>


      {/* Contents Container: */}
      <div className="flex flex-col items-center justify-center mt-24 mx-10 md:mx-36 lg:mx-52">
        {/******  HERO  *******/}
        <div className="flex flex-col items-center justify-center text-center">
          <p className={`${monstserrat.className} text-5xl font-bold mx-20 md:text-6xl lg:text-6xl`}>
            Join The Waitlist, <br/> Get Early Access to
          </p>
          <p className={`${monstserrat.className} bg-white border-black border-2 mt-4 px-4 py-2
                         rounded-xl text-3xl font-bold -rotate-3 hover:rotate-3 transition-transform
                         duration-500 ease-in-out`}
          >
            Claud.
          </p>
        </div>

        {/*************  FORM  ***********/}
        {/* Form Container: */}

        {submitted ? (
          /* If form has been submitted: */
          <div className="flex flex-col items-center justify-center mt-24 mb-32">
            {/* Check Icon: */}
            <CheckBadgeIcon className="text-black border-black size-10"/>
            <p className={`${prompt.className} text-center text-lg`}>
              Thank you for joining the waitlist!
            </p>
          </div>
          ) : (
          /* If the form has not been submitted: */
          <form className="flex flex-col mt-24" onSubmit={handleSubmit}>

            {/* Name Field: */}
            <div className="relative w-80">
              <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4"/>
              <input 
                className="border-2 border-black bg-white/30 rounded-lg py-2 pl-10
                          pr-4 w-full z-10"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => {setName(e.target.value)}}
                required
              >
              </input>
            </div>

            {/* Email Field: */}
            <div className="relative w-80 mt-4">
              <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4"/>
              <input 
                className="border-2 border-black bg-white/30 rounded-lg py-2 pl-10
                          pr-4 w-full z-10 text-pretty"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
                required
              >
              </input>
            </div>

            {/* Submit Button: */}
            <button 
              className={`${monstserrat.className} bg-[#d3aefe]/80 w-80 h-11 text-lg
                          font-extrabold mt-4 border-black border-2 rounded-xl z-10
                          hover:scale-105 transition-transform
                          duration-500 ease-in-out`}
              type="submit"
            >
              Join Waitlist
            </button>
          </form>
        )}
      </div>

    </div>
  );
}

export default WaitlistPage;
