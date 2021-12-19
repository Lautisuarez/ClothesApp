import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// Components
import ItemDetail from "../../views/ItemDetail/ItemDetail";

// Firebase 
import {db} from '../../firebaseConfig'
import { collection, query, getDocs } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [products, setProducts] = useState([]);
    let id = useParams();
    let userID = id.id;

    useEffect(() => {
    // Realizamos la llamada asincronica a la base de datos de firebase
    const getProducts = async () => {
        const q = query(collection(db, 'products'));
        const docs = []
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach(doc => {
            if(doc.id === userID){
                docs.push({...doc.data(), id: doc.id})
            }
        });
        setProducts(docs[0])
        }
        getProducts();
    }, [userID])

    return(
        <ItemDetail
            products={products}
        />
    )
}

export default ItemDetailContainer;