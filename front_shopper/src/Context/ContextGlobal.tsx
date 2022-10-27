import { ChangeEvent, createContext, ReactNode, useState } from 'react'

import { useForm } from '../hooks/useForm'

import { useLocalStorage } from '../hooks/useLocalStorage'

import { apiBase } from '../services/apiBase'

import { TErrorsAndSuccessApi } from './ContextGlobalTypes'

import { ContextGlobaTypes } from './ContextGlobalTypes'

import { IProductType, IUsersType } from '../types/apiBaseTypes'

type ContextGlobalProps = {
  children: ReactNode
}

export const ContextGlobal = createContext<ContextGlobaTypes>(
  {} as ContextGlobaTypes
)

export const ContextGlobalComponent = ({ children }: ContextGlobalProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)//abrir menu 

  const [products, setProducts] = useState<IProductType[]>([])

  const [productsLoading, setProductsLoading] = useState<boolean>(false)

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  const [selectQty, setSelectQty] = useState<number>(1)

  const [currentPage, setCurrentPage] = useState<number>(1)

  let [cartLocal, setCartLocal] = useLocalStorage<IProductType[] | []>(//persistir cart localmente
    'cart',
    []
  )


  let [date, setDate] = useState<string>('')

  const [errorsAndSuccess, setErrorsAndSuccess] =//joga os erros e  sucessos da API para o useState
    useState<TErrorsAndSuccessApi>('')

  const formUser = useForm<IUsersType>({//hook de formulário
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
      setErrorsAndSuccess(res.data.message)
    } catch (error: any) {
      console.log(error)
      setErrorsAndSuccess(error?.response?.data)
    }
  }

  const addCartLocal = (item: IProductType) => {// add item ao cart local
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

  const removeItemLocal = (id: number) => { //remove o item do carrinho
    const cloneCart = [...cartLocal!]

    const product = cloneCart.findIndex(item => item.id_product === id)

    cloneCart.splice(product, 1)

    setCartLocal(cloneCart)
  }

  const getProducts = async () => {//pega todos os produtos da API
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

  const formatCart = cartLocal?.map((item: any) => {//é um metodo que formata os dados do cart local para API de compras (purchase)
    return {
      id_product: item.id_product,
      qty_product_selected: item.qty_selected
    }
  })

  const purchaseProducts = async () => {
    try {
      if (formUser.form.email.length <= 0) {
        setErrorsAndSuccess(
          'Coloque o seu email para prosseguir com a compra!.'
        )
        return
      }

      const res = await apiBase.post(
        `/purchase/${formUser.form.email}?date=${date}`,
        formatCart
      )

      if (res.status === 200) {
        setCartLocal([])
        await getProducts()
        setErrorsAndSuccess(
          'Sua compra foi realizada com sucesso!!'
        )
      }
    } catch (error: any) {
      console.log(error)
      setErrorsAndSuccess(error?.response?.data)
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
