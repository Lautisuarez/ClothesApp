import { Fragment } from 'react';
// Components
import Item from '../Item/Item.js'

const ItemList = ({products}) => {

    return (
        <Fragment>
            {
                products.map((e) => /* Recorremos el listado de productos y lo pasamos para que sea mostrado */
                        <Item key={e.id} src={e.src} title={e.title} price={e.price} id={e.id} />
                )
            }
        </Fragment>
    )
}

export default ItemList;