import logo from "../assets/reactluminoso.png";
import CartWidget from "../Componentes/CartWidget";

const NavBar = () => {
    return (
        <header>
            <h1>Compra tu HardWare</h1>
            <CartWidget/>
            <image src={logo}></image>
            {/* <nav>
                <a href="">link</a>
                <a href="">link</a>
                <a href="">link</a>
            </nav> */}
        </header>
    )
}

export default NavBar