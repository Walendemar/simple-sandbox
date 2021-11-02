import { memo } from 'react';
import clsx from 'clsx';

import styles from './Cell.module.css';

const Cell = memo(({ isPlaced, id }) => {
    const biomeClassName = clsx(
        styles.root,
        id < 30 && styles.grass,
        id > 29 && id < 40 && styles.earth,
        id > 39 && id < 50 && styles.sand,
        id > 49 && styles.water
    );

    return (
        <div className={biomeClassName}>{isPlaced && 'X'}</div>
    );
});

export default Cell;