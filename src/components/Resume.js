/*
import ResumeImg from '../assets/resume.png';

export default function Resume () {
    return (
        <section id='resume' className='flex flex-col md:flex-row bg-secondary px-5'>
            <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
                <img className='w-2/3' src={ResumeImg} />
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-white'>
                    <h1 className='text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold hover:scale-105 text-center'>Resume</h1>
                    <p className='pb-5'>You can View & Download my resume</p>
                    <a className='btn2' href='https://drive.google.com/file/d/1t1Um9WZ3IIy8C102KlexGmVwz3IezT6n/view?usp=sharing' target='_blank' rel='noopener noreferrer'> Download</a>
                </div>
            </div>
        </section>
    );
}
*/

import ResumeImg from '../assets/resume.png';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Resume() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section id="resume" className="flex flex-col md:flex-row bg-secondary px-5 py-10">
            <div className="py-5 md:w-1/2 flex justify-center md:justify-end" data-aos="fade-right">
                <img className="w-2/3 rounded-lg shadow-lg" src={ResumeImg} alt="Resume Preview" />
            </div>
            <div className="md:w-1/2 flex justify-center">
                <div className="flex flex-col justify-center text-white text-center md:text-left" data-aos="fade-left">
                    <h1 className="text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold hover:scale-105 transition-transform duration-300">
                        Resume
                    </h1>
                    <p className="pb-5 text-lg">You can View & Download my resume</p>
                    <a className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
                        href="https://drive.google.com/file/d/1t1Um9WZ3IIy8C102KlexGmVwz3IezT6n/view?usp=sharing"
                        target="_blank" 
                        rel="noopener noreferrer">
                        Download
                    </a>
                </div>
            </div>
        </section>
    );
}
