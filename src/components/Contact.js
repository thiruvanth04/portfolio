/*
export default function Contact () {

    const config = {
        email : 'thiruvanthjp@gmail.com',
        phone: '+91 9514785523'
    }

    return <section id='contact' className='flex flex-col bg-primary px-5 py-32 text-white'>
        <div className='flex flex-col items-center'>
           
            <h1 className='text-4xl border-b-4  border-secondary mb-5 w-[140px] font-bold'>Contact</h1>
            <p className='pb-5'>If you want to discuss more in detail, feel free contact me</p>
            <p className='py-2'><span className='font-bold'>Email :</span> {config.email}</p>
            <p className='py-2'><span className='font-bold'>Phone :</span> {config.phone}</p>
        </div>
    </section>
}
    */
export default function Contact() {

    const config = {
        email: 'thiruvanthjp@gmail.com',
        phone: '+91 9514785523'
    }

    return (
        <section id='contact' className='flex flex-col bg-primary px-5 py-32 text-white'>
            <div className='flex flex-col items-center'>
                <h1 className='text-4xl border-b-4 border-white mb-5 w-[130px] font-bold transition-transform duration-300 hover:scale-105'>Contact</h1>
                <p className='pb-5 text-center transition-opacity duration-300 hover:opacity-75'>If you want to discuss more in detail, feel free to contact me</p>
                <p className='py-2 flex items-center gap-2 transition-transform duration-300 hover:scale-105'>
                    <span className='font-bold'>Email :</span> 
                    <a href={`mailto:${config.email}`} className='text-secondary hover:text-white transition-colors duration-300'>
                        {config.email}
                    </a>
                </p>
                <p className='py-2 flex items-center gap-2 transition-transform duration-300 hover:scale-105'>
                    <span className='font-bold'>Phone :</span> 
                    <a href={`tel:${config.phone}`} className='text-secondary hover:text-white transition-colors duration-300'>
                        {config.phone}
                    </a>
                </p>
            </div>
        </section>
    );
}
