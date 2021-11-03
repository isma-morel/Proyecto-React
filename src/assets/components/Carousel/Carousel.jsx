import React, { useState } from 'react'


export const Carousel = ({ item, src, description, name}) => {
    const [ keyClass ] = useState(`carousel carousel${item}`)

    return (
        <div className={keyClass}>
            <div className="carousel-img-container">
                <img src={src} alt="" className="img-carousel"/>
            </div>
            <div className="text-carousel">
                <h2 className="tittle-carousel">{name}</h2>
                <p className="p-carousel">{description}</p>
            </div>
        </div>
    )
}
