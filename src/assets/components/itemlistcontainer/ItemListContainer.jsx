export const ItemListContainer = (greeting) => {
    return(
        <section className="product-section">
            <div className="itemlista-container">
                <p className="product-tittle" onClick={greeting.click}>Producto {greeting.num}</p>
            </div>
        </section>
    )
}