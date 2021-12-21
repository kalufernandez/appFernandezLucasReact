import CartItem from "./CartItem";
import { Table } from "react-bootstrap";
import { useState, useEffect } from "react";



function CartItemContainer(){
    const [carrito, setCarrito]= useState([]);
    
    
    useEffect(() => {
        setCarrito(JSON.parse(localStorage.getItem("carrito")));
    }, []);
    
    let total=0;
    carrito.map(e=>{return total+=(e.precio*e.cantidad)})
    return(       
        <div className="tableContainer container">
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Producto</th>
                    <th>Total</th> 
                    <th>Quitar</th>               
                </tr>
            </thead>
            <tbody>
                {carrito.map(e =><CartItem key= {e.id} itemCarrito={e}/>)}
                <tr>
                    <td colSpan={2}>Totales</td>
                    <td colSpan={2}>{total}</td>
                </tr>
            </tbody>           

            </Table>
        </div>   
   )
}

export default CartItemContainer;