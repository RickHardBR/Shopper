import { useContext } from 'react'

import { ContextGlobal } from '../../Context/ContextGlobal'

import Popup from 'reactjs-popup'

import styles from './style.module.scss'

export const PopupModal = () => {
  const { errorsAndSuccess, setErrorsAndSuccess } =
    useContext(ContextGlobal)

  return (
    <>
      {errorsAndSuccess.length > 0 ? (
        <div className={styles.popupModal} onClick={() => setErrorsAndSuccess('')}>
          <Popup open={true} modal >
            <div className={styles.content}>
              <div onClick={() => setErrorsAndSuccess('')}>
                <span>x</span>
              </div>
              <h1 className={styles.title}>Informação</h1>
              <h3 className={styles.messageError}>{errorsAndSuccess}</h3>
            </div>
          </Popup>
        </div>
      ) : null}
    </>
  )
}