import React from 'react';
import { Carousel } from 'react-bootstrap';

import './banner.css';
const Banner = () => {
    return (
        <div>
            <Carousel >
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-img h-50"
                        src="https://i.ibb.co/Nngg72g/Bangok-Temple-1.jpg"
                        alt="Bangkok"
                    />
                    <Carousel.Caption>
                        <h3> Bangkok</h3>
                        <p>visit Bangkok with lower price.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid h-50"
                        src='https://i.ibb.co/wNBm2VD/Pattaya-Beach-Photo-1.jpg'
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>australia</h3>
                        <p>Visit Australia with lower cost</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider-img h-50"
                        src="https://i.ibb.co/sK10xTs/Australia-1.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Canada</h3>
                        <p>visit canada with lower cost</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;