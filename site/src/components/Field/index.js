import Cell from '@components/Cell';

import styles from './Field.module.css';

const ARRAY_OF_FIELD = [];
ARRAY_OF_FIELD.length = 100;
ARRAY_OF_FIELD.fill(1, 0, 100);

const Field = () => (
    <div className={styles.root}>
        {ARRAY_OF_FIELD.map( () => (
            <Cell />
        ))}
    </div>
);

export default Field;