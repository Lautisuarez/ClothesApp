import "./ItemCount.css"
import { Icon } from "semantic-ui-react";
import { useState } from "react";

const ItemCount = ({stock}) => {
    const [counter, setCounter] = useState(0);

    const increase = () => {
        if (counter != stock){
            setCounter(counter + 1);
        }
    }
    const decrease = () => {
        if (counter > 0){
            setCounter(counter - 1);
        }
    }
    return (
        <div className="counter">
            <Icon link name="minus" onClick={decrease}/>
            <input type='number' value={counter} />
            <Icon link name="plus" onClick={increase}/>
        </div>
    )
}

export default ItemCount;