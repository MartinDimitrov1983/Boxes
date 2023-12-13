import React, { useState, useEffect } from 'react';
import styles from './index.module.css';

const ProgressBar = ({ percentage, text, top, additionalText }) => {
    const [progress, setProgress] = useState(0);
    const width = `${progress === 100 ? progress - 1 : progress}%`;

    useEffect(() => {
        setProgress(percentage);
    }, [percentage]);

    return (
        <div className={styles.container}>
            {top && (
                <div>
                    <p className={styles.topText}>{text}</p>
                </div>
            )}
            <div className={styles.progressBarContainer}>
                <div
                    className={`${styles.progressBar} ${!top && styles.purple}`}
                    style={{ width: width }}
                ></div>
            </div>
            {!top && (
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

export default ProgressBar;
