import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

const Progress = ({ width, textAbove }) => {
    const progressBarClasses = `${styles.progressBar} ${
        !textAbove ? styles.active : ''
    }`;

    return (
        <div className={styles.progressBarContainer}>
            <div className={progressBarClasses} style={{ width }}></div>
        </div>
    );
};

Progress.propTypes = {
    width: PropTypes.string,
    text: PropTypes.string
};

Progress.defaultProps = {
    width: '50%',
    text: 'Test text'
};

export default Progress;
