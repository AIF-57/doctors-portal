import React from 'react';

const ReachUsCard = ({scheduleImg,scheduleInfo,scheduleTitle,bgClass}) => {
    return (
        <div>
        <div className={`card card-side shadow-xl ${bgClass} px-5 min-h-[190px] flex items-center`}>
        <figure><img src={scheduleImg} alt="scheduleImg"/></figure>
        <div className="card-body text-white w-full px-5 text-left">
          <h2 className="card-title">{scheduleTitle}</h2>
          <p>{scheduleInfo}</p>
        </div>
      </div>
        </div>
    );
};

export default ReachUsCard;