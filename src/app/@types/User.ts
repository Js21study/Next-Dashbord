export interface IUser {
  _id?: string;
  username: string;
  email: string;
  password: string;
  img?: string;
  isAdmin?: string;
  isActive?: string;
  phone?: string;
  address?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
