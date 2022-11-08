import styles from './style.module.scss'

export default function Loading() {
  return (
    <li className={styles.loading}>
      <div>
        <div className={styles.indeterminateProgressBar}>
          <div className={styles.indeterminateProgressBarProgress}></div>
        </div>
        Loading...
      </div>
    </li>
  )
}