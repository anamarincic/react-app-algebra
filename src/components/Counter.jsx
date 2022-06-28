import "./counter.css"
import {useState} from "react";

export function Counter(props){
    const counterState = useState(props.children);
    const counter = counterState[0];
    const setCounter = counterState[1];

    const handleClick = (e) => {
        e.preventDefault();
        setCounter((state)=> ++state);
    }

    const handleClickMinus = (e) => {
        e.preventDefault();
        setCounter((state)=> --state);
    }

    return (
       <div>
            <button className="counter" onClick={handleClickMinus}>-</button>
             {counter}
            <button className="counter" onClick={handleClick}>+</button>
       </div>
  )
}