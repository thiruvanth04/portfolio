/*
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
                    {[
                        {
                            img: websiteImg1,
                            title: "ImageGen: Advanced AI Platform",
                            desc1: "A full-stack AI-powered text-to-image generator utilizing OpenAI's DALL-E API.",
                            desc2: "Built with MERN stack (MongoDB, Express.js, React.js, Node.js).",
                            link: "https://dall-e-project-eight.vercel.app/",
                        },
                        {
                            img: websiteImg2,
                            title: "BERT Powered Sentiment Analysis",
                            desc1: "Implemented BERT for NLP-based sentiment analysis with explainable AI techniques.",
                            desc2: "Achieved 92% accuracy using LIME and SHAP tools for model interpretation.",
                            link: "https://github.com/thiruvanth04/Bert_explainable_ai_project",
                            journalLink: "https://docs.google.com/document/d/1mdcZeBH1dOwWrEUV7-hHrKrZXdDYxZNb/edit?usp=sharing&ouid=114143862044073223677&rtpof=true&sd=true"
                        },
                        {
                            img: websiteImg3,
                            title: "Role-Based Access Control (RBAC)",
                            desc1: "Developed a secure RBAC system using Node.js, JWT, and MongoDB.",
                            desc2: "Manages user roles & permissions with API security best practices.",
                            link: "https://github.com/thiruvanth04/rbac",
                        },
                    ].map((project, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center bg-gray-900 rounded-lg p-5 shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                            data-aos="fade-up"
                        >
                            <img className="w-64 h-64 object-cover mb-4 rounded-lg" src={project.img} alt={project.title} />
                            <h2 className="font-bold text-lg text-blue-300">{project.title}</h2>
                            <p className="mt-2 text-gray-300">{project.desc1}</p>
                            <p className="text-gray-400">{project.desc2}</p>

                            {/* Buttons for BERT Sentiment Analysis (Side by Side) */}
                            {project.journalLink ? (
                                <div className="mt-4 flex justify-center gap-4">
                                    <a
                                        className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md text-white font-semibold hover:from-pink-500 hover:to-purple-500 transition-all duration-300"
                                        href={project.journalLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Journal
                                    </a>
                                    <a
                                        className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md text-white font-semibold hover:from-cyan-500 hover:to-blue-500 transition-all duration-300"
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Project
                                    </a>
                                </div>
                            ) : (
                                <a
                                    className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md text-white font-semibold hover:from-cyan-500 hover:to-blue-500 transition-all duration-300"
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Project
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
