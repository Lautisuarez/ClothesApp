import "./ItemDetail.css"
// Bootstrap react
import { Button, Card } from "react-bootstrap";
//Components
import ItemCount from "../../components/ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";

const ItemDetail = ({products}) => {
    const [textButton, setTextButton] = useState('Comprar')
    const [flag, setFlag] = useState(true)
    const onAdd = () => {
        setFlag(false)
        setTextButton('Confirmar compra')
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={products.src} />
            <Card.Body>
                <Card.Title>{products.title}</Card.Title>
                <Card.Text>
                    {products.description}
                </Card.Text>
                <h3>${products.price}</h3>
                <ItemCount 
                    stock={products.stock} 
                    initial={products.initial} 
                />
                {flag ? <Button onClick={onAdd} className="btn">{textButton}</Button> : <Link className='btn' to={'/cart'}>{textButton}</Link>}
                
            </Card.Body>
        </Card>
    )
}

export default ItemDetail;
