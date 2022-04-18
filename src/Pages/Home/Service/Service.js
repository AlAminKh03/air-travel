import React from 'react';

const Service = ({ service }) => {
    const { name, description, picture } = service;
    return (
        <div>
            <img className='w-100' src={picture} alt="" />
            <h3>{name}</h3>
            <p>{description}</p>
            <button>Get Service</button>
        </div>
    );
};

export default Service;