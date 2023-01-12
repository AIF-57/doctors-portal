import React from 'react';
import appointment from '../../utilities/assets/images/appointment.png'
import doctor from '../../utilities/assets/images/doctor.png'
import PrimaryBtn from '../Shared/PrimaryBtn/PrimaryBtn';

const Appointment = () => {
    return (
        <div>
        <div className="hero min-h-[80vh] flex justify-center items-end overflow-hidden">
            <div className="hero-content flex-col lg:flex-row h-[533px]" style={{background:`url(${appointment})`,position:'center',backgroundSize:'contain'}}>
                <div className="appointmentImg w-1/2 hidden lg:block">
                    <img src={doctor} alt='Doctor' className="max-w-[150%] ml-[-200px]"/>
                </div>
                <div className='text-white w-1/2 text-left px-5'>
                    <p className='text-primary text-xl py-6'>Appointment</p>
                    <h1 className="text-4xl font-bold">Make an appointment Today</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryBtn></PrimaryBtn>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Appointment;