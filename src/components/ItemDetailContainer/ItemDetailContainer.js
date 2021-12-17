import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// Axios
import axios from 'axios';
// Components
import ItemDetail from "../../views/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    let id = useParams();
    let userID = id.id;

    const [products, setProducts] = useState([]);

    // Realizamos el llamado a la api para obtener los productos
    useEffect(() => {
        axios.get(
            /* `https://sheet.best/api/sheets/249e2778-ffef-44b9-a6ce-a1c64c7d8c35/${userID}` */
            `https://api.sheety.co/40b027907e992305fec2df6cfd192e71/clothesAppBd/hoja1/${userID}`
        ).then((res) => {
                setProducts(res.data.hoja1) // Los guardamos en un estado
            })
    }, [userID]);

    return(
        <ItemDetail
            products={products}
        />
    )
}

export default ItemDetailContainer;