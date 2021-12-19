import { Fragment, useContext } from "react";
import { CartContext } from "../../components/CartContext/CartContext";
// Bootstrap react
import { Card, Button } from "react-bootstrap";

const Cart = () => {
    const [item] = useContext(CartContext);
    let total = 0;

    const removeItem = (e) => {
        const elem = e.target.parentElement.parentElement.parentElement
        const price = e.target.parentElement.childNodes[1].childNodes[1]
        console.log(e.target.parentElement.childNodes[1].childNodes[1]);
        const cant = e.target.parentElement.childNodes[2].childNodes[1]

        total -= price * cant
        elem.removeChild(e.target.parentElement.parentElement)
    }
    return (
        <Fragment>
            <h1 style={{textAlign:"center", margin:"1rem 0"}}>Carrito</h1>
            <div style={{display:"flex"}}>
                {item.length > 0 ? item.map((i) => {
                    total += Number(i.price) * Number(i.quantity);
                    return(
                        <Card key={i.title} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={i.src} />
                            <Card.Body>
                                <Card.Title>{i.title}</Card.Title>
                                <h3>${i.price}</h3>
                                <h2>Cantidad: {i.quantity}</h2>
                                <Button onClick={removeItem}>Eliminar</Button>
                            </Card.Body>
                        </Card>
                    )
                }) : 
                    <h2>No hay productos en el carrito</h2>
                }
            </div>
            <h2>Total: ${total}</h2>
        </Fragment>
    )
}

export default Cart;