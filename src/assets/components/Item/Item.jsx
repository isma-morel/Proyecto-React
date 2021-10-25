//COMPONENTE DE PRESENTACION DE CADA PRODUCTO
export const Item = ({id, src, name, price, stock}) => {
    return (
        <div key={id} className="item-brand">
            <div className="img-container">
                <img src={src} alt=""/>
                <button className="item-hover"><span>View More</span></button>
            </div>
            <div className="text-container">
                <h3>{name}</h3>
                <p>$<span>{price}</span></p>
                <h4>{stock} <span>In Stock</span></h4>
            </div>
        </div>
    )
}