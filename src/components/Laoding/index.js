import React from 'react';
import styles from './index.module.css';

const Loading = () => {
    return (
        <div className={styles.container}>
            <div className={styles.loadingCircle}></div>
        </div>
    );
};

export default Loading;
