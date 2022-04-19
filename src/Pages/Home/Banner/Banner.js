import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from "../../../../src/picture/banner/iland(2).jpg";
import banner2 from "../../../../src/picture/banner/plane.jpg";
import banner3 from "../../../../src/picture/banner/work.jpg";
import "./Banner.css"


const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='carousel-header'>Plan a Vaction in Exotic place</h3>
                    <p className='carousel-description'>Be relax , comfort yourself in sea with a fresh coconut and be stress free.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Dream Comes True</h3>
                    <p>Fly off in your dream city.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Work Abroad</h3>
                    <p>
                        Be a Remitance worrior and become a sheild of your family
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;