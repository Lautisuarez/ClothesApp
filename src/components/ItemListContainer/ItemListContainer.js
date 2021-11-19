import "./ItemListContainer.css"

const ItemListContainer = ({ src, title, price }) => {
    return(
        <article className="item">
            <img src={src} alt="" />
            <h2>{title}</h2>
            <p>${price}</p>
            <button>Comprar</button>
        </article>
    )
}

export default ItemListContainer;