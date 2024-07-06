
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
                        <h2 className="font-bold text-lg">OpenAI's DALL-E Clone</h2>
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
                        <h2 className="font-bold text-lg">BERT Transformer - NLP Project</h2>
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
                        <img className="w-64 h-64 object-cover mb-4" src={websiteImg3} alt="Project 3"/>
                        <h2 className="font-bold text-lg">Chat App and other Projects in JAVA</h2>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
                            <p>A real-time chat application that allows users to send and receive messages over a network utilizing TCP.</p>
                            <p className='py-2'>Other applications were built using Java's capabilities for communication and utilizing Swing for the GUI.</p>
                            <div className="mt-2">
                                <a className='btn text-white font-normal bg-gray-500 hover:bg-gray-600' href="https://github.com/thiruvanth04/Java-Applications" target="_blank" rel="noopener noreferrer">View Project</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
