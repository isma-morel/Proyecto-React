export const Item = ({id, src, name, price, stock}) => {
    return (
        <div key={id} className="item-brand">
            <div className="img-container">
                <img src={src} alt=""/>
            </div>
            <div className="text-container">
                <h3>{name}</h3>
                <p>{price}</p>
                <h4>{stock}</h4>
            </div>
        </div>
    )
}