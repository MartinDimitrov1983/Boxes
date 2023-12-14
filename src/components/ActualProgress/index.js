import React from 'react';
import PropTypes from 'prop-types';
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

ActualProgress.propTypes = {
    target: PropTypes.number,
    actualPercentage: PropTypes.number
};

ActualProgress.defaultProps = {
    target: 60,
    actualPercentage: 0
};

export default ActualProgress;
