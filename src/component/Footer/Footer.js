import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='h-100 p-5 bg-dark mt-5'>
            <p className='text-primary text-center'>copyright&copy;All Rights Reserved.{year}</p>
        </div>
    );
};

export default Footer;