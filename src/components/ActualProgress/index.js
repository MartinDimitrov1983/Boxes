import React from 'react';
import ProgressBar from '../ProgressBar';
import styles from './index.module.css';

const ActualProgress = ({ target, actualPercentage }) => {
    const difference = Math.abs(target - actualPercentage);
    const SMALL_TARGET_PERCENT = `Small target ${target}%`;
    const ACTUAL_PROGRESS = `Actual ${actualPercentage}%`;
    const DIFFERENCE = `Difference ${difference}%`;

    return (
        <div className={styles.container}>
            <ProgressBar
                percentage={target}
                text={SMALL_TARGET_PERCENT}
                textAbove={true}
            />
            <hr className={styles.hr} />
            <ProgressBar
                percentage={actualPercentage}
                text={ACTUAL_PROGRESS}
                additionalText={DIFFERENCE}
                textAbove={false}
            />
        </div>
    );
};

export default ActualProgress;
