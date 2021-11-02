import Cell from '@components/Cell';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import styles from './Field.module.css';

const ARRAY_OF_FIELD = [];
ARRAY_OF_FIELD.length = 100;
ARRAY_OF_FIELD.fill(1, 0, 100);

const Field = () => {
    const [objPos, setObjPos] = useState({
        x: 0,
        y: 0,
        id: 0
    });

    const handleMoveObject = useCallback((event) => {
        setObjPos(prevState => {
            const newPosition = prevState;

            switch(event.key) {
                case 'ArrowUp':
                    if (prevState.y > 0) {
                        newPosition.y = prevState.y - 1;
                    }
                    break;
                case 'ArrowDown':
                    if (prevState.y < 9) {
                        newPosition.y = prevState.y + 1;
                    }
                    break;
                case 'ArrowLeft':
                    if (prevState.x > 0) {
                        newPosition.x = prevState.x - 1;
                    }
                    break;
                case 'ArrowRight':
                    if (prevState.x < 9) {
                        newPosition.x = prevState.x + 1;
                    }
                    break;
            }

            newPosition.id = newPosition.y * 10 + newPosition.x;

            return { ...newPosition };
        })

    }, []);

    useEffect(() => {
        window.addEventListener('keydown', handleMoveObject);
    }, []);

    return (
        <div className={styles.root}>
            {ARRAY_OF_FIELD.map( (item, index) => {
                const isPlaced = objPos.id  === index;

                return (
                    <Cell key={index} isPlaced={isPlaced}/>
                );
        })}
        </div>
    );
};

export default Field;