import { format } from 'date-fns';
import React from 'react';

const ServiceModal = ({serviceInfo,selectedDate}) => {
    const {name,slots} = serviceInfo;

    let appointmentDetails;
    const handleAppointment = event =>{
        event.preventDefault();
        const date = event.target.date.value;
        const timeSlot = event.target.timeSlot.value;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const number = event.target.number.value;
        appointmentDetails = {date,timeSlot,name,email,number};
        console.log(appointmentDetails);
    }
    return (
        <div>
            <input type="checkbox" id="ServiceModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="ServiceModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>

                    <form onSubmit={handleAppointment} className='flex flex-col items-center gap-2 py-5'>
                    <input type="text" name='date' value={format(selectedDate, 'PP')} disabled className="input input-bordered w-full max-w-xs" />
                    <select className="select select-bordered w-full max-w-xs" name='timeSlot'>
                    {
                        slots?.map(slot=>
                                        <option value={slot}
                                        key={slot}
                                        >{slot}</option>)
                    }
                    </select>
                    <input type="text" placeholder="Name" name='name' className="input input-bordered w-full max-w-xs" />
                    <input type="email" placeholder="Email" name='email' className="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Phone Number" name='number' className="input input-bordered w-full max-w-xs" />
                    <input type="submit" value='Submit' className='btn btn-secondary text-white text-lg w-[320px]' />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default ServiceModal;