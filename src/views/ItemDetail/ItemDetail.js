import "./ItemDetail.css"
// Bootstrap react
import { Card } from "react-bootstrap";
//Components
import ItemCount from "../../components/ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({products}) => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={products.src} />
            <Card.Body>
                <Card.Title>{products.title}</Card.Title>
                <Card.Text>
                    {products.description}
                    <h3>${products.price}</h3>
                </Card.Text>
                <ItemCount stock={products.stock} initial={products.initial} />
                <Link to={`/cart`} className="btn">Comprar</Link>
            </Card.Body>
        </Card>
    )
}

export default ItemDetail;
