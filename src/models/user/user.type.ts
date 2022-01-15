export type UserOutputModel = {
  _id: string;
  username: string;
  password: string;
  numberPhone: number;
  email: string;
  firstName: string;
  lastName: string;
  photoImage: string;
};
export type UserInputModel = {
  username: string;
  password: string;
  numberPhone?: number;
  email?: string;
  firstName?: string;
  lastName?: string;
  photoImage?: string;
};