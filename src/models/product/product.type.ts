export type ProductInputModel = {
  title?: string;
  price?: number;
  images?: string[];
  quantites?: number | null;
  description?: string;
};

export type ProductOutputModel = {
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
