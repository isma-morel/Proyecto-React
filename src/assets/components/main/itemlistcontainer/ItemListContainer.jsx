import { useState } from "react"
import { ItemCount } from "./itemcount/ItemCount"

export const ItemListContainer = ( greeting ) => {
    const [count, setCount] = useState( 1 );
    const [stock, setStock] = useState( 10 );
    const onAdd = () => {
        if(stock > 1) {
            setCount(count + 1)
            setStock(stock -1)
        }
        
    }
    const onDecrease = () => {
        if(count > 1){
            setCount(count - 1) 
            setStock(stock + 1)
        }
    }
    return(
        <section className="product-section container">
            <div className="itemlista-container">
                <h1 className="product-tittle" onClick={greeting.click}>Producto {greeting.num}</h1>
                <ItemCount stock={stock} initial={count} decrease={onDecrease} add={onAdd}/>
            </div>
        </section>
    )
}