import React, { useContext, useState } from 'react'
import { Form, Message } from 'semantic-ui-react'
import './Purchase.css'
import { CartContext } from '../../components/CartContext/CartContext'

// FIREBASE
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebaseConfig'


const Purchase = () => {
    const [item] = useContext(CartContext)
    const initialState = {
        name:'',
        lastName:'',
        phone:'',
        email:'',
        date: new Date(),
        items:item
    }
    const [data, setData] = useState(initialState)
    const [purchaseID, setPurchaseID] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    const onChangeHandler = (e) => {
        const {name, value} = e.target;
        setData({...data, [name]: value})
    }
    const onSubmitHanlder = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const docRef = await addDoc(collection(db, 'purchases'),{
            data
        });
        setPurchaseID(docRef);
        setTimeout(() => {
            setIsLoading(false)
            setData(initialState);
        }, 1000)
    }
    return(
        <div className='container'>
            <Form className='form-purchase' onSubmit={onSubmitHanlder}>
                <Form.Field>
                    <label>Nombre</label>
                    <input 
                        placeholder='Nombre'
                        name='name'
                        value={data.name}
                        onChange={onChangeHandler} 
                    />
                </Form.Field>
                <Form.Field>
                    <label>Apellido</label>
                    <input 
                        placeholder='Apellido'
                        name='lastName'
                        value={data.lastName}
                        onChange={onChangeHandler} 
                    />
                </Form.Field>
                <Form.Field>
                    <label>Telefono</label>
                    <input 
                        placeholder='Telefono'
                        name='phone'
                        type='number'
                        value={data.phone}
                        onChange={onChangeHandler} 
                    />
                </Form.Field>
                <Form.Field>
                    <label>E-mail</label>
                    <input 
                        placeholder='email'
                        name='email'
                        type='email'
                        value={data.email}
                        onChange={onChangeHandler} 
                    />
                </Form.Field>
                <button className='btn'>Confirmar</button>
            </Form>
            {isLoading ? (
                <div>
                    <p>Cargando...</p>
                </div>
            ) : purchaseID.id && (
                <div className='notification'>
                    <Message
                        success
                        header='Su transaccion fue realizada con exito! Su ID es:'
                        content={purchaseID.id}
                        style={{textAlign: 'center'}}
                    />
                </div>
            )

            }
        </div>
    )
}

export default Purchase;
