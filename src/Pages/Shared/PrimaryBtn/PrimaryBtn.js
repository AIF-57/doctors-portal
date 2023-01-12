import React from 'react';

const PrimaryBtn = ({children}) => {
    return (
        <div>
        <button className="btn bg-gradient-to-r from-secondary to-primary text-white border-none min-w-[120px]">{children}</button>
        </div>
    );
};

export default PrimaryBtn;