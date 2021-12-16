import React from "react";
import ItemCount from "./ItemCount"


const item = (props) => {
    const onAdd = (cantidad) => {
        console.log("Cantidad: " + cantidad);
    }


    return ( 
        <>
        <h3>ID:{props.item}</h3>
        <h3>Producto:{props.producto}</h3>
        <ItemCount stock="3" initial="1" onAdd={onAdd}/>
        </>
    )
}

export default item