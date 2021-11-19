import "./NavBar.css"
import CartWidget from '../../components/CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav>
            <ul className="nav">
                <li><a href="./index.html">Inicio</a></li>
                <li><a href="./index.html">Calzado</a></li>
                <li><a href="./index.html">Campera</a></li>
                <li><a href="./index.html">Pantalon</a></li>
                <li><a href="./index.html">Accesorios</a></li>
                <li id="carro"><CartWidget /></li>
            </ul>
        </nav>
    );
}

export default NavBar;