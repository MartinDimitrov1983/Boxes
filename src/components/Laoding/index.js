import React from 'react';
import styles from './index.module.css';

const Loading = (props) => {
    return (
        <div className={styles.container} {...props}>
            <div className={styles.loadingCircle}></div>
        </div>
    );
};

export default Loading;
