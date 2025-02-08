/*
import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header() {
    const [toggleMenu, setToggleMenu]  = useState(false);

    return <header className="flex justify-between px-5 py-2 bg-secondary md:fixed md:w-full md:z-50 ">
        <a className="font-bold text-gray-300" href="#">Thiruvanth J P</a>
        <nav className="hidden md:block">
            <ul className="flex text-white ">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        {toggleMenu && <nav className="block md:hidden ">
            <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white  mobile-nav">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>}
        <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
    </header>
}
*/

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = toggleMenu ? "hidden" : "auto";
  }, [toggleMenu]);

  return (
    <header className="fixed top-0 w-full bg-secondary shadow-md z-50">
      <div className="flex justify-between items-center px-5 py-1">
        {/* Logo */}
        <a className="font-bold text-gray-300 text-xl" href="#">Thiruvanth J P</a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-white text-lg font-medium">
            <li className="hover:text-violet-400 transition"><a href="#">Home</a></li>
            <li className="hover:text-violet-400 transition"><a href="#about">About</a></li>
            <li className="hover:text-violet-400 transition"><a href="#projects">Projects</a></li>
            <li className="hover:text-violet-400 transition"><a href="#resume">Resume</a></li>
            <li className="hover:text-violet-400 transition"><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setToggleMenu(!toggleMenu)} 
          className="block md:hidden z-50 relative">
          {toggleMenu ? (
            <XMarkIcon className="text-white h-7 w-7 transition-transform transform rotate-180" />
          ) : (
            <Bars3Icon className="text-white h-7 w-7 transition-transform" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-60 transition-opacity duration-300 ${toggleMenu ? "opacity-100 visible" : "opacity-0 invisible"}`} 
        onClick={() => setToggleMenu(false)}>
      </div>

      {/* Mobile Menu */}
      <nav className={`fixed top-0 right-0 h-full bg-secondary w-3/4 sm:w-1/2 md:hidden z-50 shadow-lg transform ${toggleMenu ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}>
        <ul className="flex flex-col space-y-6 text-white text-lg font-medium p-6">
          <li onClick={() => setToggleMenu(false)}><a href="#">Home</a></li>
          <li onClick={() => setToggleMenu(false)}><a href="#about">About</a></li>
          <li onClick={() => setToggleMenu(false)}><a href="#projects">Projects</a></li>
          <li onClick={() => setToggleMenu(false)}><a href="#resume">Resume</a></li>
          <li onClick={() => setToggleMenu(false)}><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
