import "./ItemDetail.css"
import { useContext, useState } from "react";
// Bootstrap react
import { Button, Card } from "react-bootstrap";
//Components
import ItemCount from "../../components/ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../components/CartContext/CartContext";

const ItemDetail = ({products}) => {
    // Estado del item
    const [item, setItem] = useContext(CartContext)
    const addItem = (e) => {
        const cant = e.target.parentElement.childNodes[3].childNodes[1].value;
        let exists = true
        item.forEach(i => {
            if(i.title === products.title){
                i.quantity += Number(cant)
                exists = false
            }
        })
        if (exists){
            const product = {
                src: products.src,
                title:products.title,
                price:products.price,
                quantity: Number(cant),
                id: products.id
            }
            item.push(product)
            setItem(item)
        }
    }
    // Estado del boton comprar
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
                {flag ? <Button onClick={onAdd} className="btn">{textButton}</Button> : <Link onClick={addItem} className='btn' to={'/cart'}>{textButton}</Link>}
            </Card.Body>
        </Card>
    )
}

export default ItemDetail;
