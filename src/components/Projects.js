/*
import websiteImg1 from '../assets/proj1.png';
import websiteImg2 from '../assets/proj2.png';
import websiteImg3 from '../assets/proj3.png';

export default function Project() {
    return (
        <section id='projects' className="flex flex-col px-5 py-20 justify-center bg-primary text-white">
            <div className="w-full flex justify-center mb-10">
                <h1 className='text-3xl text-white border-b-4 border-white mb-0 w-[110px] font-bold hover:scale-105'>Projects</h1>
            </div>
            <div className="w-full flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-18">
                    <div className="flex flex-col items-center text-center group">
                        <img className="w-64 h-64 object-cover mb-4" src={websiteImg1} alt="Project 1"/>
                        <h2 className="font-bold text-lg">ImageGen : Advanced AI Platform</h2>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
                            <p>A Full-stack application of OpenAI's DALL-E, a Text to Image-AI application utilizing Mongo-DB,Express.js,React JS,Node.js (MERN) Web stack.</p>
                            <p className='py-2'>Utilized OpenAI's API, enabling users to generate images and share them to the community.</p>
                            <div className="mt-2">
                                <a className='btn text-white font-normal bg-gray-500 hover:bg-gray-600' href="https://dall-e-project-eight.vercel.app/" target="_blank" rel="noopener noreferrer">View Project</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center group">
                        <img className="w-64 h-64 object-cover mb-4" src={websiteImg2} alt="Project 2"/>
                        <h2 className="font-bold text-lg">BERT Powered Sentiment Analysis</h2>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
                            <p>This project explores the efficacy of leveraging BERT, a Transformer model for Natural Language Processing.</p>
                            <p className='py-2'>Utilized LIME and SHAP tools for Explainable AI interpretations.</p>
                            <p className='py-1'>Achieved 92% accuracy in tweet sentiment classification.</p>
                            <div className="mt-2">
                                <a className='btn text-white font-normal bg-gray-500 hover:bg-gray-600' href="https://github.com/thiruvanth04/Bert_explainable_ai_project" target="_blank" rel="noopener noreferrer">View Project</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center group">
                        <img className="w-64 h-64 object-cover mb-3" src={websiteImg3} alt="Project 3"/>
                        <h2 className="font-bold text-lg">Role-Based Access Control using Node.js & JWT</h2>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
                            <p>This Project is a backend system built with Node.js, Express.js, and MongoDB to manage user roles and permissions.</p>
                            <p className='py-2'>It uses JSON Web Tokens-JWT for secure authentication, ensuring controlled access based on roles. This project highlights skills in backend development, API security, and role-based access management.</p>
                            <div className="mt-2">
                                <a className='btn text-white font-normal bg-gray-500 hover:bg-gray-600' href="https://github.com/thiruvanth04/rbac" target="_blank" rel="noopener noreferrer">View Project</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
*/

import websiteImg1 from '../assets/proj1.png';
import websiteImg2 from '../assets/proj2.png';
import websiteImg3 from '../assets/proj3.png';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Project() {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-in-out' });
    }, []);

    return (
        <section id="projects" className="flex flex-col px-5 py-20 justify-center bg-primary text-white">
            <div className="w-full flex justify-center mb-10">
                <h1 className="text-4xl font-bold border-b-4 border-white w-auto pb-2 transition-transform duration-300 hover:scale-105">
                    Projects
                </h1>
            </div>

            <div className="w-full flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-5">
                    {[{
                        img: websiteImg1,
                        title: "ImageGen: Advanced AI Platform",
                        desc1: "A full-stack AI-powered text-to-image generator utilizing OpenAI's DALL-E API.",
                        desc2: "Built with MERN stack (MongoDB, Express.js, React.js, Node.js).",
                        link: "https://dall-e-project-eight.vercel.app/"
                    },
                    {
                        img: websiteImg2,
                        title: "BERT Powered Sentiment Analysis",
                        desc1: "Implemented BERT for NLP-based sentiment analysis with explainable AI techniques.",
                        desc2: "Achieved 92% accuracy using LIME and SHAP tools for model interpretation.",
                        link: "https://github.com/thiruvanth04/Bert_explainable_ai_project"
                    },
                    {
                        img: websiteImg3,
                        title: "Role-Based Access Control (RBAC)",
                        desc1: "Developed a secure RBAC system using Node.js, JWT, and MongoDB.",
                        desc2: "Manages user roles & permissions with API security best practices.",
                        link: "https://github.com/thiruvanth04/rbac"
                    }].map((project, index) => (
                        <div 
                            key={index} 
                            className="flex flex-col items-center text-center bg-gray-900 rounded-lg p-5 shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                            data-aos="fade-up"
                        >
                            <img className="w-64 h-64 object-cover mb-4 rounded-lg" src={project.img} alt={project.title} />
                            <h2 className="font-bold text-lg text-blue-300">{project.title}</h2>
                            <p className="mt-2 text-gray-300">{project.desc1}</p>
                            <p className="text-gray-400">{project.desc2}</p>
                            <a 
                                className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md text-white font-semibold hover:from-cyan-500 hover:to-blue-500 transition-all duration-300"
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
