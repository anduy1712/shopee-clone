export type Product = {
  _id?: string;
  title?: string | undefined;
  price?: string | undefined;
  images?: string[];
  quantites?: number;
  description?: string;
  createAt?: number;
  updateAt?: string | null;
  _destroy?: boolean;
};
