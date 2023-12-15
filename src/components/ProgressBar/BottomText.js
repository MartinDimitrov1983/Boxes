import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';
import { PROGRESS_TRANSLATE } from '../../utils/constants';

const BottomText = ({ text, additionalText, progress }) => {
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

BottomText.propTypes = {
    text: PropTypes.string,
    additionalText: PropTypes.string,
    progress: PropTypes.number
};

BottomText.defaultProps = {
    text: 'Test text',
    additionalText: 'Additional Text',
    progress: 50
};

export default BottomText;
