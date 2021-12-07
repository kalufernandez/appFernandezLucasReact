import logo from "../reactluminoso.png";

const NavBar = () => {
    return (
        <header>
            <h1>Compra tu HardWare</h1>
            <span className="material-icons">
                lightbulb
            </span>
            <image src={logo}></image>
            <nav>
                <a href="">link</a>
                <a href="">link</a>
                <a href="">link</a>
            </nav>
        </header>
    )
}

export default NavBar