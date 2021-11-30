import "./ItemDetail.css"
// Bootstrap react
import { Modal, Button } from "react-bootstrap";
//Components
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = (props) => {

    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            {props.products.title}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className="detail">
            <img src={props.products.src} alt=""/>
            <h4>${props.products.price}</h4>
            <p>
            {props.products.description}
            </p>
            <ItemCount stock={props.products.stock} initial={props.products.initial}/> {/* Le enviamos al contador el stock disponible, para que no se exceda en la compra, y la cantidad inicial*/}
        </Modal.Body>
        <Modal.Footer>
            <Button variant="success" onClick={props.onHide}>Comprar</Button>
        </Modal.Footer>
        </Modal>
    )
}

export default ItemDetail;
