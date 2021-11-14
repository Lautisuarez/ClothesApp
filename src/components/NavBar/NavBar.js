import "./NavBar.css"

import { Fragment } from "react";

const NavBar = () => {
    return (
        <Fragment>
            <nav>
                <ul className="nav">
                    <li><a href="./index.html">Inicio</a></li>
                    <li><a href="./index.html">Calzado</a></li>
                    <li><a href="./index.html">Campera</a></li>
                    <li><a href="./index.html">Pantalon</a></li>
                    <li><a href="./index.html">Accesorios</a></li>
                </ul>
            </nav>
        </Fragment>
    );
}

export default NavBar;