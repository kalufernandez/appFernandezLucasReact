import NavBar from "./Componentes/NavBar"
import ItemListContainer from "./Componentes/ItemListContainer";
import "./scss/app.scss"


function App () {
    return (
        <>
            <NavBar />
            <ItemListContainer greetings="Bienvenidos"/>
            <main>Mi main</main>
        </>
    )
}

export default App