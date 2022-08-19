import React from 'react';
import ContactImg from '../../Assets/images/contact/contact-1.png'
import { IoIosCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { ImLocation2 } from 'react-icons/im';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';

const DesignContact = () => {
    return (
        <div className='relative'>

        <div className='absolute z-0 w-40 h-40 bg-primary-content rounded-full -right-36 -top-32'></div>

        <div className='absolute z-0 w-40 h-40 bg-primary-content rounded-full -right-36 -bottom-32'></div>

        <div className='flex flex-col justify-between'>
        <div>
            <h1 className="font-bold text-4xl tracking-wide">Let&apos;s <span className="text-primary-content">talk!</span></h1>
            <p className='pt-2 text-success text-sm'>We will be with you 24/7 in your need. Feel Free to contact.</p>
        </div>
        <div>
            <img src={ContactImg} height='340' width='400' alt=''/>
        </div>
        <div className='flex flex-col space-y-2 pb-4'>
            <div className='inline-flex space-x-2 items-center'>
                <span className='text-primary-content'><IoIosCall /></span><span>+880 121 1211212</span>
            </div>
            <div className='inline-flex space-x-2 items-center'>
                <span className='text-primary-content'><MdEmail /></span><span>teamdelta0001@gmail.com</span>
            </div>
            <div className='inline-flex space-x-2 items-center'>
                <span className='text-primary-content'><ImLocation2 /></span><span>We Work Remotely</span>
            </div>
        </div>
        <div className='flex space-x-4 text-2xl'>
            <a href="#" className='hover:text-primary-content'><BsFacebook /></a>
            <a href="#" className='hover:text-primary-content'><AiFillTwitterCircle /></a>
            <a href="#" className='hover:text-primary-content'><AiOutlineInstagram /></a>
        </div>
    </div>
    </div>
);
};

export default DesignContact;