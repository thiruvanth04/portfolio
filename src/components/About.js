/*
import AboutImg from '../assets/about.png'
import MyImg from '../assets/linkedin_pfp.png'

export default function About() {
    return (
        <section className='flex flex-col md:flex-row bg-secondary px-5 py-20 items-center justify-center' id='about'>
            <div className='md:w-1/2 py-5 flex justify-center'>
                <img className='md:w-2/3' src={AboutImg} />
            </div>
            <div className='md:w-1/3 flex flex-col items-center'>
                <div className='w-40 h-40 rounded-full overflow-hidden mb-5 transition-transform duration-300 hover:scale-110'>
                    <img className='w-full h-full object-cover transform scale-125' src={MyImg} alt="Profile" />
                </div>
                <h1 className='text-3xl text-white border-b-4 border-primary mb-5 w-[150px] text-center font-bold transition-transform duration-300 hover:scale-105'>About Me</h1>
                <div className='flex flex-col items-center text-white'>
                    <p className='pb-5 text-left transition-opacity duration-300'>
                        I am a B.Tech Computer Science student at SASTRA University, Thanjavur, with a keen interest in Full-stack web development, Deep learning models and Data structures. I am proficient in programming languages such as Python, Java, JavaScript, and C++. I have experience working with MongoDB Atlas, React.js, Next.js, and Express.js in the web development domain. I have solved 150+ questions and have earned two badges on LeetCode. I am available for job opportunities that align with my skills and interests.
                    </p>
                </div>
            </div>
        </section>
    );
}
*/

import AboutImg from '../assets/about.png';
import MyImg from '../assets/linkedin_pfp.png';

export default function About() {
    return (
        <section className='flex flex-col md:flex-row bg-secondary px-5 py-20 items-center justify-center' id='about'>
            <div className='md:w-1/2 py-5 flex justify-center'>
                <img className='md:w-2/3' src={AboutImg} alt='About' />
            </div>
            <div className='md:w-1/3 flex flex-col items-center'>
                <div className='w-40 h-40 rounded-full overflow-hidden mb-5 transition-transform duration-300 hover:scale-110'>
                    <img className='w-full h-full object-cover transform scale-125' src={MyImg} alt='Profile' />
                </div>
                <h1 className='text-3xl text-white border-b-4 border-white mb-5 w-[150px] text-center font-bold transition-transform duration-300 hover:scale-105'>About Me</h1>
                <div className='flex flex-col items-center text-white'>
                    <p className='pb-5 text-left transition-opacity duration-300'>
                        I am a B.Tech Computer Science student at SASTRA University, Thanjavur, with a keen interest in Full-stack web development, Deep learning models, and Data structures. I am proficient in programming languages such as Python, Java, JavaScript, and C++. I have experience working with MongoDB Atlas, React.js, Next.js, and Express.js in the web development domain. I have solved 150+ questions and have earned two badges on LeetCode. I am available for job opportunities that align with my skills and interests.
                    </p>
                </div>
            </div>
        </section>
    );
}
