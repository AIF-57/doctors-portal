import React from 'react';
import ServicesCard from './ServicesCard';
import fluoride from '../../utilities/assets/images/fluoride.png'
import cavity from '../../utilities/assets/images/cavity.png'
import whitening from '../../utilities/assets/images/whitening.png'

const OurServices = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-5 max-w-[1280px] mx-auto'>
            <ServicesCard serviceImg={fluoride} serviceInfo='Fluoride Treatment'></ServicesCard>
            <ServicesCard serviceImg={cavity} serviceInfo='Cavity Filling'></ServicesCard>
            <ServicesCard serviceImg={whitening} serviceInfo='Teeth Whitening'></ServicesCard>
        </div>
    );
};

export default OurServices;