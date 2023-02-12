import styles from './styles.scss';
import test from '../../../images/test.svg';

console.log(styles);

const App = () => (
    <div className={styles.app}>
        <h1 className={styles.heading}>App</h1>
        <span className={styles.hello}>Hello!</span>
        <img src={test} />
    </div>
);

export default App;
