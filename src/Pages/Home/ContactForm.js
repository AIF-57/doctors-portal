import React from 'react';
import appointment from '../../utilities/assets/images/appointment.png'

const ContactForm = () => {
    return (
        <div style={{background:`url(${appointment})`,backgroundSize:'cover',backgroundPosition:'center'}} className='min-h-[500px] flex flex-col items-center justify-evenly'>
            <div className="contactFormTitle">
                <p className='text-secondary font-semibold'>Contact Us</p>
                <p className='text-4xl text-white'>Stay connected with us</p>
            </div>
            <form className='flex flex-col justify-evenly w-[450px] h-[350px]'>
                <input type="text" placeholder="Email Address" className="input w-full" />
                <input type="text" placeholder="Subject" className="input w-full" />
                <textarea className="textarea w-full h-[136px]" placeholder="Your message"></textarea>
            </form>
        </div>
    );
};

export default ContactForm;