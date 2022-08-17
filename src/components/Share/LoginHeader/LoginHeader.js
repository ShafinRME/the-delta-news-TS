import Link from 'next/link';
import React from 'react';

const LoginHeader = () => {
    return (
        <div className="navbar bg-base-100 shadow">
            <Link href='/'>
                <p className='text-3xl italic hover:cursor-pointer text-gray-500  mx-auto'>The Delta Times</p>
            </Link>
        </div>
    );
};

export default LoginHeader;