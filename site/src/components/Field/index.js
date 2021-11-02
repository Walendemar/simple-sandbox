import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import generateField from '@utilities/generateField';

import Cell from '@components/Cell';

import styles from './Field.module.css';

const BIOMES = [
    'water',
    'sand',
    'earth',
    'grass',
];

const Field = () => {
    const startField = useMemo(() => generateField(), []);
    const [field, setField] = useState(startField);
    const [objPos, setObjPos] = useState({
        x: 0,
        y: 0,
        id: 0
    });


    const handleMoveObject = useCallback((event) => {
        setObjPos(prevState => {
            const newPosition = { ...prevState};

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

            if (field[newPosition.id].biome === 0) {
                return { ...prevState };
            }

            return { ...newPosition };
        })

    }, []);

    useEffect(() => {
        window.addEventListener('keydown', handleMoveObject);
    }, []);

    return (
        <div className={styles.root}>
            {startField.map( item => {
                const { id, biome } = item;
                const isPlaced = objPos.id  === id;

                return (
                    <Cell key={id} id={id} biome={BIOMES[biome]} isPlaced={isPlaced}/>
                );
        })}
        </div>
    );
};

export default Field;