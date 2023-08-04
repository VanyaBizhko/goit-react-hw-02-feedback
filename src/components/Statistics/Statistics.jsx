import styles from './Statistics.module.css'
export default function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <div>
            <ul className={styles.statistic_list}>
                <li className={styles.statistic_item}><p className={styles.good}>Good: {good}</p></li>
                <li className={styles.statistic_item}><p className={styles.neutral}>Neutral: {neutral}</p></li>
                <li className={styles.statistic_item}><p className={styles.bad}>Bad: {bad}</p></li>
                <li className={styles.statistic_item}><p >Total: {total}</p></li>
                <li className={styles.statistic_item}><p >Positive feedback: {positivePercentage}%</p></li>
            </ul>
        </div>
    );
}