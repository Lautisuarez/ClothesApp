import { useContext } from "react";
import { CartContext } from "../../components/CartContext/CartContext";
// Bootstrap react
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Cart = () => {
    const [item, setItem] = useContext(CartContext);
    let total = 0;

    const removeItem = (e) => {
        const id = e.target.id
        const price = e.target.parentElement.childNodes[1].childNodes[1]
        const cant = e.target.parentElement.childNodes[2].childNodes[1]

        let itemAux = item.filter((e) => { // Eliminamos el producto del array del carrito
            return e.id !== id
        })
        setItem(itemAux)
        total -= price * cant // Restamos del total el precio del producto eliminado
    }
    return (
        <div className='container' style={{flex:"1"}}>
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
                                <Button onClick={removeItem} id={i.id}>Eliminar</Button>
                            </Card.Body>
                        </Card>
                    )
                }) :
                    <h2>No hay productos en el carrito</h2>
                }
            </div>
            <h2>Total: ${total}</h2>
            <Link to='/purchase' className='btn'>Finalizar compra</Link>
        </div>
    )
}

export default Cart;