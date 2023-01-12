import React from 'react';
import quote from '../../utilities/assets/icons/quote.svg'
import patientImg from '../../utilities/assets/images/people1.png'
import patientImg2 from '../../utilities/assets/images/people2.png'
import TestimonialCard from './TestimonialCard';


const patientsData = [
    {
        name:'Winson Herry',
        address:'California',
        image:patientImg,
        quote:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
    },
    {
        name:'Winson Herry',
        address:'California',
        image:patientImg,
        quote:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
    },
    {
        name:'Winson Herry',
        address:'California',
        image:patientImg,
        quote:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
    },
]
const Testimonial = () => {
    return (
        <div className='px-5 py-20 max-w-[1280px] mx-auto'>
            <div className="testimonialTitleArea flex justify-between">
                <div className="testimonialTitle text-left">
                    <p className='text-primary text-xl'>Testimonial</p>
                    <p className='text-4xl'>What Our Patients Says</p>    
                </div>
                <div className="quoteImg">
                    <img src={quote} alt="quote" className='w-[192px] h-[156px]'/>
                </div>
            </div>
            <div className="testimonials grid grid-cols-3 gap-5 py-5">
                {
                    patientsData.map(patientData => <TestimonialCard patientData={patientData}></TestimonialCard>)
                }
            </div>
        </div>
    );
};

export default Testimonial;