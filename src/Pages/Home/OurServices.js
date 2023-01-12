import React from 'react';
import ServicesCard from './ServicesCard';
import fluoride from '../../utilities/assets/images/fluoride.png'
import cavity from '../../utilities/assets/images/cavity.png'
import whitening from '../../utilities/assets/images/whitening.png'

const OurServices = () => {
    return (
        <div>
            <div className="servicesTitle py-14">
                <p className='text-secondary font-semibold text-xl'>OUR SERVICES</p>
                <p className='text-4xl'>Services We Provide</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-5 max-w-[1280px] mx-auto'>
                <ServicesCard serviceImg={fluoride} serviceInfo='Fluoride Treatment'></ServicesCard>
                <ServicesCard serviceImg={cavity} serviceInfo='Cavity Filling'></ServicesCard>
                <ServicesCard serviceImg={whitening} serviceInfo='Teeth Whitening'></ServicesCard>
            </div>
        </div>
    );
};

export default OurServices;