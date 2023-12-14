import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

const Error = ({ message }) => {
    return (
        <div className={styles.error}>
            <h1>Error: {message}</h1>
        </div>
    );
};

Error.propTypes = {
    message: PropTypes.string,
};

Error.defaultProps = {
    message: 'Unexpected Error',
};

export default Error;
