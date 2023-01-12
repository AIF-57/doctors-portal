import React from 'react';
import heroImg from '../../utilities/assets/images/chair.png'
import PrimaryBtn from '../Shared/PrimaryBtn/PrimaryBtn';
import bg from '../../utilities/assets/images/bg.png'

const HeroArea = () => {
    return (
        <div>
        <div className="hero h-[700px] bg-base-100" style={{background:`url(${bg})`,position:'center',backgroundSize:'cover'}}>
        <div className="hero-content flex-col lg:flex-row-reverse gap-x-6">
          <div className="imageArea w-1/2">
            <img src={heroImg} className="rounded-lg shadow-2xl" alt='HeroImage' />
          </div>
          <div className='text-left w-1/2'>
            <h1 className="text-[45px] font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <PrimaryBtn>GET STARTED</PrimaryBtn>
          </div>
        </div>
      </div>
        </div>
    );
};

export default HeroArea;