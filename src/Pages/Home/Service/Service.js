import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Service.css"

const Service = ({ service }) => {
    const { id, name, description, picture } = service;
    const navigate = useNavigate()

    const navigateButton = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service-container'>
            <img className='w-100' src={picture} alt="" />
            <h3>{name}</h3>
            <p className='p-2'>{description}</p>
            <button onClick={() => navigateButton(id)} className='btn btn-primary'>Get Service</button>
        </div>
    );
};

export default Service;