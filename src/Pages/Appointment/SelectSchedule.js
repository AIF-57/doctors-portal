import React from 'react';
import chair from '../../utilities/assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const SelectSchedule = () => {
    
    return (
        <div>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="scheduleImg w-1/2">
                    <img src={chair} alt='chair' className="rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <DayPicker></DayPicker>
                </div>
                </div>
            </div>
        </div>
    );
};

export default SelectSchedule;