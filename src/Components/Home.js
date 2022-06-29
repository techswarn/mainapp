import React, { Fragment } from 'react';

import Hotel from './Hotel/Hotels';


import hero from "./img/hero-img3.jpg"

export default function Home() {
    return (
        <Fragment>
                <div className="section-main">
                <div className="main">
                    <div className="hero-text-box">
                        <h1 className="heading-primary">
                            Travel | Food && stays
                        </h1>
                        <p className="main-description">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, facilis.
                        </p>
                    </div>
                    <div className="main-img-box">
                        <div className="image-stack">
                            <div className="image-stack__item image-stack__item-top ">
                            <picture>
                                <img src={hero} alt="my image" className="main-img"/>    
                            </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="head">
                <h2 className="heading">Our partnerd stays</h2>
            </div>
            <Hotel/>

        </Fragment>


    )
}
