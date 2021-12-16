import React from "react"

const ItemListContainer = (props) => {
    const productsItems = [
        {id: 1, name: `Placa de Video`, stock: 4},
        {id: 2, name: `Fuente para WS`, stock: 4},
        {id: 3, name: `Cabezales`, stock: 4},
        {id: 4, name: `Monitor 24 pulgadas`, stock: 4}
    ]
    
    const [list, setlist] = useState([])
    
    useEffect ( () => {
        setTimeout( () => {
            setlist(productsItems)
        },3000)
    },[])
    
        return (
            <>
            <Itemlist products={productsItems}/>
            </>

    )
}

export default ItemListContainer





