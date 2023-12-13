import React from 'react';
import ProgressBar from '../ProgressBar';
import styles from './index.module.css';

const ActualProgress = ({ target, actualPercentage }) => {
    const difference = Math.abs(60 - actualPercentage);
    const SMALL_TARGET = `Small target ${target}%`;
    const ACTUAL_PROGRESS = `actual ${actualPercentage}%`;
    const DIFFERENCE = `Difference ${difference}%`;

    return (
        <div className={styles.container}>
            <ProgressBar percentage={target} text={SMALL_TARGET} top={true} />
            <hr className={styles.hr} />
            <ProgressBar
                percentage={actualPercentage}
                text={ACTUAL_PROGRESS}
                additionalText={DIFFERENCE}
                top={false}
            />
        </div>
    );
};

export default ActualProgress;
