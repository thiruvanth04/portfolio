/*
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdEmail, MdPhone } from "react-icons/md"; 

export default function Contact() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const config = {
        email: 'thiruvanthjp@gmail.com',
        phone: '+91 9514785523'
    };

    return (
        <section id="contact" className="flex flex-col bg-primary px-5 py-32 text-white">
            <div className="flex flex-col items-center" data-aos="fade-up">
                <h1 className="text-4xl border-b-4 border-white mb-5 w-[130px] font-bold transition-transform duration-300 hover:scale-105">
                    Contact
                </h1>
                <p className="pb-5 text-center text-lg transition-opacity duration-300 hover:opacity-75">
                    If you want to discuss more in detail, feel free to contact me
                </p>

                <p className="py-2 flex items-center gap-3 transition-transform duration-300 hover:scale-105">
                    <MdEmail className="text-xl text-secondary" />
                    <span className="font-bold">Email :</span>
                    <a href={`mailto:${config.email}`} className="text-secondary hover:text-white transition-colors duration-300">
                        {config.email}
                    </a>
                </p>

                <p className="py-2 flex items-center gap-3 transition-transform duration-300 hover:scale-105">
                    <MdPhone className="text-xl text-secondary" />
                    <span className="font-bold">Phone :</span>
                    <a href={`tel:${config.phone}`} className="text-secondary hover:text-white transition-colors duration-300">
                        {config.phone}
                    </a>
                </p>
            </div>
        </section>
    );
}
*/
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdEmail, MdPhone, MdKeyboardArrowUp } from "react-icons/md"; 

export default function Contact() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const config = {
        email: "thiruvanthjp@gmail.com",
        phone: "+91 9514785523"
    };

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <section id="contact" className="flex flex-col bg-primary px-5 py-32 text-white">
            <div className="flex flex-col items-center" data-aos="fade-up">
                <h1 className="text-4xl border-b-4 border-white mb-5 w-[130px] font-bold transition-transform duration-300 hover:scale-105">
                    Contact
                </h1>
                <p className="pb-5 text-center text-lg transition-opacity duration-300 hover:opacity-75">
                    If you want to discuss more in detail, feel free to contact me
                </p>

                <p className="py-2 flex items-center gap-3 transition-transform duration-300 hover:scale-105">
                    <MdEmail className="text-xl text-secondary" />
                    <span className="font-bold">Email :</span>
                    <a href={`mailto:${config.email}`} className="text-secondary hover:text-white transition-colors duration-300">
                        {config.email}
                    </a>
                </p>

                <p className="py-2 flex items-center gap-3 transition-transform duration-300 hover:scale-105">
                    <MdPhone className="text-xl text-secondary" />
                    <span className="font-bold">Phone :</span>
                    <a href={`tel:${config.phone}`} className="text-secondary hover:text-white transition-colors duration-300">
                        {config.phone}
                    </a>
                </p>
            </div>

            {/* Scroll to Top Button */}
            {showButton && (
                <button 
                    onClick={scrollToTop} 
                    className="fixed bottom-5 right-5 bg-secondary text-white p-3 rounded-full shadow-lg hover:bg-white hover:text-secondary transition-colors duration-300"
                >
                    <MdKeyboardArrowUp size={24} />
                </button>
            )}
        </section>
    );
}
