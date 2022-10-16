import styles from './style.module.scss'

export default function Loading() {
  return (
    <li className={styles.loading}>
      <p>
        Loading...
      </p>
    </li>
  )
}