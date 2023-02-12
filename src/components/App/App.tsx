import styles from './styles.scss';

console.log(styles);

const App = () => (
    <div className={styles.app}>
        <h1 className={styles.heading}>App</h1>
        <span className={styles.hello}>Hello!</span>
    </div>
);

export default App;
