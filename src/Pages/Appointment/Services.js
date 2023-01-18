import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Service from './Service';
import ServiceModal from './ServiceModal';


const Services = ({selectedDate}) => {
    const [services,setServices] = useState([]);
    const [serviceInfo,setServiceInfo] = useState({});
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data));    
    },[])
    console.log(services)

    return (
        <div className='min-h-[70vh]'>
            <div className="title my-14">
                <p className='text-[22px] text-secondary font-semibold'>Available Services on {format(selectedDate, 'PP')}.</p>;
                <p className='text-[22px] text-accent'>Please select a service.</p>
            </div>
            <div className="serviceContainer grid grid-cols-1 lg:grid-cols-3 mx-auto items-center gap-x-5 gap-y-8 max-w-[1280px]">
                {
                    services.map(serviceDetail => <Service
                            key={serviceDetail._id}
                            serviceDetail={serviceDetail}
                            setServiceInfo={setServiceInfo}
                        ></Service>)
                }
                {serviceInfo && 
                    <ServiceModal 
                    serviceInfo={serviceInfo}
                    selectedDate={selectedDate}
                    ></ServiceModal>}
            </div>
        </div>
    );
};

export default Services;