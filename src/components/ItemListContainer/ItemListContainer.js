import "./ItemListContainer.css"
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({ src, title, price, stock }) => {
    return(
        <article className="item">
            <img src={src} alt="" />
            <h2>{title}</h2>
            <p>${price}</p>
            <ItemCount stock={stock}/>
            <button>Comprar</button>
        </article>
    )
}

export default ItemListContainer;