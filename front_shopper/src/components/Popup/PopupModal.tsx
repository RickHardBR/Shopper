// import Popup from 'reactjs-popup'

import { useContext } from 'react'

import { ContextGlobal } from '../../Context/ContextGlobal'

import styles from './styles.modules.scss'

export const PopupModal = () => {
  const { errosAndSuccess, isOpenModal, setIsOpenModal } = useContext(ContextGlobal)
  // console.log(errosAndSuccess)
  return (
  <>
    {
      errosAndSuccess ?
      (
        // <Popup trigger={<button className="button"> Open Modal </button>} modal>
        <div>
          <h2>Errors</h2>
          <h4>{errosAndSuccess}</h4>
        </div>
        // </Popup>
      )
      : <></>
    }
  </>
  )
}
