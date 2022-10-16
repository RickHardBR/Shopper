import { ChangeEvent } from 'react';
import { IProductType, IUsersType } from '../types/apiBaseTypes';


export type DatesLocal = {
  buyDate: string | Date;
  deliveyDate: string | Date;
}

export type ContextGlobaTypes = {
  userLocal: any
  isOpen: boolean
  selectQty: number
  errosAndSuccess: string
  currentPage: number
  products: IProductType[]
  productsLoading: boolean
  cartLocal: IProductType[] | [] | undefined
  getProducts: () => Promise<void>
  setDate: (input: string) => void
  setCartLocal: (input: any) => void
  setIsOpen: (input: boolean) => void
  setSelectQty:(input: number) => void
  removeItemLocal: (id: number) => void
  purchaseProducts: () => Promise<void>
  setCurrentPage: (input: number) => void
  addCartLocal: (input: IProductType)=> void
  addUser: (e: ChangeEvent<HTMLFormElement>) => Promise<void>

  isOpenModal: boolean
  setIsOpenModal: (input: boolean) => void
  
  formUser: {
    form: IUsersType;
    clearInputs: () => void
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  }
}
