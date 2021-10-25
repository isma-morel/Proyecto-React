export const ItemCount = ( props ) => {
    return (
        <>
            <h2 className="name-product">Reloj Rojo</h2>
            <h3 className="stock">Stock: {props.stock}</h3>
            <div className="d-flex container-btns">
                <button className="btn-add" onClick={props.add}><span>+</span></button> 
                <span className="initial">{props.initial}</span> 
                <button className="btn-decrease" onClick={props.decrease}><span>-</span></button>
            </div>
            <button className="btn-cart d-block"><span>Añadir al carrito</span></button>
        </>
    )
}