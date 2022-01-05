import "./NavBar.css"
// Components
import CartWidget from '../../components/CartWidget/CartWidget';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <ul className="nav">
                <li><Link to={`/`}>Inicio</Link></li>
                <li><Link to={`/category/3`}>Calzado</Link></li>
                <li><Link to={`/category/2`}>Remera</Link></li>
                <li><Link to={`/category/4`}>Pantalon</Link></li>
                <li><Link to={`/category/5`}>Abrigos</Link></li>
                <li id="carro"><Link to={"/cart"} style={{display: 'flex', alignItems: 'center', columnGap: '.5rem'}}><CartWidget /></Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;