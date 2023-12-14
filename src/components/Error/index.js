import React from 'react';
import styles from './index.module.css';

const Error = ({ message }) => {
    return (
        <div className={styles.error}>
            <h1>Error: {message}</h1>
        </div>
    );
};

export default Error;
