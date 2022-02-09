export type ProductType = {
  _id: string;
  title: string | null;
  price: number | null;
  images: string[];
  quantites: number;
  description: string;
  createAt: number;
  updateAt: string | null;
  _destroy: boolean;
};
