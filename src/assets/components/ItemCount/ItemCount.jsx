import React, { useState } from 'react'



export const ItemCount = () => {
    const [count, setCount] = useState( 1 );  //count
    const [stock, setStock] = useState(14); //stock
    //Function Add
    const onAdd = () => {
        if(stock > 0) {
            setCount(count + 1)
            setStock(stock -1)
        }
        
    }
    //Function decrease
    const onDecrease = () => {
        if(count > 1){
            setCount(count - 1) 
            setStock(stock + 1)
        }
    }
    return (
        <>
            <h3 className="stock">Stock: {stock}</h3>
            <div className="d-flex container-btns">
                <button className="btn-add" onClick={onAdd}><span>+</span></button> 
                <span className="initial">{count}</span> 
                <button className="btn-decrease" onClick={onDecrease}><span>-</span></button>
            </div>
            <button className="btn-cart d-block"><span>Añadir al carrito</span></button>
        </>
    )
}