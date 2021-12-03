import "./ItemDetail.css"
// Bootstrap react
import { Card } from "react-bootstrap";
//Components
import ItemCount from "../../components/ItemCount/ItemCount";

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
                <a href="/" className="btn">Comprar</a>
            </Card.Body>
        </Card>
    )
}

export default ItemDetail;
