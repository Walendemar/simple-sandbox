import { memo } from 'react';
import clsx from 'clsx';

import styles from './Cell.module.css';

const Cell = memo(({ id, biome, isPlaced }) => {
    const biomeClassName = clsx(
        styles.root,
        styles[biome]
    );

    return (
        <div className={biomeClassName}>{isPlaced && 'X'}</div>
    );
});

export default Cell;