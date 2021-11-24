import "./Item.css"
// Components
import ItemCount from "../ItemCount/ItemCount";

const Item = ({src, title, price, stock}) => {
    // Mostramos el articulo con sus respectivas caracteristicas
    return (
        <article className="item">
            <img src={src} alt={title} />
            <h2>{title}</h2>
            <p>${price}</p>
            <ItemCount stock={stock}/> {/* Le enviamos al contador el stock disponible para que no se exceda en la compra */}
            <button>Comprar</button>
        </article>
    )
}

export default Item;