
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
                                <a className='btn text-white font-normal bg-gray-500 hover:bg-gray-600' href="https://github.com/thiruvanth04/dall-e-project" target="_blank" rel="noopener noreferrer">View Project</a>
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

