export interface IProduct {
  _id: string;
  title: string;
  desc: string;
  price: number;
  stock: number;
  img?: string;
  color?: string;
  size?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
