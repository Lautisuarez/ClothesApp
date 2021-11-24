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
            'https://sheet.best/api/sheets/249e2778-ffef-44b9-a6ce-a1c64c7d8c35'
        ).then((res) => {
                setProducts(res.data) // Los guardamos en un estado
            })
    }, []);
    return(
        <ItemList products={products} /> // Y lo enviamos para ser procesada
    )
}

export default ItemListContainer;