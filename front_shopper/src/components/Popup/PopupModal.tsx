// import Popup from 'reactjs-popup'

import { useContext } from 'react'

import { ContextGlobal } from '../../Context/ContextGlobal'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import styles from './style.module.scss'

export const PopupModal = () => {
  const { errosAndSuccess, setErrosAndSuccess, isOpenModal, setIsOpenModal } =
    useContext(ContextGlobal)
  console.log(errosAndSuccess)

  return (
    <>
      {errosAndSuccess.length > 0 ? (
        <div onClick={() => setErrosAndSuccess('')}>
          <Popup open={true} modal>
            <div className={styles.content}>
              <div onClick={() => setErrosAndSuccess('')}>
                <span>x</span>
              </div>
              <h1 className={styles.title}>Informação</h1>
              <h3 className={styles.messageError}>{errosAndSuccess}</h3>
            </div>
          </Popup>
        </div>
      ) : null}
    </>
  )
}
