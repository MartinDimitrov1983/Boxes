import React, { useState } from 'react';
import styles from './index.module.css';

const Box = ({ size, color, dot, calculateSmallBoxes }) => {
    const [opacity, setOpacity] = useState(true);

    const clickHandler = (e) => {
        setOpacity((prev) => !prev);

        if (calculateSmallBoxes) {
            calculateSmallBoxes(size, opacity === true);
        }
    };

    return (
        <div
            className={`${styles.container} ${opacity && styles.opacity}`}
            onClick={clickHandler}
        >
            <div className={`${styles.box} ${styles[size]} ${styles[color]}`}>
                {dot && <span className={styles.dot}></span>}
            </div>
        </div>
    );
};

export default Box;
