import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';
import { PROGRESS_VALUE, PROGRESS_TRANSLATE } from '../../utils/constants';

const ProgressBar = ({
    percentage,
    text,
    textAbove,
    additionalText,
    ...props
}) => {
    const [progress, setProgress] = useState(percentage);
    const width = `${progress === PROGRESS_VALUE ? progress - 1 : progress}%`;
    const progressBarClasses = `${styles.progressBar} ${
        !textAbove ? styles.active : ''
    }`;

    useEffect(() => {
        setProgress(percentage);
    }, [percentage]);

    const AboveText = ({ text }) => {
        return (
            <div>
                <p className={styles.aboveText}>{text}</p>
            </div>
        );
    };

    const Progress = ({ width }) => {
        return (
            <div className={styles.progressBarContainer}>
                <div className={progressBarClasses} style={{ width }}></div>
            </div>
        );
    };

    const BottomText = ({ text, additionalText }) => {
        return (
            <div
                className={styles.constinerBottomText}
                style={{
                    transform: `translate(${progress - PROGRESS_TRANSLATE}%)`
                }}
            >
                <p className={styles.bottomText}>{text}</p>
                <p className={styles.bottomText}>{additionalText}</p>
            </div>
        );
    };

    return (
        <div className={styles.container} {...props}>
            {textAbove && <AboveText text={text} />}
            <Progress width={width} />
            {!textAbove && (
                <BottomText text={text} additionalText={additionalText} />
            )}
        </div>
    );
};

ProgressBar.propTypes = {
    percentage: PropTypes.number,
    text: PropTypes.string,
    textAbove: PropTypes.bool,
    additionalText: PropTypes.string
};

ProgressBar.defaultProps = {
    percentage: 50,
    text: 'Test text',
    textAbove: true,
    additionalText: ''
};

export default ProgressBar;
