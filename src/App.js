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
    const [dotBoxes, setDotBoxes] = useState(0);
    const [dotPercentage, setDotPercentage] = useState(0);

    useEffect(() => {
        fetchData(setBoxes, setLoading, setError);
    }, []);

    useEffect(() => {
        const percentage =
            allBoxes > 0
                ? Math.round((smallBoxes / allBoxes) * CONVERT_TO_PERCENTAGE)
                : 0;

        setActualPercentage(percentage);
        const dotPercentage =
            allBoxes > 0
                ? Math.round((dotBoxes / allBoxes) * CONVERT_TO_PERCENTAGE)
                : 0;

        setDotPercentage(dotPercentage);
    }, [allBoxes, smallBoxes, dotBoxes]);

    const countBoxes = (shouldSet, setter,incrementValue) => {
        if (shouldSet) {
            setter((prev) => prev + incrementValue);
        }
    };

    const calculateTargetBoxes = (size, dot, shouldAdd) => {
        const incrementValue = shouldAdd ? 1 : -1;

        countBoxes(size === TYPE.SMALL,setSmallBoxes,incrementValue)
        countBoxes(dot,setDotBoxes,incrementValue)
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
                targetText="Small"
            />
            <ActualProgress
                target={SMALL_TARGET}
                actualPercentage={dotPercentage}
                targetText="Dot"
            />

            <div className="main">
                {boxes.map((box) => {
                    return (
                        <Box
                            key={box.id}
                            size={box.size}
                            color={box.color}
                            dot={box.dot}
                            calculateSmallBoxes={calculateTargetBoxes}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default App;
