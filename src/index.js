//1) Necesitamos la variable React en scope
import React from “react”

//2) Necesitamos la variable ReactDOM en scope
import ReactDOM from “react-dom”

//3) Necesitamos una aplicacion de React
//const App = () => “Hola mundo”
/* function App () {
    return "Hola mundo"
} */
import App from "./App"


//4) Necesitamos dibujar la aplicacion en el DOM
ReactDOM.render( <App/> ,document.getElementById("root"))