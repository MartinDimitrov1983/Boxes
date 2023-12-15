import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

const AboveText = ({ text }) => {
    return (
        <div>
            <p className={styles.aboveText}>{text}</p>
        </div>
    );
};

AboveText.propTypes = {
    text: PropTypes.string
};

AboveText.defaultProps = {
    text: 'Test text'
};

export default AboveText;
