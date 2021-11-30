import { useEffect, useState } from 'react';
// Axios
import axios from 'axios';
// Components
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    // Realizamos el llamado a la api para obtener los productos
    useEffect(() => {
        axios.get(
            'https://api.sheety.co/40b027907e992305fec2df6cfd192e71/clothesAppBd/hoja1'
        ).then((res) => {
                setProducts(res.data.hoja1) // Los guardamos en un estado
            })
    }, []);
    return(
        <ItemList products={products} /> // Y lo enviamos para ser procesada
    )
}

export default ItemListContainer;