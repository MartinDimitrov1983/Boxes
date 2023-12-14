import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';
import { TYPE, COLOR } from '../../utils/constants';

const Box = ({ size, color, dot, calculateSmallBoxes, ...props }) => {
    const [opacity, setOpacity] = useState(true);

    const clickHandler = (e) => {
        setOpacity((prev) => !prev);

        calculateSmallBoxes(size, opacity === true);
    };

    return (
        <div
            className={`${styles.container} ${opacity ? styles.opacity : ''}`}
            onClick={clickHandler}
            {...props}
        >
            <div className={`${styles.box} ${styles[size]} ${styles[color]}`}>
                {dot && <span className={styles.dot}></span>}
            </div>
        </div>
    );
};

Box.propTypes = {
    size: PropTypes.oneOf([TYPE.SMALL, TYPE.BIG]),
    color: PropTypes.oneOf([COLOR.BLUE, COLOR.GREEN, COLOR.ORANGE]),
    dot: PropTypes.bool,
    calculateSmallBoxes: PropTypes.func
};

Box.defaultProps = {
    size: TYPE.SMALL,
    color: COLOR.BLUE,
    dot: true,
    calculateSmallBoxes: () => {}
};

export default Box;
