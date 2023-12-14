import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';
import { PROGRESS_VALUE } from '../../utils/constants';

const ProgressBar = ({
    percentage,
    text,
    textAbove,
    additionalText,
    ...props
}) => {
    const [progress, setProgress] = useState(percentage);
    const width = `${progress === PROGRESS_VALUE ? progress - 1 : progress}%`;

    useEffect(() => {
        setProgress(percentage);
    }, [percentage]);

    return (
        <div className={styles.container} {...props}>
            {textAbove && (
                <div>
                    <p className={styles.topText}>{text}</p>
                </div>
            )}
            <div className={styles.progressBarContainer}>
                <div
                    className={`${styles.progressBar} ${
                        !textAbove ? styles.active : ''
                    }`}
                    style={{ width: width }}
                ></div>
                1
            </div>
            {!textAbove && (
                <div
                    className={styles.constinerBottomText}
                    style={{
                        transform: `translate(${progress - 50}%)`,
                    }}
                >
                    <p className={styles.bottomText}>{text}</p>
                    <p className={styles.bottomText}>{additionalText}</p>
                </div>
            )}
        </div>
    );
};

ProgressBar.propTypes = {
    percentage: PropTypes.number,
    text: PropTypes.string,
    textAbove: PropTypes.bool,
    additionalText: PropTypes.string,
};

ProgressBar.defaultProps = {
    percentage: 50,
    text: 'Test text',
    textAbove: true,
    additionalText: '',
};

export default ProgressBar;
