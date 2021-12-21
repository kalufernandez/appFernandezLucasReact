import ItemList from './ItemList'
import { useState, useEffect } from 'react';


function ItemListContainer() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
     
    
    useEffect(() => {
      fetch("./productos.json")
        .then(res => res.json())
        .then(
          (result) => {            
              setIsLoaded(true);
              setItems(result);            
          },
         
          (error) => {            
              setIsLoaded(true);
              setError(error);            
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      localStorage.setItem("listProduct", JSON.stringify(items));
      return (
        <ItemList productos={items.slice(0)}/>
      );
    }
  }
export default ItemListContainer;
