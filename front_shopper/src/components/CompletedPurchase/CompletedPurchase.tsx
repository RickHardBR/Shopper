import { useContext } from 'react'

import { ContextGlobal } from '../../Context/ContextGlobal'

import styles from './styles.module.scss'

import { formatDate } from '../../utils/formatDate'

import logo from '../../assets/imagesSvg/logoShopper.svg'

export default function CompletedPurchase() {
  
  const {completedPurchase, setErrorsAndSuccess} = useContext(ContextGlobal)

  const valueTotal = completedPurchase.listPurchase.reduce((acc, currentValue)=>{
    return acc + (currentValue.qty_selected! * currentValue.price)
  }, 0)

  return (
    <div className={styles.container}>
      <p className={styles.close} onClick={()=>setErrorsAndSuccess({type:''})}>X</p>
      <div className={styles.content}>
        <p className={styles.head}>Compra finalizada</p>
        <div className={styles.userData}>
          <p className={styles.name}>{completedPurchase.name}</p>
          <p>, obrigado pela compra!</p>
        </div>
        <div className={styles.containerDate}>
          <div className={styles.date}>
            Data da compra:
            <p>
              <span>{completedPurchase.buyDate}</span>
            </p>
          </div>
          <div className={styles.date}>
            Data entrega:
            <p>
              <span>{formatDate(new Date(completedPurchase.deliveyDate + "T00:00"), 'short')}</span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.containerProduct}>
        <ul className={styles.productList}>
          {completedPurchase.listPurchase.map(item => {
            return (
              <li key={item.id_product}>
                <div className={styles.product}>
                  <div className={styles.imageProduct}>
                    <img src={item.photo_product} />
                  </div>
                  <div className={styles.productDescription}>
                    <p>{item.product_name}</p>
                    <div className={styles.itensDescription}>
                      <div className={styles.qtySelected}>
                        {item.qty_selected}
                      </div>
                      <p>x</p>
                      <div className={styles.price}>{`R$ ${item.price}`}</div>
                      <p>=</p>
                      <div className={styles.totalPrice}>{`R$ ${item.qty_selected! * item.price
                      }`}</div>
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
        <div className={styles.totalPurchase}>
          <p>TOTAL</p>
          <p className={styles.valueTotal}>{`R$ ${valueTotal.toFixed(2)}`}</p>
        </div>
        <div className={styles.footer}>
          <img src={logo} />
          <h2>Volte Sempre!!</h2>
        </div>
      </div>
    </div>
  )
}
