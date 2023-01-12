import React from 'react';
import appointment from '../../utilities/assets/images/appointment.png'
import doctor from '../../utilities/assets/images/doctor.png'
import PrimaryBtn from '../Shared/PrimaryBtn/PrimaryBtn';

const Appointment = () => {
    return (
        <div className='h-[700px] flex items-end overflow-hidden'>
            <div className="hero bg-base-200 h-[533px]" style={{background:`url(${appointment})`,backgroundSize:'cover',backgroundPosition:'center'}}>
                <div className="hero-content flex h-[533px]">
                    <div className="appointmentImg w-1/2 hidden lg:block">
                        <img src={doctor} alt='doctor' className="max-w-[150%] ml-[-200px]" />
                    </div>
                    <div className='text-white w-1/2 text-left font-semibold'>
                        <p className='text-secondary py-6 font-semibold text-xl'>Appointment</p>
                        <h1 className="text-4xl font-bold">Make an appointment Today</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryBtn>GET STARTED</PrimaryBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;