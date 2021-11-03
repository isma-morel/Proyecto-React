import { ItemDetail } from '../../ItemDetail/ItemDetail';

export const ItemDetailContainer = ({products}) => {
    
    return (
        <section>
            {products && products.map(({ id, src, name, price, stock }) => {
                return <ItemDetail key={id} src={src} name={name} price={price} stock={stock} />
            })}
        </section>
    )
}
