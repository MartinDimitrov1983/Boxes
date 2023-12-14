import boxes from './mock.data';

export const getBoxes = () => {
    return new Promise((resolve, reject) => {
        if (boxes.length === 0) {
            return setTimeout(() => reject(new Error('Boxes not found')), 1000);
        }

        return setTimeout(() => resolve(boxes), 1000);
    });
};

export const fetchData = async (setBoxes, setLoading, setError) => {
    try {
        const boxes = await getBoxes();
        setBoxes(boxes);
    } catch (error) {
        setError(error.message);
    } finally {
        setLoading(false);
    }
};
