import React, { useState, useEffect } from 'react';

import Box from './components/Box';
import ActualProgress from './components/ActualProgress';
import Loading from './components/Loading';
import Error from './components/Error';
import './App.css';

import { fetchData } from './utils/helperFunctions';
import { TYPE, SMALL_TARGET, CONVERT_TO_PERCENTAGE } from './utils/constants';

function App() {
    const [boxes, setBoxes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [actualPercentage, setActualPercentage] = useState(0);
    const [smallBoxes, setSmallBoxes] = useState(0);
    const [allBoxes, setAllBoxes] = useState(0);

    useEffect(() => {
        fetchData(setBoxes, setLoading, setError);
    }, []);

    useEffect(() => {
        const percentage =
            allBoxes > 0
                ? Math.round((smallBoxes / allBoxes) * CONVERT_TO_PERCENTAGE)
                : 0;

        setActualPercentage(percentage);
    }, [allBoxes, smallBoxes]);

    const calculateSmallBoxes = (size, shouldAdd) => {
        const incrementValue = shouldAdd ? 1 : -1;

        if (size === TYPE.SMALL) {
            setSmallBoxes((prev) => prev + incrementValue);
        }

        setAllBoxes((prev) => prev + incrementValue);
    };

    if (loading) {
        return <Loading />;
    }

    if (!!error) {
        return <Error message={error} />;
    }

    return (
        <>
            <ActualProgress
                target={SMALL_TARGET}
                actualPercentage={actualPercentage}
            />

            <div className="main">
                {boxes.map((box) => {
                    return (
                        <Box
                            key={box.id}
                            size={box.size}
                            color={box.color}
                            dot={box.dot}
                            calculateSmallBoxes={calculateSmallBoxes}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default App;
