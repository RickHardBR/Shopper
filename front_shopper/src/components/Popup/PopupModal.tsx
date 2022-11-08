import { useContext } from 'react'

import { ContextGlobal } from '../../Context/ContextGlobal'

import CompletedPurchase from '../CompletedPurchase/CompletedPurchase'

import Popup from 'reactjs-popup'

import styles from './style.module.scss'

export const PopupModal = () => {
  const { errorsAndSuccess, setErrorsAndSuccess } = useContext(ContextGlobal)

  const popups = () => {
    switch (errorsAndSuccess.type) {
      case 'obj':
        return (
          <div
            className={styles.popupModal}
            onClick={() =>
              setErrorsAndSuccess({
                type: '',
                message: ''
              })
            }
          >
            <Popup open={true} modal>
              <CompletedPurchase />
            </Popup>
          </div>
        )
      case 'message':
        return (
          <div
            className={styles.popupModal}
            onClick={() =>
              setErrorsAndSuccess({
                type: '',
                message: ''
              })
            }
          >
            <Popup open={true} modal>
              <div className={styles.content}>
                <div
                  onClick={() =>
                    setErrorsAndSuccess({
                      type: '',
                      message: ''
                    })
                  }
                >
                  <span>x</span>
                </div>
                <h1 className={styles.title}>Informação</h1>
                <h3 className={styles.messageError}>
                  {errorsAndSuccess.message}
                </h3>
              </div>
            </Popup>
          </div>
        )
    }
  }
  return <>{errorsAndSuccess.type?.length > 0 && <>{popups()}</>}</>
}