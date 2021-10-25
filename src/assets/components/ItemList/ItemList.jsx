import { Item } from "../Item/Item";

export const ItemList = ({data}) => {
    return (
        <>
            <section className="item-list-container d-flex">
                {data && data.map(({id, src, name, price, stock}) => {
                    return <Item key={id} src={src} name={name} price={price} stock={stock}></Item>
                })}
            </section>
        </>
    )
}