import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from '../ProgressBar';
import styles from './index.module.css';

const ActualProgress = ({ target, actualPercentage, targetText }) => {
    const difference = Math.abs(target - actualPercentage);
    const SMALL_TARGET_PERCENT = `${targetText} target ${target}%`;
    const ACTUAL_PROGRESS = `Actual ${actualPercentage}%`;
    const DIFFERENCE_TEXT = `Difference ${difference}%`;

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
                additionalText={DIFFERENCE_TEXT}
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
