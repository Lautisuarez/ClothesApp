import { Fragment } from 'react';
// Components
import Item from '../Item/Item.js'

const ItemList = ({products}) => {
    return (
        <Fragment>
            {products.map((e) => /* Recorremos el listado de productos y lo pasamos para que sea mostrado */
                <Item key={e.title} src={e.src} title={e.title} description={e.description} price={e.price} stock={e.stock} initial={e.initial}/>
            )}
        </Fragment>
    )
}

export default ItemList;