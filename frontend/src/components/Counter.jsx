import React, {useState} from 'react';
import styles from '../modules/Counter.module.css'
function Counter(){

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <>
            <div className={styles.container}>
                <p className={styles.display}>{count}</p>
                <button className={styles.button} onClick={decrement}>Decrement</button>
                <button className={styles.button} onClick={reset}>Reset</button>
                <button className={styles.button} onClick={increment}>Increment</button>
            </div>
        </>
    );
}

export default Counter;