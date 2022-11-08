import { useContext, useEffect, useState } from 'react'

import { Icon } from '@iconify/react'

import { ContextGlobal } from '../../Context/ContextGlobal'

import { formatDate } from '../../utils/formatDate'

import { IProductType } from '../../types/apiBaseTypes'

import styles from './styles.module.scss'

import ButtonComponent from '../../communs/Buttons/Buttons'

import mais from '../../assets/imagesSvg/mais.svg'
import menos from '../../assets/imagesSvg/menos.svg'
import protect from '../../assets/imagesSvg/protected.svg'

export default function Cart() {
  const {
    isOpen,
    setIsOpen,
    cartLocal,
    removeItemLocal,
    setCartLocal,
    purchaseProducts,
    setDate
  } = useContext(ContextGlobal)

  const [cart, setCart] = useState<IProductType[] | []>([])
  const [item, setItem] = useState<IProductType>()
  const [addQty, setAddQty] = useState<number>(0)

  useEffect(() => {
    if (cartLocal!.length > 0) {
      setCart(cartLocal!)
    } else {
      setCart([])
    }
  }, [cartLocal])

  const addSingleItem = (id: number) => {
    const itemFound = cart.find(item => item.id_product === id)
    setItem(itemFound)
    if (itemFound) {
      setAddQty(itemFound.qty_selected! + 1)
    }
  }

  const removeSingleItem = (id: number) => {
    const itemFound = cart.find(item => item.id_product === id)
    setItem(itemFound)
    if (itemFound) {
      setAddQty(itemFound.qty_selected! - 1)
    }
  }

  useEffect(() => {
    if (item) {
      const newCart = [...cart]
      newCart.forEach(itemProduct => {
        if (itemProduct.id_product === item.id_product) {
          itemProduct.qty_selected = addQty
        }
      })
      setCartLocal(newCart)
      setCart(newCart)
    }
  }, [addQty, item])

  let total = cart!.map(item => item.price * item.qty_selected!)
  let totalPrice = total.reduce(
    (acc: number, currentValue) => acc + currentValue,
    0
  )

  const currentDate = formatDate(new Date(), 'short')
    .split('/')
    .reverse()
    .join('-')

  return (
    <>
      {isOpen && (
        <section className={styles.container}>
          <div className={styles.containerPay}>
            <div className={styles.contentDate}>
              <div className={styles.contentQuant}>
                <h2>Carrinho de compras: {cart.length} itens</h2>
                <div className={styles.buttonMobile}>
                  <ButtonComponent>
                    <button onClick={() => setIsOpen(false)}>Fechar</button>
                  </ButtonComponent>
                </div>
              </div>
              <div className={styles.containerDate}>
                <div className={styles.date}>
                  <div>
                    <p>Data de compra</p>
                    <div className={styles.dateInput}>
                      {formatDate(new Date(), 'short')}
                    </div>
                  </div>
                  <div>
                    <p>Data de entrega</p>
                    <input
                      className={styles.dateInput}
                      min={currentDate}
                      type="date"
                      onChange={e => setDate(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.containerCards}>
              {cart.length ? (
                <ul className={styles.containerUl}>
                  {cart!.map(item => {
                    return (
                      <div key={item.id_product}>
                        <li className={styles.containerLi}>
                          <div className={styles.productsImage}>
                            <img src={item.photo_product} alt="azeite" />
                          </div>
                          <div className={styles.productName}>
                            <p className={styles.productNameCard}>
                              {item.product_name}
                            </p>
                            <div className={styles.productsPrice}>
                              R$ {item.price} <span>unid</span>
                            </div>
                          </div>
                          <div className={styles.quanty}>
                            {item.qty_selected! > 1 ? (
                              <img
                                className={styles.buttons}
                                src={menos}
                                onClick={() =>
                                  removeSingleItem(item.id_product)
                                }
                              />
                            ) : (
                              <span />
                            )}
                            <div className={styles.quantProducts}>
                              {item.qty_selected}
                            </div>
                            <img
                              className={styles.buttons}
                              src={mais}
                              onClick={() => addSingleItem(item.id_product)}
                            />
                            <Icon
                              className={styles.buttons}
                              icon="codicon:trash"
                              color="#a20c1e"
                              width="35"
                              height="35"
                              onClick={() => removeItemLocal(item.id_product)}
                            />
                          </div>
                        </li>
                        <hr />
                      </div>
                    )
                  })}
                </ul>
              ) : (
                <p className={styles.emptyCart}>Este carrinho está vazio!!</p>
              )}
            </div>
            <div className={styles.containerPayment}>
              <h1>Total</h1>
              <div className={styles.paymentDetails}>
                <p>Total:</p>
                <span>
                  R$ {totalPrice > 0 ? totalPrice.toFixed(2) : '0.00'}
                </span>
              </div>
              <ButtonComponent>
                <button
                  disabled={cartLocal!.length <= 0 ? true : false}
                  onClick={() => purchaseProducts()}
                >
                  Finalizar
                </button>
              </ButtonComponent>
              <p>Métodos de pagamento</p>
              <div className={styles.paymentCards}>
                <Icon icon="logos:mastercard" />
                <Icon icon="logos:visaelectron" />
                <Icon icon="logos:elo" />
                <Icon
                  icon="ic:round-pix"
                  color="#2da77a"
                  width="30"
                  height="30"
                />
                <img
                  src="https://img.icons8.com/color/48/000000/boleto-bankario.png"
                  width="40"
                  height="25"
                />
              </div>
              <p>Proteção ao consumidor</p>
              <div className={styles.protected}>
                <img src={protect} width="20" height="20" />
                <span>
                  Recupere o seu reembolso se o artigo não for entregue ou de
                  acordo com a descrição.
                </span>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}