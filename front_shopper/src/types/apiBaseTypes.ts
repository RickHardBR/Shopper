export interface IProductType {
    // [x: string]: string | undefined;
    id_product:number;
    product_name: string;
    price:number;
    qty_stock: number;
    qty_selected?: number;
    photo_product: string;
  }

  export interface IUsersType {
    first_name:string;
    last_name:string;
    email:string;
  }