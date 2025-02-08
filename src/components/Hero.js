/*
import HeroImg from '../assets/hero2.png';
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";

export default function Hero() {
    return (
        <section className='flex flex-col md:flex-row px-5 py-10 bg-primary justify-center'>
            <div className='md:w-1/3 flex flex-col justify-center mb-5 md:mb-0'>
                <h1 className='text-white font-hero-font text-5xl mb-5'> Hi,<br /> I'm <span className='text-black font-hero-font md:text-6xl sm:text-5xl font-bold hover:text-white transition duration-300 ease-in-out'>Thiruvanth</span></h1>
                <p className='text-white text-xl justify-start text-m font-hero-font font-semibold px-1 '>CSE Undergrad | Full-Stack Web developer |</p>
                <p className='text-white text-xl justify-start text-m font-hero-font font-semibold px-1 '>Passion for NLP | Deep Learning Enthusiast |</p>
                <p className='text-white text-xl justify-start text-m font-hero-font font-semibold px-1 '>Building Innovative Software Solutions</p>
                <div className='flex py-7'>
                    <a href='https://www.linkedin.com/in/thiruvanthjp/' className='px-2 hover:text-white'><AiOutlineLinkedin size={30} /></a>
                    <a href='https://github.com/thiruvanth04' className='px-2 hover:text-white'><AiOutlineGithub size={30} /></a>
                    <a href='https://x.com/ThiruvanthJ' className='hover:text-white'><AiOutlineTwitter size={30} /></a>
                    <a href='https://www.instagram.com/iamthiruvanthjp._/' className='px-2 hover:text-white'><AiOutlineInstagram size={30} /></a>
                    <a href='https://leetcode.com/u/thiruvanthjp/' className='px-2 hover:text-white'><SiLeetcode size={30} /></a>
                    <a href='https://www.geeksforgeeks.org/user/thiruva81wv/' className='px-2 hover:text-white'><SiGeeksforgeeks size={30} /></a>
                </div>
            </div>
            <div className='md:w-2/5 flex justify-center py-5 md:py-0'>
                <img className='w-full h-auto' src={HeroImg} />
            </div>
        </section>
    );
}
*/

/*
import HeroImg from '../assets/hero2.png';
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

export default function Hero() {
    return (
        <section className='flex flex-col md:flex-row px-5 py-10 bg-primary justify-center'>
            <div className='md:w-1/3 flex flex-col justify-center mb-5 md:mb-0'>
                <h1 className='text-white font-hero-font text-5xl mb-5'>
                    Hi,<br /> I'm <span className='text-black font-hero-font md:text-6xl sm:text-5xl font-bold hover:text-white transition duration-300 ease-in-out'>
                        Thiruvanth
                    </span>
                </h1>
                <p className='text-white text-xl font-hero-font font-semibold px-1'>CSE Undergrad | Full-Stack Web Developer |</p>
                <p className='text-white text-xl font-hero-font font-semibold px-1'>Passion for NLP | Deep Learning Enthusiast |</p>
                <p className='text-white text-xl font-hero-font font-semibold px-1'>Building Innovative Software Solutions</p>
                
                <div className='flex py-7 space-x-4'>
                    <a href='https://www.linkedin.com/in/thiruvanthjp/' className='text-white hover:text-blue-500 transform hover:scale-110 transition duration-300'>
                        <AiOutlineLinkedin size={30} />
                    </a>
                    <a href='https://github.com/thiruvanth04' className='text-white hover:text-gray-400 transform hover:scale-110 transition duration-300'>
                        <AiOutlineGithub size={30} />
                    </a>
                    <a href='https://x.com/ThiruvanthJ' className='text-white hover:text-blue-400 transform hover:scale-110 transition duration-300'>
                        <AiOutlineTwitter size={30} />
                    </a>
                    <a href='https://www.instagram.com/iamthiruvanthjp._/' className='text-white hover:text-pink-500 transform hover:scale-110 transition duration-300'>
                        <AiOutlineInstagram size={30} />
                    </a>
                    <a href='https://leetcode.com/u/thiruvanthjp/' className='text-white hover:text-yellow-500 transform hover:scale-110 transition duration-300'>
                        <SiLeetcode size={30} />
                    </a>
                    <a href='https://www.geeksforgeeks.org/user/thiruva81wv/' className='text-white hover:text-green-500 transform hover:scale-110 transition duration-300'>
                        <SiGeeksforgeeks size={30} />
                    </a>
                </div>
            </div>
            <div className='md:w-2/5 flex justify-center py-5 md:py-0'>
                <img className='w-full h-auto' src={HeroImg} alt="Hero" />
            </div>
        </section>
    );
}
*/

import HeroImg from '../assets/hero2.png';
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

export default function Hero() {
    return (
        <section className='flex flex-col md:flex-row px-5 py-14 bg-primary justify-center'>
            <div className='md:w-1/3 flex flex-col justify-center mb-5 md:mb-0'>
                <h1 className='text-white font-hero-font text-5xl mb-5 relative'>
                    Hi,<br /> I'm{" "} 
                    <span 
                        className="relative text-6xl sm:text-5xl font-extrabold tracking-wide
                        bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-gray-100 to-cyan-400
                        transition-all duration-500 ease-in-out hover:animate-glow"
                    >
                        Thiruvanth
                    </span>
                </h1>
                
                <p className='text-white text-xl font-hero-font font-semibold px-1'>CSE Undergrad | Full-Stack Web Developer |</p>
                <p className='text-white text-xl font-hero-font font-semibold px-1'>Passion for NLP | Deep Learning Enthusiast |</p>
                <p className='text-white text-xl font-hero-font font-semibold px-1'>Building Innovative Software Solutions</p>
                
                <div className='flex py-7 space-x-4'>
                    <a href='https://www.linkedin.com/in/thiruvanthjp/' className='text-white hover:text-blue-500 transform hover:scale-110 transition duration-300'>
                        <AiOutlineLinkedin size={30} />
                    </a>
                    <a href='https://github.com/thiruvanth04' className='text-white hover:text-gray-400 transform hover:scale-110 transition duration-300'>
                        <AiOutlineGithub size={30} />
                    </a>
                    <a href='https://x.com/ThiruvanthJ' className='text-white hover:text-blue-400 transform hover:scale-110 transition duration-300'>
                        <AiOutlineTwitter size={30} />
                    </a>
                    <a href='https://www.instagram.com/iamthiruvanthjp._/' className='text-white hover:text-pink-500 transform hover:scale-110 transition duration-300'>
                        <AiOutlineInstagram size={30} />
                    </a>
                    <a href='https://leetcode.com/u/thiruvanthjp/' className='text-white hover:text-yellow-500 transform hover:scale-110 transition duration-300'>
                        <SiLeetcode size={30} />
                    </a>
                    <a href='https://www.geeksforgeeks.org/user/thiruva81wv/' className='text-white hover:text-green-500 transform hover:scale-110 transition duration-300'>
                        <SiGeeksforgeeks size={30} />
                    </a>
                </div>
            </div>
            <div className='md:w-2/5 flex justify-center py-5 md:py-0'>
                <img className='w-full h-auto' src={HeroImg} alt="Hero" />
            </div>
        </section>
    );
}
