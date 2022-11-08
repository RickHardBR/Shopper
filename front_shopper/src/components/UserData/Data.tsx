import { useContext } from 'react'
import { ContextGlobal } from '../../Context/ContextGlobal'

import styles from './style.module.scss'
import ButtonComponent from '../../communs/Buttons/Buttons'

export default function Data() {
  const { formUser, addUser } = useContext(ContextGlobal)

  const { form, onChange } = formUser
  const { first_name, last_name, email } = form

  return (
    <form onSubmit={addUser} className={styles.dataContainer}>
      <div className={styles.dataContent}>
        <div className={styles.NameContent}>
          <p>
            Nome: <span>*</span>
          </p>
          <input
            className={styles.inputsName}
            placeholder={'Digite seu nome'}
            type="text"
            id="User"
            name="first_name"
            value={first_name}
            onChange={onChange}
            required
          ></input>
        </div>
        <div>
          <p>
            Sobrenome: <span>*</span>
          </p>
          <input
            className={styles.inputsName}
            placeholder={'Digite seu sobrenome'}
            type="text"
            id="lastName"
            name="last_name"
            value={last_name}
            onChange={onChange}
            required
          ></input>
        </div>
      </div>
      <div className={styles.email}>
        <p>
          E-mail: <span>*</span>
        </p>
        <input
          className={styles.inputsEmail}
          placeholder={'seunome@exemplo.com.br'}
          type="e-mail"
          name="email"
          value={email}
          onChange={onChange}
          required
        ></input>
      </div>
      <div className={styles.register}>
        <ButtonComponent>
          <button type="submit">Cadastrar</button>
        </ButtonComponent>
      </div>
    </form>
  )
}