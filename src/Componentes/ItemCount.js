import { useState } from "react";





function ItemCount ({initial, stock, onAdd}) {
    let [contador, setcontador] = useState(0)



    const sumar = () => {
        if ({contador} === 0 && {contador} === {stock}) { 
            setcontador(contador+1) //Le paso como parametro contador + lo que quiero que aumente. Siempre se tiene que ejecutar primero la funcion.
            return contador
        }
    } 

    const restar = () => {
        if ({contador} == 1) {
            setcontador(contador+1)
            return contador
        
        }
    } 

    const onAdd = () => {
        console.log("Enviado al Carrito")
    }


    return (
        <>
            <p>contador: {contador}</p>
            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>Restar</button>
            <button onClick={onAdd}>Carrito</button>
        </>
    )
}

export default ItemCount