import React from 'react';
import InputContact from './InputContact';
import DesignContact from './DesignContact';

const MainContact = () => {
    return (
        <div className='antialiased'>
            <div className='flex w-full min-h-screen justify-center items-center'>
                    <div className='bg-error-content w-full max-w-4xl p-8 rounded-xl shadow-lg text-success flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0 sm:p-12 overflow-hidden'>
                        <InputContact/>
                        <DesignContact/>
                    </div>
            </div>
        </div>
    );
};

export default MainContact;