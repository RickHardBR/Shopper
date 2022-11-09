import { Icon } from '@iconify/react'

import styles from './styles.module.scss'

import logo from '../../assets/imagesSvg/logoShopper.svg'

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <p>
          Todos os direitos reservados - <span>🔗</span>
          <a
            href="https://github.com/RickHardBR"
            target="_blank"
            rel="noopener"
            aria-label="Link para o repositório do github do criador desta página"
          >
            RickHarDev
          </a>{' '}
          ©️ - 2022{' '}
          <a
            href="https://landing.shopper.com.br/"
            target="_blank"
            rel="noopener"
            aria-label="Link para o site orininal Shopper"
          >
            <img src={logo} alt="logo Shopper" />
          </a>
        </p>

        <nav className={styles.iconsFooter}>
          <a
            href="https://www.instagram.com/shopper.com.br"
            target="_blank"
            rel="noopener"
            aria-label="Link para o instagram da empresa Shopper"
          >
            <Icon className={styles.icons} icon="akar-icons:instagram-fill" />
          </a>

          <a
            href="https://www.facebook.com/shopper.com.br"
            target="_blank"
            rel="noopener"
            aria-label="Link para o facebook da empresa Shopper"
          >
            <Icon className={styles.icons} icon="akar-icons:facebook-fill" />
          </a>

          <a
            href="https://www.youtube.com/channel/UC8lKcjNoanFo-kEi2w9mWaA/videos"
            target="_blank"
            rel="noopener"
            aria-label="Link para o youtube da empresa Shopper"
          >
            <Icon className={styles.icons} icon="akar-icons:youtube-fill" />
          </a>
        </nav>
      </div>
    </footer>
  )
}