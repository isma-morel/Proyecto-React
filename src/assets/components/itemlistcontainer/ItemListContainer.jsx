export const ItemListContainer = (greeting) => {
    return(
        <section className="product-section">
            <div className="itemlista-container">
                <h1 className="product-tittle" onClick={greeting.click}>Producto {greeting.num}</h1>
            </div>
        </section>
    )
}