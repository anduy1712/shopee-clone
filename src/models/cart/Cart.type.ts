// const cartData: {

import { ProductType } from '../product/product.type';

export interface CartType extends ProductType {
  quantity: number;
}

export type CartRequest = {
  userId: string;
  products: Pick<CartType, '_id' | 'quantity'>[];
};
