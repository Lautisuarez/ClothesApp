import "./ItemCount.css"
import { useState } from "react";

// Semantic
import { Icon } from "semantic-ui-react";

const ItemCount = ({stock}) => {
    const [counter, setCounter] = useState(0);

    const increase = () => { // Incrementamos el contador en caso de que no se supere el stock disponible
        if (counter !== Number(stock)){
            setCounter(counter + 1);
        }
    }
    const decrease = () => { // Decrementamos el contador en caso de que no sea igual a 0
        if (counter > 0){
            setCounter(counter - 1);
        }
    }
    return (
        <div className="counter">
            <Icon link name="minus" onClick={decrease}/>
            <input type='number' value={counter} onChange={(e)=>setCounter(counter)}/>
            <Icon link name="plus" onClick={increase}/>
        </div>
    )
}

export default ItemCount;