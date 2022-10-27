import { ChangeEvent } from 'react';
import { IProductType, IUsersType } from '../types/apiBaseTypes';


export type TErrorsAndSuccessApi = 
  {
    type: string,
    message?: string,
  };

export type TCompletedPurchase = {
  name: string,
  buyDate: string,
  deliveyDate: string,
  listPurchase: IProductType[]
}

export type ContextGlobaTypes = {
  isOpen: boolean
  selectQty: number
  errorsAndSuccess: TErrorsAndSuccessApi
  currentPage: number
  products: IProductType[]
  productsLoading: boolean
  cartLocal: IProductType[] | [] | undefined
  completedPurchase: TCompletedPurchase
  getProducts: () => Promise<void>
  setDate: (input: string) => void
  setCartLocal: (input: any) => void
  setIsOpen: (input: boolean) => void
  setSelectQty:(input: number) => void
  removeItemLocal: (id: number) => void
  purchaseProducts: () => Promise<void>
  setErrorsAndSuccess: (input: TErrorsAndSuccessApi) => any
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