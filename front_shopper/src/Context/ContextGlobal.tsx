import { ChangeEvent, createContext, ReactNode, useState } from 'react'

import { useForm } from '../hooks/useForm'

import { useLocalStorage } from '../hooks/useLocalStorage'

import { apiBase } from '../services/apiBase'

import { TErrorsAndSuccessApi, TCompletedPurchase } from './ContextGlobalTypes'

import { ContextGlobaTypes } from './ContextGlobalTypes'

import { IProductType, IUsersType } from '../types/apiBaseTypes'
import { formatDate } from '../utils/formatDate'

type ContextGlobalProps = {
  children: ReactNode
}

export const ContextGlobal = createContext<ContextGlobaTypes>(
  {} as ContextGlobaTypes
)

export const ContextGlobalComponent = ({ children }: ContextGlobalProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const [products, setProducts] = useState<IProductType[]>([])

  const [productsLoading, setProductsLoading] = useState<boolean>(false)

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  const [selectQty, setSelectQty] = useState<number>(1)

  const [currentPage, setCurrentPage] = useState<number>(1)

  const [cartLocal, setCartLocal] = useLocalStorage<IProductType[] | []>(
    'cart',
    []
  )

  const [completedPurchase, setCompletedPurchase] =
    useState<TCompletedPurchase>({
      name: '',
      buyDate: '',
      deliveyDate: '',
      listPurchase: []
    })

  const [date, setDate] = useState<string>('')

  const [errorsAndSuccess, setErrorsAndSuccess] =
    useState<TErrorsAndSuccessApi>({
      type: '',
      message: '',
    })

  const formUser = useForm<IUsersType>({
    first_name: '',
    last_name: '',
    email: ''
  })

  //* =========================================================================

  const addUser = async (e: ChangeEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      const res = await apiBase.post('/user/singUp', { ...formUser.form })
      formUser.clearInputs()
      setErrorsAndSuccess({
        type: 'message',
        message: res.data.message
      })
    } catch (error: any) {
      console.log(error)
      setErrorsAndSuccess({
        type: 'message',
        message: error?.response?.data
      })
    }
  }

  const addCartLocal = (item: IProductType) => {
    
    const newCart = [...cartLocal!]

    const index = cartLocal!.findIndex(
      itemProduct => itemProduct.id_product === item.id_product
    )
    if (index === -1) {
      newCart.push({ ...item, qty_selected: selectQty })
    } else {
      newCart[index].qty_selected! = newCart[index].qty_selected! + selectQty
    }

    setCartLocal(newCart)
    setSelectQty(1)

    setIsOpen(true)
  }

  const removeItemLocal = (id: number) => {
    
    const cloneCart = [...cartLocal!]

    const product = cloneCart.findIndex(item => item.id_product === id)

    cloneCart.splice(product, 1)

    setCartLocal(cloneCart)
  }

  const getProducts = async () => {
    
    try {
      setProductsLoading(true)
      const { data } = await apiBase.get(`/products/all/${currentPage}`)
      setProducts(data)
      setProductsLoading(false)
    } catch (error: any) {
      console.log(error?.data)
    } finally {
      setProductsLoading(false)
    }
  }

  const formatCart = cartLocal?.map((item: any) => {
   
    return {
      id_product: item.id_product,
      qty_product_selected: item.qty_selected
    }
  })

    const validateInformations =
    formUser.form.email.length <= 0||
    formUser.form.first_name.length <= 0 ||
    formUser.form.last_name.length <= 0 ||
    date.length <= 0

  const purchaseProducts = async () => {
    try {
      if (validateInformations) {
        setErrorsAndSuccess(
         {
          type: 'message',
          message:  'Verique se preencheou Nome, sobrenome e email  ou data de entrega para prosseguir com a compra!.'
         }
        )
        return
      }

      const res = await apiBase.post(
        `/purchase/${formUser.form.email}?date=${date}`,
        formatCart
      )

      if (res.status === 200) {
        setErrorsAndSuccess({
          type: 'obj'
        })
        setCompletedPurchase({
          name: `${formUser.form.first_name} ${formUser.form.last_name}`,
          buyDate: formatDate(new Date(), 'short'),
          deliveyDate: date,
          listPurchase: cartLocal!
        })
        setDate('')
        setIsOpen(false)
        setCartLocal([])
        await getProducts()
        
      }
    } catch (error: any) {
      console.log(error)
      setErrorsAndSuccess({
        type: 'message',
        message: error?.response?.data
      })
    }
  }

  const history: ContextGlobaTypes = {
    products,
    productsLoading,
    getProducts,
    purchaseProducts,
    //* ===============
    currentPage,
    setCurrentPage,
    //* ================
    isOpen,
    setIsOpen,
    isOpenModal,
    setIsOpenModal,
    //* ================
    selectQty,
    setSelectQty,
    //* =================
    cartLocal,
    completedPurchase,
    addCartLocal,
    setCartLocal,
    removeItemLocal,
    //* =================
    formUser,
    addUser,
    //* ==================
    setDate,
    errorsAndSuccess,
    setErrorsAndSuccess
  }

  return (
    <ContextGlobal.Provider value={history}>{children}</ContextGlobal.Provider>
  )
}
