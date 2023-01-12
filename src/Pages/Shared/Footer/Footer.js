import React from 'react';
import footer from '../../../utilities/assets/images/footer.png'

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <div style={{background:`url(${footer})`,backgroundSize:'cover',backgroundPosition:'top'}}>
            <footer className="footer p-10 bg-base-100 text-base-content max-w-[1280px] mx-auto">
                <div>
                <span className="footer-title">Services</span> 
                <a className="link link-hover">Branding</a> 
                <a className="link link-hover">Design</a> 
                <a className="link link-hover">Marketing</a> 
                <a className="link link-hover">Advertisement</a>
                </div> 
                <div className='mx-auto'>
                <span className="footer-title">Company</span> 
                <a className="link link-hover">About us</a> 
                <a className="link link-hover">Contact</a> 
                <a className="link link-hover">Jobs</a> 
                <a className="link link-hover">Press kit</a>
                </div> 
                <div className='ml-auto'>
                <span className="footer-title">Legal</span> 
                <a className="link link-hover">Terms of use</a> 
                <a className="link link-hover">Privacy policy</a> 
                <a className="link link-hover">Cookie policy</a>
                </div>
            </footer> 
            <div className="copyWrite py-5">
                <p>Copyright {date} All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;