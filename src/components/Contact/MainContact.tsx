import React from 'react';
import InputContact from './InputContact';
import DesignContact from './DesignContact';

const MainContact = () => {
    return (
        <div className='antialiased'>
            <div className='flex w-full justify-center items-center'>
                <div className='bg-success-content w-full max-w-4xl md:p-4 rounded-xl shadow-lg flex flex-col space-y-2 md:flex-row md:space-x-6 md:space-y-0 sm:p-12 overflow-hidden'>
                    <DesignContact />
                    <InputContact />
                </div>
            </div>
        </div>
    );
};

export default MainContact;