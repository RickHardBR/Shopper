import { useContext, useEffect, useState } from 'react'

import { ContextGlobal } from '../../Context/ContextGlobal'

import styles from './style.module.scss'

import Loading from '../Loading/Loading'

import Paginate from '../Paginate/paginate'

import ButtonComponent from '../../communs/Buttons/Buttons'

export default function ProductsCard() {
  
  const {
    getProducts,
    products,
    productsLoading,
    currentPage,
    setCurrentPage,
    addCartLocal,
    setSelectQty,
  } = useContext(ContextGlobal)

  useEffect(() => {
    getProducts()
  }, [currentPage])

  return (
    <div className={styles.container}>
      <ul className={styles.ulContainer}>
        {!productsLoading ? (
      
          products.map(item => {
          
            return (
              <li key={item.id_product} className={styles.productsCard}>
                <div className={styles.productsCardTop}>
                  <div className={styles.itemProduct}>
                    <div className={styles.productsImage}>
                      <img src={item.photo_product} alt="azeite" />
                    </div>

                    <div
                    className={styles.productsPrice}>
                      R$ {item.price} <span>unid</span>
                    </div>
                  </div>
                  <div className={styles.qty}>
                    <div className={styles.productsSelect}>
                      <input
                        className={styles.productsQuant}
                        type="number"
                        min="0"
                        max="10"
                        placeholder="1"
                        onChange={(e: any) =>
                          setSelectQty(Number(e.target.value))
                        }
                      />
                    </div>

                    <div className={styles.productsPurchase}></div>
                    <ButtonComponent>
                      <button 
                        onClick={() =>
                        addCartLocal(item)}>
                        Comprar
                      </button>
                    </ButtonComponent>
                  </div>

                  <div className={styles.productsCheckbox}></div>
                </div>
                <div className={styles.containerCardAbout}>
                  <div className={styles.productsCardAbout}>
                    <div className={styles.productsCardMiddle}>
                      <p>
                        {item.product_name}
                      </p>
                    </div>

                    <div className={styles.productsCardBase}>
                      <p>
                        Estoque:
                      </p>
                      <span>
                        {item.qty_stock}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            )
          })
        ) : (
          <Loading />
        )}
      </ul>
      <Paginate
        setCurrentPage={setCurrentPage}
        openPaginate={productsLoading}
      />
    </div>
  )
}
