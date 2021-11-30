import { useEffect, useState } from 'react';
// Axios
import axios from 'axios';
// Components
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({title, show, onHide}) => {
    const [products, setProducts] = useState([]);

    // Realizamos el llamado a la api para obtener los productos
    useEffect(() => {
        axios.get(
            `https://api.sheety.co/40b027907e992305fec2df6cfd192e71/clothesAppBd/hoja1`
        ).then((res) => {
                const resultado = res.data.hoja1.find(prod => prod.title === title)
                setProducts(resultado) // Los guardamos en un estado
            })
    }, []);

    return(
        <ItemDetail
            products={products}
            show={show}
            onHide={onHide}
        />
    )
}

export default ItemDetailContainer;