import chair from '../../utilities/assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import bg from '../../utilities/assets/images/bg.png'


const SelectSchedule = ({selectedDate,setSelectedDate}) => {

    return (
        <div>
            <div className="hero h-[700px] bg-base-100" style={{background:`url(${bg})`,position:'center',backgroundSize:'cover'}}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="scheduleImg w-1/2">
                    <img src={chair} alt='chair' className="rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <DayPicker
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    >
                    </DayPicker>
                </div>
                </div>
            </div>
        </div>
    );
};

export default SelectSchedule;