import { useEffect, useState } from "react"
import { ItemCount } from "../../ItemCount/ItemCount"
import { ItemList } from "../../ItemList/ItemList"

//LLAMO AL ARCHIVO JSON
let customData = require('../../../data/data.json');

export const ItemListContainer = ( greeting ) => {
    const [count, setCount] = useState( 1 );
    const [stock, setStock] = useState( 14 );
    //CREO STATE DONDE VOY A GUARDAR EL ARRAY DE OBJETOS
    //INDICO PRIMER VALOR COMO NULL PORQUE AL PRINCIPIO NO TENDRA NADA 
    //HASTA QUE LLEGUEN LOS DATOS
    const [products, setProducts] = useState(null);
    //USEEFFECT PARA QUE SE EJECUTE SOLO UNA VEZ CON SOLO UN RENDER
    //Y NO POR CADA RENDERIZACION
    useEffect(() => {
        //SIMULO FETCH CON PROMISE Y SETTIMEOUT DE 2 SEGUNDOS
        //CREO UNA CONST QUE GUARDA UNA PROMISE, CREO PROMISE CON NEW PROMISE Y COMO PARAM
        //LE PASO RESOLVE PORQUE NO UTLIZARE REJECT 
        const task = new Promise((resolve) => {
            //DECLARO EL SETTIMEOUT PARA SIMULAR CALLBACK DE DATOS
            setTimeout(() => {
                //INDICO QUE EL CALLBACK VA A TRAER COMO VALOR MI VARIABLE CUSTOMDATA
                //QUE TIENE COMO VALOR UN ARCHIVO JSON
                resolve(customData)
            }, 2000)
        })
        task //EL RESULTADO SE LO PASO A SETPRODUCTS, PERO SOLO LE PASO EL ARRAY
            .then((result) => {
                setProducts(result.customData)
                //MUESTRO EN CONSOLA PARA VERIFICAR
                console.log(result)
            })
    }, []) //Array vacio, indico que se ejecute solo una vez al renderizar

    const onAdd = () => {
        if(stock > 0) {
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
    //PRIMERA SECTION PARA DESAFIO CONTADOR
    //SEGUNDA SECTION PARA DESAFIO LISTA DE ITEMS SIMULANDO METODO FETCH
    return(
        <>
            
            <section className="product-section container">
                <div className="itemlista-container">
                    <h1 className="product-tittle" onClick={greeting.click}>Producto {greeting.num}</h1>
                    <ItemCount stock={stock} initial={count} decrease={onDecrease} add={onAdd}/>
                </div>
            </section>
            <ItemList data={products}/>
        </>
    )
}