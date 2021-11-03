export const ItemDetail = ({ id, src, name, price, stock }) => {
    return (
        <>
            <div key={id} className="d-flex">
                <div>
                    <img src={src} alt="" className="w-100"/>
                </div>
                <div>
                    <h2>{name}</h2>
                    <p>{price}</p>
                    <p>Stock: {stock}</p>
                </div>
            </div>
        </>
    )
}