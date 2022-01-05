import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// Components
import ItemList from "../ItemList/ItemList";
// Firebase
import { db } from '../../firebaseConfig'
import { collection, query, getDocs, where } from 'firebase/firestore';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    let id = useParams()

    useEffect(() => {
        let categoryID = id.id;
        // Verificamos si el id del params tiene algo o no
        if(categoryID === undefined){
            categoryID = [1,2,3,4,5]
        } else {
            categoryID = [Number(categoryID)]
        }
        // Realizamos la funcion asincronica
        const getProducts = async () => {
            const q = query(collection(db, 'products'), where('category', 'in', categoryID)); // Realizamos la peticion con una condicion
            const docs = []
            const querySnapshot = await getDocs(q)
            querySnapshot.forEach(doc => {
                docs.push({...doc.data(), id: doc.id}) // Almacenamos temporalmente la informacion proveniente de firebase
            });
            setProducts(docs) // Y ahora la almacenamos en el estado products
        }
        getProducts();
    }, [id])

    return(
        <div className="container items">
            <ItemList products={products} /> 
        </div>
    )
}

export default ItemListContainer;