import React, { useState, useEffect } from 'react';
import Box from './components/Box';
import ActualProgress from './components/ActualProgress';
import './App.css';
import boxes from './utils/mock.data';

function App() {
    const [actualPercentage, setActualPercentage] = useState(0);
    const [smallBoxes, setSmallBoxes] = useState(0);
    const [allBoxes, setAllBoxes] = useState(0);
    const [target, setTarget] = useState('small');

    const calculateSmallBoxes = (size, shouldAdd) => {

        if (size === target && shouldAdd) {
            setSmallBoxes((prev) => prev + 1);
        }

        shouldAdd && setAllBoxes((prev) => prev + 1);

        if (size === target && !shouldAdd) {
            setSmallBoxes((prev) => prev - 1);
        }

        !shouldAdd && setAllBoxes((prev) => prev - 1);
    };

    useEffect(() => {
        let percentage = 0;

        if (allBoxes > 0) {
            percentage = Math.round((smallBoxes / allBoxes) * 100);
        }

        setActualPercentage(percentage);
    }, [allBoxes]);

    console.log(allBoxes, smallBoxes, actualPercentage);
    return (
        <>
            <ActualProgress target={60} actualPercentage={actualPercentage} />

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
