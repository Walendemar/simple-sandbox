import { memo } from 'react';

import styles from './Cell.module.css';

const Cell = memo(({ isPlaced }) => (
    <div className={styles.root}>{isPlaced && 'X'}</div>
));

export default Cell;