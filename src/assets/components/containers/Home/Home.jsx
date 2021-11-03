import { CarouselContainer } from '../CarouselContainer/CarouselContainer';
import { ItemListContainer } from '../ItemListContainer/ItemListContainer';
import { useEffect, useState } from "react";
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer';
const customData = require('../../../data/data.json');



export const Home = () => {
        const [products, setProducts] = useState(null);
    useEffect(() => {

        const task = new Promise((resolve) => {

            setTimeout(() => {
                resolve(customData)
            }, 2000)
        })
        task 
            .then((result) => {
                setProducts(result.customData)
                console.log(result)
            })
    }, []) //Execute one time

    return (
        <>
            <CarouselContainer/>
            <ItemListContainer products={products} />
            <ItemDetailContainer products={products}/>
        </>
    )
}