
import HeroImg from '../assets/hero2.png'
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";

export default function Hero() {
    return (
        <section className='flex flex-col md:flex-row px-5 py-10 bg-primary justify-center'>
            <div className='md:w-1/3 flex flex-col justify-center mb-5 md:mb-0'> {/* Reduced margin-bottom for small screens */}
                <h1 className='text-white text-6xl font-hero-font mb-5'> Hi, <br /> Im <span className='text-black'>Thiruvanth</span></h1>
                <p className='text-white text-m font-hero-font px-1'>CSE Undergrad | Full-Stack Web developer |</p>
                <p className='text-white text-m font-hero-font px-1'>Passion for NLP | Deep Learning Enthusiast |</p>
                <p className='text-white text-m font-hero-font px-1'>Building Innovative Software Solutions</p>
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

