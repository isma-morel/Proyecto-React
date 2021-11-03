import { Item } from "../Item/Item";
//PRODUCTS QUE VIENE DE LIST CONTAINER SE LA ASIGNO A UN METODO DE ARRAYS
//products.map() QUE LLEVA UNA ARROW FUNCTION
//QUE RENDERIZA MI COMPONENTE ITEM CON TODOS LOS DATOS DE CADA PRODUCTO

export const ItemList = ({ products }) => {
    return (
        <>
            <section className="section-catalogo">
                <h2 className="catalogo-tittle">Our Watches</h2>
                <div className="catalogo-container d-flex">
                    {products && products.map(({ id, src, name, price }) => {
                        return <Item key={id} src={src} name={name} price={price}></Item>
                    })}
                </div>
            </section>
        </> //EN PRODUCTS && PRODUCTS.MAP
        //ESTOY INDICANDO QUE SI PRODUCTS ES FALSY QUE NO RENDERICE
        //PRODUCTS.MAP, SI PRODUCTS ES TRUESY SE EJECUTARA EL products.map()
        //POR LO TANTO HABRA UN RENDER DEL CATALOGO
    );
};
