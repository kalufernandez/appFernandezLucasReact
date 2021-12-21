import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


    
function ItemDetailContainer(){
    const products= JSON.parse(localStorage.getItem("listProduct"));
    const {id}=useParams(); 
   
    return(
        <ItemDetail e={products.find(e=>e.id === id.toString())}/>
    )
}

export default ItemDetailContainer;