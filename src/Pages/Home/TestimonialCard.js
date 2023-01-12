import React from 'react';

const TestimonialCard = ({patientData}) => {
    console.log(patientData)
    return (
        <div>
        <div className="card lg:card-side bg-base-100 shadow-xl grid grid-cols-3 p-5 text-left">
        <p className='col-span-3'>{patientData.quote}</p>
        <figure><img src={patientData.image} alt="Album" className='w-[64px] h-[64px] border-4 border-secondary rounded-full'/></figure>
        <div className="card-body text-left col-span-2">
          <h2 className="card-title">{patientData.name}</h2>
          <p>{patientData.address}</p>
        </div>
      </div>
        </div>
    );
};

export default TestimonialCard;