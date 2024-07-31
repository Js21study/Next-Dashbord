export interface IProduct {
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
