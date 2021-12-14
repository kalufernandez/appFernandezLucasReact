
import NavBar from "./Componentes/NavBar"
import ItemListContainer from "./Componentes/ItemListContainer";
import ItemCount from "./Componentes/ItemCount";
import "./scss/app.scss"


function App () {
    


    return (
        <>
            <NavBar />
            <ItemListContainer greetings="Bienvenidos"/>
            <main>Mi main</main>
            <ItemCount stock={5} initial={1} onAdd/>
        </>
    )
}

export default App