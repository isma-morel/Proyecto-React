import { useEffect, useState } from "react"
import { Carousel } from "../../Carousel/Carousel";

const carouselData = require('../../../data/carousel.json')

export const CarouselContainer = () => {
    const [carouselItem, setCarouselItem] = useState(null);
    useEffect(() => {
        const task = new Promise((resolve) => {
            resolve(carouselData)
        })
        task.then(data => setCarouselItem(data))
    }, [])
    console.log(carouselItem)
    return (
        <section className="carousel-container">
            {carouselItem && carouselItem.map(({ item, name, src, description}) => {
                return <Carousel key={item} src={src} description={description} name={name} item={item}/>
            })}
        </section>
    )
}
