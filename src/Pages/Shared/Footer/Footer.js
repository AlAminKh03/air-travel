import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear();
    return (
        <div className='text-center'>
            <p><small> &copy;Sisir Bindu Travel {year} </small></p>
        </div>
    );
};

export default Footer;