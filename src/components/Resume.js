
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
                    <a className='btn2' href='https://drive.google.com/file/d/1mTOUAvGjUGqyAw1677f6dj_wKZjukPIO/view?usp=sharing' target='_blank' rel='noopener noreferrer'> Download</a>
                </div>
            </div>
        </section>
    );
}
