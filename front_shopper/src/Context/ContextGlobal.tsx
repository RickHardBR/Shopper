import {
  ChangeEvent,
  createContext,
  ReactNode,
  useEffect,
  useState
} from 'react'

import { useForm } from '../hooks/useForm'

import { useLocalStorage } from '../hooks/useLocalStorage'

import { apiBase } from '../services/apiBase'

import { formatDate } from "../utils/formatDate"

import { DatesLocal } from "./ContextGlobalTypes"

import { ContextGlobaTypes } from './ContextGlobalTypes'

import {
  IProductType,
  IUsersType
} from '../types/apiBaseTypes'

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
  
  const [selectQty, setSelectQty] = useState<number>(1)

  const [currentPage, setCurrentPage] = useState<number>(1)
  
  let [cartLocal, setCartLocal] = useLocalStorage<IProductType[] | []>('cart', [])
  let [userLocal, setUserLocal] = useLocalStorage<IUsersType | any>('user', "")
  let [ datesLocal, setDatesLocal ] = useLocalStorage<DatesLocal[] | []>("dates", []);
  let [ date, setDate ] = useState<string>(""); 
  
  const [ errosAndSuccess, setErrosAndSuccess ] = useState<string>("")
  const [isOpenModal, setIsOpenModal ] = useState<boolean>(false)

  const formUser = useForm<IUsersType>({
    first_name: "",
    last_name: "",
    email: ""
  })
  
  const addUser = async (e: ChangeEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const res = await apiBase.post("/user/singUp", {...formUser.form})
      console.log(res.data)
      formUser.clearInputs()
      setErrosAndSuccess(res.data.message)
    } catch (error: any) {
      setIsOpenModal(true)
      console.log(error)
      setErrosAndSuccess(error?.response?.data)
    }
  }


  const addDateLocal = (deliveryDate: string) => {
    const newsDate = [...datesLocal!]

    const newDate: DatesLocal = {
      buyDate: formatDate(new Date(date), "short"),
      deliveyDate:formatDate(new Date(deliveryDate + "T00:00"), "short")
    }
    newsDate.push(newDate)
    setDatesLocal(newsDate)
  }

  const addCartLocal = (item: IProductType)=>{
    
    const newCart = [ ...cartLocal! ]

        const index = cartLocal!.findIndex( itemProduct => itemProduct.id_product === item.id_product  );
        if ( index === -1 ) {
            newCart.push({ ...item, qty_selected: selectQty });
        } else {
            newCart[index].qty_selected! = (newCart[index].qty_selected!  + selectQty)
        };

        setCartLocal(newCart);
        setSelectQty(1);

        setIsOpen(true)
  }

  const removeItemLocal = (id: number)=>{
    const cloneCart = [...cartLocal!]
    
    const product = cloneCart.findIndex((item)=>item.id_product === id)

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

  const purchaseProducts = async ()=>{
    try {
      for ( let i = 0; i < cartLocal!.length; i++){
       const res = await apiBase.post(`/purchase/${formUser.form.email}?date=${date}`, {
          id_product: cartLocal![i].id_product,
          qty_product_selected: cartLocal![i].qty_selected,
        })
  
        if (res.status === 200) {
          addDateLocal(date)
          setCartLocal([]);
          window.location.assign("/")
        }
      }  

    } catch (error: any) {
      console.log(error);
      setErrosAndSuccess(error?.response?.data);
    }
  }


  const history: ContextGlobaTypes = {
    products,
    productsLoading,
    getProducts,
    currentPage,
    setCurrentPage,
    isOpen,
    setIsOpen,
    selectQty,
    setSelectQty,
    cartLocal,
    addCartLocal,
    removeItemLocal,
    setCartLocal,
    purchaseProducts, 
    setDate,
    formUser,
    userLocal,
    addUser,
    errosAndSuccess,
    isOpenModal, 
    setIsOpenModal,
    setErrosAndSuccess
  }

  return (
    <ContextGlobal.Provider value={history}>{children}</ContextGlobal.Provider>
  )
}
