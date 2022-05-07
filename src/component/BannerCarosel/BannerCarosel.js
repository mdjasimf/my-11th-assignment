import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../banner/banner1.webp';
import banner2 from '../../banner/banner2.webp';
import banner3 from '../../banner/banner3.jpg';
import './BannerCarosel.css';

const BannerCarosel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className=" img-carosel d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className=" img-carosel d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="img-carosel d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default BannerCarosel;