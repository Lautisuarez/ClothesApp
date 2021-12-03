import "./NavBar.css"
// Components
import CartWidget from '../../components/CartWidget/CartWidget';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <ul className="nav">
                <li><Link to={`/`}>Inicio</Link></li>
                <li><Link to={`/category/1`}>Calzado</Link></li>
                <li><Link to={`/category/0`}>Remera</Link></li>
                <li><Link to={`/category/2`}>Pantalon</Link></li>
                <li id="carro"><CartWidget /></li>
            </ul>
        </nav>
    );
}

export default NavBar;