import Image from "next/image";
import NavBar from "../components/NavBar";
import { Montserrat } from "next/font/google";
import { Prompt } from "next/font/google";
import { EnvelopeIcon, PlayCircleIcon, PlayIcon, PlusIcon, StarIcon, UserIcon } from "@heroicons/react/24/solid"

const monstserrat = Montserrat({ subsets: ['latin'] });
const prompt = Prompt({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const WaitlistPage = () => {
  return (
    /* Screen Container */
    <div className="flex flex-col min-h-screen bg-[#efe6f7]">
      {/* Background Noise */}
      <img 
        className="absolute top-0 opacity-10 w-full h-full" 
        src="/noise.png" 
        alt="placeholder"
      />

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
        <div className="flex flex-col mt-24">

          {/* Name Field: */}
          <div className="relative w-80">
            <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4"/>
            <input 
              className="border-2 border-black bg-white/30 rounded-lg py-2 pl-10
                         pr-4 w-full z-10"
              type="text"
              placeholder="Name"
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
              // TODO: Make this field required for submission
            >
            </input>
          </div>

          {/* Submit Button: */}
          <button 
            className={`${monstserrat.className} bg-[#d3aefe]/80 w-80 h-11 text-lg
                        font-extrabold mt-4 border-black border-2 rounded-xl z-10
                        hover:scale-105 transition-transform
                        duration-500 ease-in-out`}
            // onClick={Do_stuff}
          >
            Join Waitlist
          </button>
        </div>

      </div>

      
    </div>
  );
}

export default WaitlistPage;
