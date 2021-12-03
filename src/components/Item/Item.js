import "./Item.css"
import React from "react"
// Components
import { Link } from "react-router-dom";

const Item = ({src, title, price, id}) => {

    return (
        <article className="item">
            <img src={src} alt={title} />
            <h2>{title}</h2>
            <p>${price}</p>
            <Link to={`/item/${id}`} className="btn">Ver más</Link>
        </article>
    )
}

export default Item;