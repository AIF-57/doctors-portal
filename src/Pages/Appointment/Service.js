import React from 'react';

const Service = ({serviceDetail,setServiceInfo}) => {
    const {name,slots} = serviceDetail;
    return (
        <div>
            <div className="card border border-gray-200">
                    <div className="card-body gird grid-cols-1 justify-center">
                    <h2 className="text-secondary text-xl font-semibold">{name}</h2>
                    <p>{slots.length > 0 ? slots[0] : <span>not available</span>}</p>
                    <p>{slots.length} {slots.length > 1 ? 'slots available' : 'slot available'}</p>
                    <div className="">
                        <label htmlFor="ServiceModal" 
                            disabled = {slots.length === 0}
                            onClick={()=>setServiceInfo(serviceDetail)}
                            className="btn btn-secondary text-white"
                        >Book Appointment
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;