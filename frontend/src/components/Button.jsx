import styles from '../modules/Button.module.css'
import { useState } from 'react'
function Button(){

    const [num, setNum] = useState(0);

    function handleClick(){
        setNum(prevNum => prevNum + 1);
    }

    return (
        <>
        <button className={styles.button} onClick={handleClick}>CLick Me</button>
        <h3>{num}</h3>
        </>
    );
}

export default Button;