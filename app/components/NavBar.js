import Link from 'next/link';
import React from 'react';
import { Montserrat } from 'next/font/google';
import { Prompt } from 'next/font/google';

const monstserrat = Montserrat({ subsets: ['latin'] });
const prompt = Prompt({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const NavBar = (props) => {
  return (
    /* NavBar: */
    <div className={`${prompt.className} flex flex-row mt-6 mx-10 md:mx-36 lg:mx-52
                    max-w-[1200px] justify-between items-center rounded-xl px-5 py-3
                    shadow-sm bg-white/75 backdrop-blur-2xl border border-white/20
                    sticky top-10 z-50`}
    >
      {/* Logo: */}
      <Link href="/">
        <p className={`${monstserrat.className} font-extrabold text-2xl`}>
          Claud.
        </p>
      </Link>

      {/* Links */}
      <div className='flex flex-row gap-3 md:gap-8 lg:gap-8 font-normal text-sm'>
        <Link href="/about_page">
          <p className='hover:font-medium'>
            About
          </p>
        </Link>
        <Link href="/features_page">
          <p className='hover:font-medium'>
            Features
          </p>
        </Link>
        <Link href="/pricing_page">
          <p className='hover:font-medium'>
            Pricing
          </p>
        </Link>
      </div>

      {/* Buttons: */}
      <Link href="/demo_page">
        <div className='flex flex-row justify-between space-x-2'>
          <button className={`${monstserrat.className} text-base border-black bg-[#d3aefe] border-2
                            p-2 px-4 rounded-md font-extrabold hover:bg-[#fede65]`}>
            DEMO
          </button>
        </div>
      </Link>
    </div>
  );
}


export default NavBar;
