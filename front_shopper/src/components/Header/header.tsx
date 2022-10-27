import { useContext } from 'react'
import { ContextGlobal } from '../../Context/ContextGlobal'

import styles from './style.module.scss'

import Hambuguer from '../Hamburger/hamburger'

import cart from '../../assets/imagesSvg/cart.svg'
import logo from '../../assets/imagesSvg/logoShopper.svg'

export default function header() {
  const { isOpen, setIsOpen } = useContext(ContextGlobal)

  return (
    <header>
      <div className={styles.container}>
      <a href="https://landing.shopper.com.br/" target="_blank" rel="noopener">
        <img
        className={styles.logo}
        src={logo}
        alt="logo da Shopper" />
        </a>
        <Hambuguer />
        <nav className={styles.menuHeader}>
          <div className={styles.itemMenu}>
            Fazer login
          </div>
          <div className={styles.itemMenu}>
            Criar conta &gt;
          </div>
          <div
          className={styles.button}
          onClick={() => setIsOpen(!isOpen)}>
            {!isOpen ? (
              <>
                <img
                className={styles.cart}
                src={cart}
                alt="carrinho" />
                <div className={styles.textCar}>
                  Carrinho
                </div>
              </>
            ) : (
              <p>
                Fechar
              </p>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}
