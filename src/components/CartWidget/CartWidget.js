// FONT AWESOME
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// Context
import { Fragment, useContext } from "react"
import { CartContext } from "../CartContext/CartContext"

const CartWidget = () => {
    const [item] = useContext(CartContext);
    return(
        <Fragment>
            <FontAwesomeIcon icon={faShoppingCart} />
            <p>{item.length}</p>
        </Fragment>
    )
}

export default CartWidget