import React from 'react';

const ServicesCard = ({serviceImg,serviceInfo}) => {
    return (
        <div>
        <div className="card bg-base-100 shadow-xl pt-5">
        <figure><img src={serviceImg} alt="Service" /></figure>
        <div className="card-body items-center">
          <h2 className="card-title">{serviceInfo}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
        </div>
    );
};

export default ServicesCard;