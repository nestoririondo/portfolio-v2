import styles from "../styles/components/StatusIndicator.module.css";

export function StatusIndicator() {
  return (
    <div className={styles.status}>
      <div className={styles.indicatorContainer}>
        <span className={styles.pingEffect}></span>
        <span className={styles.statusDot}></span>
      </div>
    </div>
  );
}