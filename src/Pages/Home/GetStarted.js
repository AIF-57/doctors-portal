import React from 'react';
import treatment from '../../utilities/assets/images/treatment.png'
import PrimaryBtn from '../Shared/PrimaryBtn/PrimaryBtn';

const GetStarted = () => {
    return (
        <div>
        <div className="hero h-[800px] bg-base-100">
            <div className="hero-content flex-col lg:flex-row gap-x-20">
            <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" alt='treatment'/>
            <div className='w-1/3 text-left'>
                <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <PrimaryBtn>GET STARTED</PrimaryBtn>
            </div>
            </div>
        </div>
        </div>
    );
};

export default GetStarted;