import { Fragment, useContext } from "react";
import { CartContext } from "../../components/CartContext/CartContext";
// Bootstrap react
import { Card } from "react-bootstrap";

const Cart = () => {
    const [item] = useContext(CartContext);
    return (
        <Fragment>
            <h1 style={{textAlign:"center", margin:"1rem 0"}}>Carrito</h1>
            <div style={{display:"flex"}}>
                {item.map((i) => {
                    return(
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={i.src} />
                            <Card.Body>
                                <Card.Title>{i.title}</Card.Title>
                                <h3>${i.price}</h3>
                                <h2>Cantidad: {i.quantity}</h2>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
        </Fragment>
    )
}

export default Cart;