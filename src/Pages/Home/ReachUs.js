import React from 'react';
import clock from '../../utilities/assets/icons/clock.svg'
import marker from '../../utilities/assets/icons/marker.svg'
import phone from '../../utilities/assets/icons/phone.svg'
import ReachUsCard from './ReachUsCard';


const ReachUs = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-5 px-5 mb-52 max-w-[1280px] mx-auto'>
            <ReachUsCard bgClass='bg-gradient-to-r from-secondary to-primary' scheduleTitle='Opening Hours' scheduleImg={clock}></ReachUsCard>
            <ReachUsCard bgClass='bg-accent' scheduleTitle='Visit our location' scheduleInfo='Brooklyn, NY 10036, United States' scheduleImg={marker}></ReachUsCard>
            <ReachUsCard bgClass='bg-gradient-to-r from-secondary to-primary' scheduleTitle='Contact us now' scheduleInfo='+000 123 456789' scheduleImg={phone}></ReachUsCard>
        </div>
    );
};

export default ReachUs;