import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';
import { TYPE, COLOR } from '../../utils/constants';

const Box = ({
    size,
    color,
    dot,
    calculateSmallBoxes,
    calculateDotBoxes,
    ...props
}) => {
    const [opacity, setOpacity] = useState(true);

    const clickHandler = (e) => {
        setOpacity((prev) => !prev);

        calculateSmallBoxes(size, dot, opacity === true);
    };

    const containerClasses = `${styles.container} ${
        opacity ? styles.opacity : ''
    }`;
    const boxClasses = `${styles.box} ${styles[size]} ${styles[color]}`;

    return (
        <div className={containerClasses} onClick={clickHandler} {...props}>
            <div className={boxClasses}>
                {dot && <span className={styles.dot}></span>}
            </div>
        </div>
    );
};

Box.propTypes = {
    size: PropTypes.oneOf([TYPE.SMALL, TYPE.BIG]),
    color: PropTypes.oneOf([COLOR.BLUE, COLOR.GREEN, COLOR.ORANGE]),
    dot: PropTypes.bool,
    calculateSmallBoxes: PropTypes.func,
    calculateDotBoxes: PropTypes.func
};

Box.defaultProps = {
    size: TYPE.SMALL,
    color: COLOR.BLUE,
    dot: true,
    calculateSmallBoxes: () => {},
    calculateDotBoxes: () => {}
};

export default Box;
