import styles from './styles.module.scss'

interface Props {
  children: React.ReactNode
}

export default function ButtonComponent({ children }: Props) {
  return <div className={styles.button}>{children}</div>
}
