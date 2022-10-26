import styles from './style.module.scss'

export default function Loading() {
  return (
    <li className={styles.loading}>
      <p>
        <div className={styles.indeterminateProgressBar}>
          <div className={styles.indeterminateProgressBarProgress}></div>
        </div>
        Loading...
      </p>
    </li>
  )
}
