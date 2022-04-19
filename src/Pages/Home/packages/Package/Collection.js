import React from 'react';

const Collection = ({ collection }) => {
    const { name, description, price, img } = collection
    return (
        <div>
            <div className='g-5 col-lg-4'>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p>Price:{price}/Per Day</p>
                        <p className="card-text">{description}</p>
                        <a href="#" className="btn btn-primary">Let's Go</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collection;