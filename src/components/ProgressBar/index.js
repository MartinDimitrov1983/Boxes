import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AboveText from './AboveText';
import BottomText from './BottomText';
import Progress from './Progress';
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
            {textAbove && <AboveText text={text} />}
            <Progress width={width} textAbove={textAbove} />
            {!textAbove && (
                <BottomText
                    text={text}
                    additionalText={additionalText}
                    progress={progress}
                />
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
    additionalText: 'Additional Text'
};

export default ProgressBar;
