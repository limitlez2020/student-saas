import Link from 'next/link';
import React, { useState } from 'react';
import { Montserrat } from 'next/font/google';
import { Prompt } from 'next/font/google';

const monstserrat = Montserrat({ subsets: ['latin'] });
const prompt = Prompt({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`${prompt.className} flex justify-between items-center mt-10 mx-10 md:mx-36 lg:mx-52 
                    max-w-[1200px] rounded-xl px-5 py-3 shadow-sm bg-white/75 backdrop-blur-2xl 
                    border border-white/20 z-50 relative`}
    >
      {/* Logo */}
      <Link href="/">
        <p className={`${monstserrat.className} font-extrabold text-2xl`}>
          Claud.
        </p>
      </Link>

      {/* Page Links - Hidden on Mobile */}
      <div className='hidden md:flex flex-row gap-3 md:gap-8 lg:gap-8 font-normal text-sm'>
        <Link href="/about_page">
          <p className='hover:font-medium'>About</p>
        </Link>
        <Link href="/features_page">
          <p className='hover:font-medium'>Features</p>
        </Link>
        <Link href="/pricing_page">
          <p className='hover:font-medium'>Pricing</p>
        </Link>
      </div>

      {/* Desktop Demo Button (Hidden on Mobile) */}
      <Link href="/demo_page" className="hidden md:flex">
        <button className={`${monstserrat.className} text-base border-black bg-[#d3aefe] border-2
                            p-2 px-4 rounded-md font-extrabold hover:bg-[#fede65]`}>
          DEMO
        </button>
      </Link>

      {/* Mobile Menu Button (Only Visible on Mobile) */}
      <button 
        className="md:hidden text-2xl font-bold focus:outline-none" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? '✖' : '☰'}
      </button>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-[70px] right-5 w-48 bg-white shadow-md rounded-lg py-4 flex flex-col space-y-4 text-center">
          <Link href="/about_page" className="hover:font-medium" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link href="/features_page" className="hover:font-medium" onClick={() => setIsMenuOpen(false)}>Features</Link>
          <Link href="/pricing_page" className="hover:font-medium" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
          <Link href="/demo_page" className="hover:font-medium" onClick={() => setIsMenuOpen(false)}>Demo</Link>
        </div>
      )}
    </div>
  );
}

export default NavBar;
