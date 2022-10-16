import { useContext, useState } from 'react'

import { ContextGlobal } from '../../Context/ContextGlobal'

import styles from './style.module.scss'

import ButtonComponent from '../../communs/Buttons/Buttons'

export default function Hambuguer() {
  const [isActive, setActive] = useState(false)

  const { isOpen, setIsOpen } = useContext(ContextGlobal)

  return (
    <>
      <div className={styles.container}>
        <div
          className={isActive ? styles.change : styles.content}
          onClick={() => setActive(!isActive)}
        >
          <div className={styles.bar1}></div>
          <div className={styles.bar2}></div>
          <div className={styles.bar3}></div>
        </div>
      </div>
      {isActive && (
        <nav className={styles.menuHamburguer}>
          <div className={styles.itemMenu}>Fazer login</div>
          <div className={styles.itemMenu}>Criar conta</div>
          <ButtonComponent>
            <button onClick={() => setIsOpen(!isOpen)}>Carrinho</button>
          </ButtonComponent>
        </nav>
      )}
    </>
  )
}
