import "./Item.css"
import React from "react"
// Components
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import { Button } from "react-bootstrap";

const Item = ({src, title, price}) => {
    const [modalShow, setModalShow] = React.useState(false);

    // Mostramos el articulo con sus respectivas caracteristicas
    return (
        <article className="item">
            <img src={src} alt={title} />
            <h2>{title}</h2>
            <p>${price}</p>
            <Button onClick={() => setModalShow(true)}>
                Ver más
            </Button>
            <ItemDetailContainer
                title={title}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </article>
    )
}

export default Item;