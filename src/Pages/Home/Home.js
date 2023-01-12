import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Appointment from './Appointment';
import ContactForm from './ContactForm';
import GetStarted from './GetStarted';
import HeroArea from './HeroArea';
import OurServices from './OurServices';
import ReachUs from './ReachUs';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <HeroArea></HeroArea>
            <ReachUs></ReachUs>
            <OurServices></OurServices>
            <GetStarted></GetStarted>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    );
};

export default Home;