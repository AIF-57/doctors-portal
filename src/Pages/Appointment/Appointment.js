import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Services from './Services';
import SelectSchedule from './SelectSchedule';


const Appointment = () => {
    const [selectedDate,setSelectedDate] = useState(new Date());
    return (
        <div>
            <SelectSchedule
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            ></SelectSchedule>
            <Services
            selectedDate={selectedDate}
            ></Services>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;